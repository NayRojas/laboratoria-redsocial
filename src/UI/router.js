import Inite from './templates/pagInite.js';
import Login from './templates/pagLogin.js';
import Register from './templates/pagRegister.js';
import Home from './templates/home.js';
import Post from './templates/post.js';
import CommentPost from './templates/commentPost.js';

import {editCreatePost, idPostCommentGlobal} from './view-controller.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/inite');
  } else if (hash === '#/pagIniteSesion' || hash === '#/pagRegister'|| 
  hash === '#/home' || hash === '#/createPost' || hash === '#/updatePost' || hash === '#/createPostComment') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/inite');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
  case 'inite':
    Inite(); break;
  case 'pagIniteSesion':
    Login(); break;
  case 'pagRegister':
    Register(); break;
  case 'home':
    Home(); break;
  case 'createPost':
    Post(editCreatePost); break;
  case 'createPostComment':
    CommentPost(idPostCommentGlobal); break;
  default:
    Inite(); break;
  }
};

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};