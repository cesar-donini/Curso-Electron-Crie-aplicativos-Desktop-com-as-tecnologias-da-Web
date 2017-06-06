const {ipcRenderer} = require('electron');
const timer = require('./timer');
const data = require('../../data');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let time = document.querySelector('.tempo');
let curso = document.querySelector('.curso');
let botaoAdicionar = document.querySelector('.botao-adicionar');
let nomeNovoCurso = document.querySelector('.campo-adicionar');

window.onload = () => {
    data.findByCourseName(curso.textContent)
      .then((dados) => {
          time.textContent = dados.studyTime;
      });
};

linkSobre.addEventListener('click', () => {
      ipcRenderer.send('abrir-janela-sobre');
});


let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', () => {
    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];

    if(play) {
      timer.parar(curso.textContent);
    } else {
      timer.iniciar(time);
    }

    play = !play;
});

ipcRenderer.on('mudar-curso', (event, nomeCurso) => {
    curso.textContent = nomeCurso;
  
    data.findByCourseName(curso.textContent)
      .then((dados) => {
          time.textContent = dados.studyTime;
      });    
});

botaoAdicionar.addEventListener('click', () => {
    curso.textContent = nomeNovoCurso.value;
    time.textContent = '00:00:00';
    ipcRenderer.send('curso-adicionado', nomeNovoCurso.value);
    nomeNovoCurso.value = '';
});