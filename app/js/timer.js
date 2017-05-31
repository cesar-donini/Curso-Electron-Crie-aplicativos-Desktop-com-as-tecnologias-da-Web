const moment = require('moment');
const {ipcRenderer} = require('electron');

let seconds;
let timer;
let time;

module.exports = {

    iniciar(element) {
        time = moment.duration(element.textContent);
        seconds = time.asSeconds();
        clearInterval(timer);
        timer = setInterval(() => {
            seconds++;
            element.textContent = this.parseSecondsForTimer(seconds);
        }, 1000);
    },

    parar(curso) {
       clearInterval(timer);
       ipcRenderer.send('parar-tempo-curso', curso, this.parseSecondsForTimer(seconds));
    },

    parseSecondsForTimer(seconds) {
        return moment().startOf('day').seconds(seconds).format('HH:mm:ss');
    }

};
