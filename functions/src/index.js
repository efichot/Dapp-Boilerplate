/* ------------------------ External Dependencies ------------------------ */
const _ = require('lodash')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const shortid = require('shortid');
const express = require('express');
/* ------------------------- Internal Dependencies -------------------------- */
const db = require('./database');
const cors = require('cors')({origin: true});
import setupGraphQLServer from './graphql'

/* ------------------------ Initialize Dependencies ------------------------- */
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$');
// const graphQLServer = setupGraphQLServer()
// Firebase
const serviceAccount = {
  "type": "service_account",
  "project_id": "yser-c2017",
  "private_key_id": "475430b255a314365d35089a2b5dae67f74e3ad4",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1iecS5WCLcDAY\nEyzawWKH6A308n2So3VsOj56CKXyJL2jlsGTSixRpxBHDWCJnn5+pu4V2tdFZLq2\nzOoqELulyO1uTHOD91ieLElAFG5sD4baMqOExzN/ADCMb4pzMK2XmoYpWxFq5FAf\nEzswsQA8XN40RQCDcrERi0Mtyqrp8Ph4KnDjBNrEwrZxokupTpvyYZua9eZ7xni0\ngKKq913si6m4yaSqa4SY6qRN71LW7rGasCo6kSQYXKWGw3x2Uo30/NzPH9H+bxpZ\nBNz3fm4uCVBTDLK7JItFpHamNiqVw/tnEa1zcEftMQWpGSoFiA8DOCr7ITQeF+QC\nku91dbPFAgMBAAECggEAEZM3+oGX6u/xzAbhNw11VUx/O2lVhGKMTe3Gmihnrm1l\nqaaA95o896u5nPNb1v7v5qGRF68P28FAfU2R1wA3NnnhGKZQoaRK4UdO0SQZO592\nMf4ojASABQnW6WWsDPJXv/9fATZ2lXdklVmWh6R/Lhjcj0ll3xP1tgnaN17xVIQM\ns+AGIyxmjfFKz7XGFohpHID/yft2+jMuJP6/AH2iJQ80bEy+pFAGgRxI5U27RMUk\nMfcd1NUsrOKTvt5VnacjLDU36jO4I5VQwNXRa1WShfv9zbcw/5JsvydJmE0mbnEW\nzKoiQw94YwTYiliIySEP5c7b0CEOfMpXa+gNgxyN6QKBgQDiMBdgadlg3JojCoQP\nWISA81AvnQgR7A0zEnt9A565522EWj8u03j1kpnbLtqT8/ey7z3PB7yzMUrY5N7/\nQoiySTdZk9AyEAW7ItlYaB59Mv2a/7Fawr9d+tx0wE4as8HmsTVvpyfeNbXz2c0X\n5FRgSveUvZbiH23Nybr+adMbnQKBgQDNd0hvQO7NpWNiIJiMsn40Vqt9e9DNJAms\nHEzTdGGAdIuz1DXAWb//4i6cQCGakBz5XA8Ty05QE6yrzRefAS52rOAbeBciJ0Ok\ni0q/Sn2Nero2l+Doei2+4sg4JI67R19TgyzpJkKlMMnlz/CQy/EjDywiruyiZR2d\nnGTZ7efkSQKBgQC1jHpG9c74Mzk45QjotFjuk92JyhYfJIPXuX8K8evmNb6u3C0Y\nrb7KBZie2DWzScBIjETlNsWcYvU7sEDZTBMiXyghK0aR2FBxS2B+2FuYjGQIlDFL\ns0Mc8O0gfPZz8lKxkw1cCCQ09JGOIATBp5CeFa4xYheIekeNRN1ltZUv9QKBgAel\ng82YJgsDN7KkMekyj13VR+aQoBGyYKXGG9nWv/Yu4DAeGq4A6RNV0JRCEr4U1O82\nzNzYuR5jzQ5LwLBLM/Z4spJzIrFDstHB2VNLK2cDhUCY4GbmfSNYf0kPmzw/CL4r\n6JT4tow9R5ZE6dgJrvy2CNd1mRrmFncSJfKyVun5AoGAcD5teVI6Nd5sz6zd92d6\nc0pcSnLWd88WH0P/8cgFta5o75auEDOWsiYCPUypUmsSgXeI/4f5GtSnhsPQCwfG\nGIHDUQ5tpElCRxRJzAdv7KGLsDbPHTc+TbA9l5QyLvZLbDjmVwk9OwUAQEl1TO4d\nd9VoQ3RWjlqCo5yDVpm8Uwo=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-r2yq9@yser-c2017.iam.gserviceaccount.com",
  "client_id": "115069075030241605848",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-r2yq9%40yser-c2017.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yser-c2017.firebaseio.com"
});

// Firebase
const firestore = admin.firestore();

/* -------------------------------------------------------------------------- */

/* ------------------------ Internal Infrastructure ------------------------- */

/* -------------------------------------------------------------------------- */

/*---*---------------              ---------------*---* 

                         Identity

/*---*---------------              ---------------*---*/

exports.identity = functions.https.onRequest((request,response)=> {
  cors(request, response, () => {
    admin.auth().createCustomToken(request.body.uid)
    .then(function(customToken) {
      response.json(customToken).send()
    })
    .catch(function(error) {
      response.send(error)
      console.log("Error creating custom token:", error);
    });
  })  
})

/*---*---------------              ---------------*---* 

                         GraphQL 

/*---*---------------              ---------------*---*/
// exports.api = functions.https.onRequest(graphQLServer)

/*---*---------------              ---------------*---* 

                      Authentication 

/*---*---------------              ---------------*---*/
exports.authenticationComplete = functions.auth.user().onCreate(event => {

  const providerAccountType = {
    "google.com": 'google',
    "github.com": 'github',
    "twitter.com": 'twitter',
    "facebook.com": 'facebook',
  }[event.data.providerData.providerId]

  const person = {
    eid: event.data.uid,
    images: {
      imageProfile: event.data.photoURL
    },
    name: {
      nameDisplay: event.data.displayName,
      nameFirst: event.data.displayName,
    },
    contact: {
      contactEmail: event.data.email,
    },
    metadata: {
      metadataAccountType: providerAccountType || false
    },
    provider: event.data.providerData,
  }
  firestore.collection('people').add(person)

});

/*---*---------------              ---------------*---* 

                      Entity System 

/*---*---------------              ---------------*---*/

/* -------------------------------------------------------------------------- */

/* ------------------------- External API Services -------------------------- */

/* -------------------------------------------------------------------------- */
