const {ipcRenderer, shell} = require('electron');
const process = require('process');

let linkFecharJanelaSobre = document.querySelector('#fecharJanelaSobre');
let linkGitHub = document.querySelector('#linkGitHub');
let versaoElectron = document.querySelector('#versaoElectron');

linkFecharJanelaSobre.addEventListener('click', () => {
  ipcRenderer.send('fechar-janela-sobre');
});

linkGitHub.addEventListener('click', () => {
  shell.openExternal('https://www.github.com/cesar-donini');
});

window.onload = () => {
  versaoElectron.textContent = process.versions.electron;
};
