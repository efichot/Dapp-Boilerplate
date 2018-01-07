/* ------------------------- External Dependencies -------------------------- */
const admin = require('firebase-admin');
import bodyParser from "body-parser"
import express from "express"
import { 
  graphqlExpress,
  graphiqlExpress
} from "graphql-server-express"
import { printSchema } from "graphql/utilities/schemaPrinter"
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
/* ------------------------- Internal Dependencies -------------------------- */
import schema from "./data/schema"

const validateFirebaseIdToken = (req, res, next) => {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !req.cookies.__session) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
        'Make sure you authorize your request by providing the following HTTP header:',
        'Authorization: Bearer <Firebase ID Token>',
        'or by passing a "__session" cookie.');
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  }
  admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
    req.user = decodedIdToken;
    next();
  }).catch(error => {
    res.status(403).send('Unauthorized');
  });
};

/* ----------------------------- Module Logic ------------------------------- */
const setupGraphQLServer = () => {
  // setup server
  const graphQLServer = express()
  graphQLServer.use(cors)
  graphQLServer.use(cookieParser)
  // graphQLServer.use(validateFirebaseIdToken)

  // Main API (/api/graphql)
  graphQLServer.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({ schema, context: {} })
  )

  // Debugging API (/api/graphiql)
  graphQLServer.use(
    "/graphiql",
    graphiqlExpress({ endpointURL: "/api/graphql" })
  )

  // Print Schema API (/api/schema) | Generate Public schema for future public API
  graphQLServer.use("/schema", (req, res) => {
    res.set("Content-Type", "text/plain")
    res.send(printSchema(schema))
  })

  return graphQLServer
}

export default setupGraphQLServer
