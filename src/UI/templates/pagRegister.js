import { btnAcceptRegisterAndSendToHome} from '../view-controller.js';

export default () => {
  const container = document.getElementById('container');
  const divContent = `
  <div class="cont-register-login m-a p-30 b-r mt-100">
    <h2 class="m-10">Únete a nuestra comunidad</h2>
    <form>
      <label for="createUsername" class="mt-8">Nombre de usuario :</label>
      <input type="text" id="createUsername" class="mt-5 p-5" placeholder="Nombre de usuario">

      <label for="createEmail" class="mt-8">Correo :</label>
      <input type="text" id="createEmail" class="mt-5 p-5" placeholder="Correo">

      <label for="createPassword" class="mt-8">Contraseña :</label>
      <input type="password" id="createPassword" class="mt-5 p-5" placeholder="Constraseña">
    </form>
    <button class="btn-register m-a block mt-15" id="buttonAcceptRegister">Registrar</button>
  </div>
  `;
  container.innerHTML = divContent;

  const createUsername = document.getElementById('createUsername'); 
  const createEmail = document.getElementById('createEmail');
  const createPassword = document.getElementById('createPassword');
  const buttonAcceptRegister = document.getElementById('buttonAcceptRegister');

  btnAcceptRegisterAndSendToHome(createUsername, createEmail, createPassword, buttonAcceptRegister);

  return 1;
}
