const db = require('../../../database');


const resolveFunctions = {
  Query: {
    /*---*--- Item ---*---*/
    item(_, {entity, branch, boundaries, order})
    {
      branch = branch || []
      const data = db.databaseSearchSingle({entity, branch, boundaries, order})
      try
      {
        return data.then((result)=>
        {
          return result
        })
      } catch (error) {
          return error
        }
    },
    list(_, {entity, branch, boundaries, order})
    {
      branch = branch || []
      const data = db.databaseSearch({entity, branch, boundaries, order})
      try {
        return data.then((result)=> {
          return {items: result, [entity]: result } // TODO: Eliminate [entity], but double check Frontend first.
        })
      } catch (error) {
        return error
      }
    },
  },
  User: {

  },
  Task: {
  }
}

export default resolveFunctions
