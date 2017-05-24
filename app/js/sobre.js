const {ipcRenderer, shell} = require('electron');
const process = require('process');

let linkFecharJanelaSobre = document.querySelector('#link-fechar');
let linkGitHub = document.querySelector('#link-github');
let versaoElectron = document.querySelector('#versao-electron');

linkFecharJanelaSobre.addEventListener('click', () => {
  ipcRenderer.send('fechar-janela-sobre');
});

linkGitHub.addEventListener('click', () => {
  shell.openExternal('https://www.github.com/cesar-donini');
});

window.onload = () => {
  versaoElectron.textContent = process.versions.electron;
};
