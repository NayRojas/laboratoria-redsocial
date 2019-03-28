import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Post: {
      __doc__: {
        nº1: {
          nombreUsuario: 'pepita1',
          correoUsuario: 'pepita1@gmail.com',
          fotoUsuario: 'fotoPepita1.jpg',
          categoria: 'Curiosidades',
          privacidad: 'publico',
          titulo: 'MAX SCHOOL',
          contenido: {
            descripcion: 'Bebe Hermoso',
            multimedia: 'img1.jpg'
          },
          comentarios: [{
            contenido: 'chiquin',
            propietario: {
              foto: 'fotoPepita2.jpg',
              nombre: 'pepita2',
            }
          }],
          likes: ['pepita1@gmail.com', 'pepita2@gmail.com', 'pepita3@gmail.com'],
        },
      }
    }
  }
};

const createPost = {
  nombreUsuario: 'pepita5',
  correoUsuario: 'pepita5@gmail.com',
  fotoUsuario: 'fotoPepita5.jpg',
  categoria: 'Curiosidades',
  privacidad: 'publico',
  titulo: 'Naturaleza',
  contenido: {
    descripcion: 'tigre',
    multimedia: 'tigre.jpg'
  },
  comentarios: [{
    contenido: 'grrr',
    propietario: {
      foto: 'fotoPepita7.jpg',
      nombre: 'pepita7',
    }
  }],
  likes: ['pepita1@gmail.com', 'pepita3@gmail.com', 'pepita7@gmail.com'],
};

const createPostID = {
  nombreUsuario: 'pepita6',
  correoUsuario: 'pepita6@gmail.com',
  fotoUsuario: 'fotoPepita6.jpg',
  categoria: 'Curiosidades',
  privacidad: 'publico',
  titulo: 'Naturaleza',
  contenido: {
    descripcion: 'tigre',
    multimedia: 'tigre.jpg'
  },
  comentarios: [{
    contenido: 'grrr',
    propietario: {
      foto: 'fotoPepita8.jpg',
      nombre: 'pepita7',
    }
  }],
  likes: ['pepita1@gmail.com', 'pepita3@gmail.com', 'pepita7@gmail.com'],
};

const updatePost = {
  privacidad: 'privado',
  titulo: 'Naturaleza',
  contenido: {
    descripcion: 'gatito',
    multimedia: 'tigre.jpg'
  },
};

global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true});

import { createPostBDFireStore, createIdDocBDFireStore,
  readDocBDFireStore, readCollectionBDFireStore, filterCollectionBy, updateDocBDFireStore,
  deleteDocFireStore } from '../src/lib/crudBD/crudUser/crudUser.js';

describe('createPostBDFireStore', () => {
  it('createPostBDFireStore:  deberia ser una funcion', () => {
    expect(typeof (createPostBDFireStore)).toBe('function');
  });
  it('Deberia agregar un post con ID aleatorio', () => {
    return createPostBDFireStore('Post', createPost)
      .then((result) => {
        readDocBDFireStore('Post', result.id)
          .then((data) => {
            expect(data._data.nombreUsuario).toBe('pepita5');
          });
      });
  });
});

describe('createIdDocBDFireStore', () => {
  it('createIdDocBDFireStore: Deberia ser una funcion', () => {
    expect(typeof(createIdDocBDFireStore)).toBe('function');
  });
  it('Deberia poder crear un post con ID ingresado', () => {
    return createIdDocBDFireStore('Post', 'pepita6@gmail.com', createPostID)
      .then((result) => {
        readDocBDFireStore('Post', 'pepita6@gmail.com')
          .then((data) => {
            expect(data._data.nombreUsuario).toBe('pepita6');
          });
      });
  });
});

describe('filterCollectionBy', () => {
  it('filterCollectionBy: Deberia ser una funcion', () => {
    expect(typeof(filterCollectionBy)).toBe('function');
  });
  it('Deberia poder obtener un arreglo de todos los post de  pepita6@gmail.com', () => {
    return filterCollectionBy('Post', 'correoUsuario', 'pepita6')
      .then((result) => {
        expect(typeof(result)).toBe('object');
      });
  });
});

describe('updateDocBDFireStore', () => {
  it('updateDocBDFireStore: Deberia ser una funcion', () => {
    expect(typeof(updateDocBDFireStore)).toBe('function');
  });
  it('Deberia poder actualizar los datos del post', () => {
    return updateDocBDFireStore('Post', 'pepita6@gmail.com', updatePost)
      .then(() => {
        readDocBDFireStore('Post', 'pepita6@gmail.com')
          .then((data) => {
            expect(data._data.privacidad).toBe('privado');
          });
      });
  });
});

describe('readCollectionBDFireStore', () => {
  it('readCollectionBDFireStore: Deberia ser una funcion', () => {
    expect(typeof (readCollectionBDFireStore)).toBe('function');
  });
  it('Deberia obtener un arreglo de Posts', (done) => {
    const callbackPost = (dataCollection) => {
      expect(typeof(dataCollection._data)).toBe('object');
      done();
    };
    return readCollectionBDFireStore('Post', callbackPost);
  });
  it('Deberia encontrar el post con id= nº1', (done) => {
    const callbackPost = (dataCollection) => {
      expect(dataCollection._data[0]._id).toBe('nº1');
      done();
    };
    return readCollectionBDFireStore('Post', callbackPost);
  });  
});

describe('deleteDocFireStore', () => {
  it('deleteDocFireStore: Deberia ser una funcion', () => {
    expect(typeof(deleteDocFireStore)).toBe('function');
  });
  it('Deberia poder eliminar el post de la bd', (done) => {
    return deleteDocFireStore('Post', 'pepita6@gmail.com')
      .then(() => {
        const callbackPost = (dataCollection) => {
          const result = dataCollection._data.find((note) => note.id === 'pepita6@gmail.com');
          expect(result).toBe(undefined);
          done();
        };
        return readCollectionBDFireStore('Post', callbackPost);
      });
  });
});
