const organizationSchema = {
    'title': 'Organization Schema',
    'description': 'Organization schema matching the Cloud Storage(Firebase, PouchDB, Horizon, etc...)',
    'version': 0,
    'type': 'object',
    'properties': {
      "data": {
        type: "object",
        properties: {
          "identity": {
            type: "object",
            properties: {
              name: {
                  "type": "object",
                  "properties": {
                      "organizationName": {
                        "type": "string"
                      },
                      "organizationLegal": {
                        "type": "string"
                      }
                  }
              },
            } // end properties
          }, // end identity
      }} // end data
    }
};

export default organizationSchema;
