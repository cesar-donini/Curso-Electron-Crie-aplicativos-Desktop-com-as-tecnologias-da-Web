const data = require('./data');

module.exports = {

    generateMenu(windowTemplate) {
        let template = [
                { label : 'Cursos' },
                { type : 'separator' }
            ];
        
        let cursos = data.getCoursesNames();

        cursos.forEach((curso) => {
            let itemMenu = {
                label : curso,
                type : 'radio',
                click : () => {
                    windowTemplate.send('mudar-curso', curso);
                }
            }

            template.push(itemMenu);
        });

        console.log(template);

        return template;
    }

}