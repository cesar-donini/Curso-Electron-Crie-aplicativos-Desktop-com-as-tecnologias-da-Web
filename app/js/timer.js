const moment = require('moment');

let seconds;
let timer;
module.exports = {

    iniciar(element) {
        let time = moment.duration(element.textContent);
        seconds = time.asSeconds();
        clearInterval(timer);
        timer = setInterval(() => {
            seconds++;
            element.textContent = this.parseSecondsForTimer(seconds);
        }, 1000);
    },

    parar() {
       clearInterval(timer);
    },

    parseSecondsForTimer(seconds) {
        return moment().startOf('day').seconds(seconds).format('HH:mm:ss');
    }

};
