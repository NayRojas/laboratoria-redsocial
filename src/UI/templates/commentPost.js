import {createCommentPost} from '../view-controller.js';

export default (idPost) => {
    const container = document.getElementById('container');
    const divContent = `

    <div class="cont-comentar">
      <div id = "wallComentPost_${idPost}" class="grid-container-comment ">
      </div>

      <input id = "inputComment_${idPost}" class="inp-comentario mt-15 p-5" placeholder="Comenta..." type="text"></input>
      <button id= "saveCommentPost_${idPost}" class="btn btn1 m-a mt-15 right">Publicar</publicar>
      <button id= "closeCommentPost_${idPost}" class="btn btn1 m-a mt-15 right">Cerrar</button>
    </div>
      `;
  container.innerHTML = divContent;
  
  const inputComment = document.getElementById(`inputComment_${idPost}`);
  const wallComentPost = document.getElementById(`wallComentPost_${idPost}`);
  const saveCommentPost = document.getElementById(`saveCommentPost_${idPost}`);
  const closeCommentPost = document.getElementById(`closeCommentPost_${idPost}`);

  createCommentPost(inputComment,wallComentPost, saveCommentPost, closeCommentPost);
  return 1;
}



