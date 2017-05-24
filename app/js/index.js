const {ipcRenderer} = require('electron');
const timer = require('./timer');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let time = document.querySelector('.tempo');

linkSobre.addEventListener('click', () => {
      ipcRenderer.send('abrir-janela-sobre');
});


let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', () => {
    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];

    if(play) {
      timer.parar();
    } else {
      timer.iniciar(time);
    }

    play = !play;
});
