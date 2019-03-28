import { createPost, editPost } from '../view-controller.js';

export default (editCreate) => {
  const container = document.getElementById('container');
  const divContent = `

  <div class="cont-r-post m-a p-30 b-r mt-100">
    <select id="postType" class="block mt-5 p-5 btn2">
      <option value="Inteligencia Artificial">Inteligencia Artificial</option>
      <option value="Realidad virtual">Realidad virtual</option>
      <option value="Robótica">Robótica</option>
      <option value="Ciberseguridad">Ciberseguridad</option>
      <option value="Dispositivos móviles">Dispositivos móviles</option>
      <option value="Curiosidades">Curiosidades</option>
    </select>
    <input id="titlePost" type="text" placeholder="Escriba Titulo" class="p-5">
    <div class="cont-float">
      <div class="w-60p">
        <textarea id="descriptionPost" placeholder="Escribe aquí" class="p-5 texta"></textarea>
      </div>
      <div class="w-40p">
        <img id="multmediaImage" src="../image/default-placeholder.png" class="btn2"/>
      </div>
    </div>
    <div class="cont-float">

      <div class="w-40p">
        <select id="postPrivacy">
          <option value="amigos">Amigos</option>
          <option value="publico">Público</option>
        </select>
      </div>
      <div class="w-60p">
        <input type="file" id= "multimedia"/>
      </div>

    </div>

    <div class="cont-float">
      <button id="savePublicPost" class="btn btn1 m-a mt-15 right">Publicar</button>
      <button id="closePost" class="btn btn1 m-a mt-15 right mr-5">Cerrar</button>
    </div>

  </div>
  
    `;
  container.innerHTML = divContent;

  const userPhoto = document.getElementById('userPhoto');
  const userName = document.getElementById('userName');
  const postType = document.getElementById('postType');
  const titlePost = document.getElementById('titlePost');
  const descriptionPost = document.getElementById('descriptionPost');
  const multimedia = document.getElementById('multimedia');
  const multmediaImage = document.getElementById('multmediaImage');
  const postPrivacy = document.getElementById('postPrivacy');
  const savePublicPost = document.getElementById('savePublicPost');
  const closePost = document.getElementById('closePost');

  if (editCreate)
    createPost(userPhoto, userName, postType, titlePost, descriptionPost, multimedia, multmediaImage, postPrivacy, savePublicPost, closePost);
  else
    editPost(userPhoto, userName, postType, titlePost, descriptionPost, multimedia, multmediaImage, postPrivacy, savePublicPost, closePost);
  return 1;
};