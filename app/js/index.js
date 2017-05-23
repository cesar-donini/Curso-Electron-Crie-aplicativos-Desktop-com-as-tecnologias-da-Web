const {ipcRenderer} = require('electron');

let linkSobre = document.querySelector('#sobre');

linkSobre.addEventListener('click', () => {
      ipcRenderer.send('abrir-janela-sobre');
});
