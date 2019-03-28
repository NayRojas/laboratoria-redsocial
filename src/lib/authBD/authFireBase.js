export const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const logInUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const authenticateFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider(); 
  return firebase.auth().signInWithPopup(provider);
};

export const authenticateGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider(); 
  return firebase.auth().signInWithPopup(provider);
};

export const logOutUser = () => {
  return firebase.auth().signOut();
};

export const deleteUser = () => {
  return firebase.auth().currentUser.delete();
};

