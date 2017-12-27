const userSchema = {
    'title': 'User Scheme',
    'description': 'describes a simple hero',
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
                      "nameFirst": {
                        "type": "string"
                      },
                      "nameLast": {
                        "type": "string"
                      }
                  }
              },
            } // end properties
          }, // end identity
      }} // end data
    }
};

export default userSchema;
