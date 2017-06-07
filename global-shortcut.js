const { globalShortcut } = require('electron');


module.exports = {
    registerGlobalsShortcuts(mainWindow) {
        globalShortcut.unregisterAll();
        globalShortcut.register('CommandOrControl+P', () => {
            mainWindow.send('play-stop');
        });
    }
}