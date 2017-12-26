export const initialState = {
  community: {
    people: {
      
    }
  }
}


export const selectPersonPublic = (state, token) => state.database.community.people && state.database.community.people[token] ? state.database.community.people[token] : {} 