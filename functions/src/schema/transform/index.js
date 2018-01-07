export const transformUserOnCreate = (user) => ({
    uid: user.uid,
    authentication: user,
    identity: {
      name:{nameDisplay: user.displayName},
      images:{imageProfile: user.photoURL}
    }
  })