const data = require('./data');
const { ipcMain, app } = require('electron');

module.exports = {

    template: null,

    generateMenu(windowTemplate) {
        this.template = [
            { label: 'Cursos' },
            { type: 'separator' }
        ];

        let cursos = data.getCoursesNames();

        cursos.forEach((curso) => {
            let itemMenu = {
                label: curso,
                type: 'radio',
                click: () => {
                    windowTemplate.send('mudar-curso', curso);
                }
            }

            this.template.push(itemMenu);
        });

        return this.template;
    },

    addCourse(windowTemplate, course) {
        this.template.push({
            label: course,
            type: 'radio',
            checked: true,
            click: () => {
                windowTemplate.send('mudar-curso', course);
            }
        });

        return this.template;
    },

    generateMainMenu() {
          let templateMainMenu = [
            {
                label: 'View',
                submenu: [
                    {role: 'reload'},
                    {role: 'toggledevtools'}
                ]
            },
            {
                role: 'window',
                submenu: [
                    {role: 'minimize'},
                    {role: 'close'}
                ]
            },
            {
                label : 'Sobre',
                submenu: [
                    { 
                        label : 'Sobre' ,
                        click : () => {
                            ipcMain.emit('abrir-janela-sobre');
                        } 
                    }],
            }];

            if (process.platform === 'darwin') {
                templateMainMenu.shift({label : app.getName()});
            }
            return templateMainMenu;
    }
}