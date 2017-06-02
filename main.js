const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const data = require('./data');
const templateGenerate = require('./template-generate');

let tray;

app.on('ready', () => {

    let mainWindow = new BrowserWindow({
      width: 600,
      height: 400
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    tray = new Tray(`${__dirname}/app/img/icon-tray.png`);
    
    let trayMenu = Menu.buildFromTemplate(templateGenerate.generateMenu(mainWindow));
    tray.setContextMenu(trayMenu);

});


app.on('window-all-closed', () => {
    app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (!sobreWindow) {
    sobreWindow = new BrowserWindow({
      width: 300,
      height: 220,
      alwaysOnTop: true,
      frame: false
    });

    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
  }

  sobreWindow.loadURL(`file://${__dirname}/app/pages/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
  sobreWindow.close();
});


ipcMain.on('parar-tempo-curso', (event, curso, tempo) => {
  console.log(`O curso ${curso} foi parado em ${tempo}.`);

  data.saveInDataBase(curso, tempo);

});
