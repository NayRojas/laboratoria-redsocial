export const sendEmail = (config) => {
  return firebase.auth().currentUser.sendEmailVerification(config);
};
  
export const passwordReset = (email) => {
  return firebase.auth().sendPasswordResetEmail(email);
};
  
export const userStateChange = (callbackUser, objElements) => {
  return firebase.auth().onAuthStateChanged((userState) => {
    callbackUser(userState, objElements);
  });
};

export const sendImagePost = (imageASubir) => {
  return firebase.storage().ref().child('images/' + imageASubir.name).put(imageASubir);
};
