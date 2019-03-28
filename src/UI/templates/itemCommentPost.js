export default (idPost, dataPostComment, likesUsers, postCommentWall) => {
  const divContent = document.createElement('DIV');
  divContent.setAttribute('id', `idContainerComment_${idPost}`);
  divContent.setAttribute('class', 'grid-item-comment m-a p-5 b-r');

  const divContent_ = `
 <div class="cont-float" style="overflow: none">
  <div class="w-30p left">
    <img src="${dataPostComment.propietario.foto}" class="avatar-perfil cursor ">
  </div>
  <div class="w-70p">
    <label class="block left title">${dataPostComment.propietario.nombre}</label>
    <br>
    <p class="block ">${dataPostComment.contenido}</p>
  </div>
 </div>
    `;
  divContent.innerHTML = divContent_;
  postCommentWall.appendChild(divContent);
  return 1;
};