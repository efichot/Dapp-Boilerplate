const projectSchema = {
    'title': 'Project Schema',
    'description': 'Project schema matching Cloud Storage(Firebase, PouchDB, Horizon, etc...)',
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
                      "projectName": {
                        "type": "string"
                      },
                      "projectAlias": {
                        "type": "string"
                      }
                  }
              },
            } // end properties
          }, // end identity
      }} // end data
    }
};

export default projectSchema;
