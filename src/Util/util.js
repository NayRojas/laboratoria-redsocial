export const changeHash = (hash) => {
  location.hash = hash;
};
  
export const getDayAndHour = () => {
  let h, m, s; 
  
  const checkTime = (i) => {
    if (i < 10) i = '0' + i;
    return i;
  };
    
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
    'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
  const date = new Date();
    
  const day = date.getDate();
  const month = date.getMonth();
  const yy = date.getFullYear();
    
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
    
  const fechaYhora = day + ' ' + months[month] + ' ' + yy + ' a las ' + h + ':' + m + ':' + s;
  return fechaYhora;
};
  
export const objectCreateUserProfile = (usuario, correo, foto, userCreateDay) => {
  const objectUserProfile = {};
  objectUserProfile.fecha = userCreateDay;
  objectUserProfile.usuario = usuario;
  objectUserProfile.correo = correo;
  objectUserProfile.foto = foto;
  objectUserProfile.estado = '';
  objectUserProfile.edad = '';
  return objectUserProfile;
};
  
export const objectCreatePost = (correoUsuario, fotoUsuario, nombreUsuario, fechaCreacion, privacidad, categoria, titulo, descripcion, multimedia) => {
  const objectPost = {};
  objectPost.correoUsuario = correoUsuario;
  objectPost.fotoUsuario = fotoUsuario;
  objectPost.nombreUsuario = nombreUsuario;
  objectPost.fecha = fechaCreacion;
  objectPost.privacidad = privacidad;
  objectPost.categoria = categoria;
  objectPost.titulo = titulo;
  objectPost.contenido = {
    descripcion: descripcion,
    multimedia: multimedia,
  };
  objectPost.likes = [],
  objectPost.comentarios = [
  ];
  return objectPost;
};

export const ObjectUpdatePost = (privacidad, categoria, titulo, descripcion, multimedia) => {
  const objectUpdatePost = {};
  objectUpdatePost.privacidad = privacidad;
  objectUpdatePost.categoria = categoria;
  objectUpdatePost.titulo = titulo;
  objectUpdatePost.contenido = {
    descripcion: descripcion,
    multimedia: multimedia,      
  };
  return objectUpdatePost;
};

export const deletAndEdit = (idDeleteEdit) => {
  const deleteEdit = 
  `<span id="editPost_${idDeleteEdit}" class="icon-pencil cursor mr-5"></span>
  <span id="deletePost_${idDeleteEdit}" class="icon-bin cursor"></span>`;
  return deleteEdit;
};

export const objErrMessageFibaseAuth = {
  messageAuth1: 'The email address is already in use by another account.',
  messageAuth2: 'The email address is badly formatted.',
  messageAuth3: 'Password should be at least 6 characters',
  messageAuth31: 'The password must be 6 characters long or more.',
  messageAuth4: 'There is no user record corresponding to this identifier. The user may have been deleted.',
  messageAuth5: 'The password is invalid or the user does not have a password.'
};

export const objErrMessageFibaseAuthSpanish = {
  messageAuth0: 'No haz escrito tu nombre de Usuario, porfavor de intentarlo de nuevo',
  messageAuth1: 'La dirección de correo electrónico ya está siendo usada por otra cuenta, por favor use otra dirección de correo electrónico.',
  messageAuth2: 'La dirección de correo electrónico tiene un formato incorrecto, por favor de verificar si sigue con el siguiente formato: xxxxxx@xxx.xx',
  messageAuth3: 'La contraseña debe almenos tener 6 caracteres.',
  messageAuth4: 'No hay registro de este usuario, porfavor de volver a registrase.',
  messageAuth5: 'La contraseña No es valida, por favor de volver a intentarlo.'
};

export const messageConfirm = {
  editPost: 'Deseas realmente actualizar tus cambios?',
  deletePost: 'Deseas realmente eliminar el Post?',
  deleteUser: 'Seguro que deseas realmente Eliminar tu cuenta?'
};

export const rgbWithLike = 'rgb(0,154,255,0.5)';
export const rgbWithoutLike = 'rgb(255,255,255,0.0)';