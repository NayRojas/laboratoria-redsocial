import { btnAcceptLoginAndSendToHome } from '../view-controller.js';

export default () => {
  const container = document.getElementById('container');
  const divContent = `
  <div class="cont-register-login m-a p-30 b-r mt-100">
  <h2 class="m-10">Communitytech</h2>
  <form>
    <label for="inputEmail" class="mt-8">Nombre de usuario :</label>
    <input type="text" id="inputEmail" class="mt-5 p-5" placeholder="nombre de usuario o correo">
    <label for="inputPassword" class="mt-8">Nombre de usuario :</label>
    <input type="password" id="inputPassword" class="mt-5 p-5" placeholder="contraseña">
  </form>
  <button id="missedPassword" class="btn-register m-a block mt-15">¿Olvidaste tu contraseña?</button>
  <button id="buttonAcceptLogin" class="btn-register m-a block mt-15">Iniciar sesion</button>
  </div>
    `;
  container.innerHTML = divContent;

  const inputEmail = document.getElementById('inputEmail');
  const inputPassword = document.getElementById('inputPassword');
  const missedPassword = document.getElementById('missedPassword');
  const buttonAcceptLogin = document.getElementById('buttonAcceptLogin');
  btnAcceptLoginAndSendToHome(inputEmail, inputPassword, buttonAcceptLogin, missedPassword);

  return 1;
};