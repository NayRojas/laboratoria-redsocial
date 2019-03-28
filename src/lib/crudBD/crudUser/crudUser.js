export const createIdDocBDFireStore = (idCollection, idUser, obj) => {
  return firebase.firestore().collection(idCollection).doc(idUser).set(obj, { merge: true});
};  

export const createPostBDFireStore = (idCollection, obj) => {
  return firebase.firestore().collection(idCollection).add(obj);
};  

export const readDocBDFireStore = (idCollection, idUser) => {
  return firebase.firestore().collection(idCollection).doc(idUser).get();
};

export const readCollectionBDFireStore = (idCollection, callbackPost, objElements) => {
  firebase.firestore().collection(idCollection).onSnapshot((dataAllPost) => {
    callbackPost(dataAllPost, objElements);
  });
  return 1;
};

export const filterCollectionBy = (idCollection, documentField, valueDocumentField) => {
  return firebase.firestore().collection(idCollection).where(documentField, '==', valueDocumentField).get();
};

export const updateDocBDFireStore = (idCollection, idUser, obj) => {
  return firebase.firestore().collection(idCollection).doc(idUser).update(obj);
};

export const deleteDocFireStore = (idCollection, idUser) => {
  return firebase.firestore().collection(idCollection).doc(idUser).delete();
};
