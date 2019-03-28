import { mainRedSocial } from '../view-controller.js';

export default () => {
  const header_container = document.getElementById("header-container");
  const divHeader = `
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
                <label id="userName"></label>
              </li>
              <li class="cell sub-menu">
                <img src="" id="userPhoto" class="avatar-perfil cursor">
                <!-- <input type="image" src=""  ></input> -->

                <ul class="rrr ">
                  <li id="createPost" class="btn3 cursor"> Crear Post </li>
                  <li id="buttonDeleteUser" class="btn3 cursor">
                    <a>
                      Eliminar cuenta
                    </a>
                  </li>
                  <li id="buttonLogOut" class="btn3 cursor">
                    <a>
                      Salir
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
`;
  header_container.innerHTML = divHeader;

  const container = document.getElementById('container');
  const divContent = `
    <select id = "filterTypePost" class="buttonsOfCategories">
        <option value="Todos">Elige tu filtro</option>
        <option value="Inteligencia Artificial">Inteligencia Artificial</option>
        <option value="Realidad virtual">Realidad virtual</option>
        <option value="Robótica">Robótica</option>
        <option value="Ciberseguridad">Ciberseguridad</option>
        <option value="Dispositivos móviles">Dispositivos móviles</option>
        <option value="Curiosidades">Curiosidades</option>
    </select>    


    <div id ="postWall" class="grid-container">
    </div>`;
  container.innerHTML = divContent;

  // capturar todos los eventos de entrada del muro principal
  const userPhoto = document.getElementById('userPhoto');
  const userName = document.getElementById('userName');
  const buttonDeleteUser = document.getElementById('buttonDeleteUser');
  const buttonLogOut = document.getElementById('buttonLogOut');
  const filterTypePost = document.getElementById('filterTypePost');
  const createPost = document.getElementById('createPost');
  const postWall = document.getElementById('postWall');

  mainRedSocial(userPhoto, userName, buttonDeleteUser, buttonLogOut, createPost, postWall, filterTypePost);

  return 1;
};