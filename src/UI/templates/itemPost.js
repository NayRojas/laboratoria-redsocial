export default (idPost, dataPost, deleteEdit, postWall, colorLike) => {
  const divContent = document.createElement('DIV');
  divContent.setAttribute('id', idPost);
  divContent.setAttribute('class', 'grid-item');

  const divContent_ = `
      <div class="table w-100p">
      <div class="cell ta-l">
        <img id="userPhoto" src="${dataPost.fotoUsuario}" class="avatar-perfil">
      </div>
      <div class="cell ta-l">
        <label id="postTypePrivate" class="postTypePrivate">
          ${dataPost.privacidad}
        </label><br>
        <label id="userName" class="userName">
          ${dataPost.nombreUsuario}
        </label> <br>
      </div>

      <div class="cell ta-r">
        <div class="con-dele-edit">
          ${deleteEdit}
        </div>
        <label id="dateAndTimeCreate" class="dateAndTimeCreate ">
          ${dataPost.fecha}
        </label><br>
        <label id="postType" class="postType">
          ${dataPost.categoria} </label>
      </div>
    </div>

    <div class="m-10">
      <label id="postTitle" class="postTitle">
        ${dataPost.titulo}
      </label>
    </div>

    <img id="multmediaImage" src="${dataPost.contenido.multimedia}" class="multmediaImage"><br>

    <div>
      <p id="postInfo" class="postInfo">${dataPost.contenido.descripcion}</p>
    </div>

    <div class="cont-icon">
      <span id="likes_${idPost}" class="cursor mr-5" style="background-color:${colorLike}">
        <i class="icon-like"></i>
        ${dataPost.likes.length} Likes
      </span>

      <span id="comment_${idPost}" class="cursor  mr-5">
        <i class="icon-bubble2"></i>
        ${dataPost.comentarios.length} Comentario
      </span>

      <span id="share_${idPost}" class="cursor">
        <i class="icon-share2"></i>
        Compartir
      </span>

    </div>
    
    <div id="wallComentItemPost_${idPost}" class="grid-container-comment">
    </div>
    `;
  divContent.innerHTML = divContent_;
  postWall.appendChild(divContent);
  return 1;
};