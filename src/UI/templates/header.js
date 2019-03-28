const paintHeader = (hash) => {
  const header = document.createElement('header');
  const headerHTML = `
      <div class="header">
      <h1 class="logo">
        <span>
          <a href="#/inite">communitytech</a>
        </span>
      </h1>
        ${hash === 'inite' ? `
        <div class="btn-inite-space">
        <button class="btn-inite-sesion inite-text" id="buttonLogin">
          <span>
            <a href="#/pagIniteSesion">Iniciar Sesión</a>
          </span>
        </button>
      </div>` : null}
      ${hash === 'pagRegister' ? `
      <div class="btn-inite-space">
      <button class="btn-inite-sesion inite-text" id="buttonLogin">
        <span>
          <a href="#/pagIniteSesion">Iniciar Sesión</a>
        </span>
      </button>
    </div>` : null}
      ${hash === 'pagIniteSesion' ? `      
        <div class=" btn-register-in-inite">
          <button class="btn-register register-text" id="buttonRegister">
            <span>
              <a href="#/pagRegister">Registrar</a>
            </span>
          </button>
        </div> ` : null}
        ${hash === 'home' ? ` <div class="menu-in-inite">
        <nav class="menu-muro">
          <a href="#/misPosts">Mis Posts</a>
        </nav>
      </div>` : null}
   </div>
  `;
  header.innerHTML = headerHTML;
  return header;
};
  
const headerContainer = document.getElementById('header-container');
headerContainer.innerHTML = paintHeader();