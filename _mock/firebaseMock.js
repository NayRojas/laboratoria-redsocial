const auth = () => {
  return {
    currentUser: {
      sendEmailVerification: (config) => {
        return new Promise((resolve) => {
          resolve('se envio un mensaje de correo electronico para terminar con el proceso');
        });
      }
    },
    sendPasswordResetEmail: (emailUser) => {
      return new Promise((resolve) => {
        resolve('se envio un mensaje de correo electronico para cambiar tu contraseña');
      });
    },
    onAuthStateChanged: (userState) => {
      userState('usuario conectado');
    }
  };
};

const storage = () => {
  return {
     ref: () => {
       return {
         child: (createDirectoryImg) => {
          return {
            put: (img) => {
              return new Promise((resolve) => {
                resolve('Devuelve un objeto con una nueva URL');
              });
            }
          }
         }
       }
     }
  }
}
const firebase = {
  auth,
  storage,
};

export default jest.fn(() => {
  return firebase;
});