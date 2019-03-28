export const configBD = () => {
  const config = {
    apiKey: 'AIzaSyCQkOHpFC5Vpm0zKD2xuBJZIqOtnhHS_kE',
    authDomain: 'social-network-32416.firebaseapp.com',
    databaseURL: 'https://social-network-32416.firebaseio.com',
    projectId: 'social-network-32416',
    storageBucket: 'social-network-32416.appspot.com',
    messagingSenderId: '360092896699'
  };
  firebase.initializeApp(config);
  return 1;
};