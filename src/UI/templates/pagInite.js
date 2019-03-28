import { registerOnSubmit, accesWithFbOrGoogle, loginUser } from '../view-controller.js';

export default () => {

  document.getElementById("header-container").innerHTML = ``;

  const container = document.getElementById('container');
  const divContent = `
  <header>
    <nav class="table header-nav">
      <div class="cell">
        <nav class="table header-nav">
          <div class="cell">
            <a href="#!" class="brand-logo">
              ComunityTech
            </a>
          </div>
          <div class="cell right2">
            <ul class="table">
              <li class="cell">
                <a id="buttonLogin" class="btn-inite-sesion">
                  Iniciar Session
                </a>
              </li>
            </ul>
          </div>
        </nav>
  </header>

  <h2 class="logo-in-main">communitytech</h2>
  <h3 class="slogan">entérate de lo último en tecnología</h3>
  <div class="ways-of-inite">
    <button id="buttonRegister" class="btn-register">Registrate</button>
    <p>-o-</p>
    <button id="buttonFacebook" class="btn-continue-with-fb"><i class="icon-facebook icon-btn"></i> Continuar con Facebook</button>
    <button id="buttonGoogle" class="btn-continue-with-google"><i class="icon-googleplus icon-btn"></i>Continuar con Google</button>
    <h4 class="final-phrase"> ¡Descubre nuestra comunidad! </h4>
  </div>
` ;
  container.innerHTML = divContent;
  // Login
  const buttonLogin = document.getElementById('buttonLogin');

  // Registrar a usuario
  const buttonRegister = document.getElementById('buttonRegister');

  // Login Facebook and Google
  const buttonFacebook = document.getElementById('buttonFacebook');
  const buttonGoogle = document.getElementById('buttonGoogle');


  loginUser(buttonLogin);
  registerOnSubmit(buttonRegister);
  accesWithFbOrGoogle(buttonFacebook, buttonGoogle);

  return 1;
};  
