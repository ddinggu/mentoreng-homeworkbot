const electron = require('electron');
// Module to control application life and create native browser window.
const { app, BrowserWindow, Menu } = electron;
const path = require('path');
const url = require('url');
const buildMenu = require('./menu');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const startUrl = process.env.ELECTRON_START_URL
  || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

// Install Electron & React Devtools
const installDevTools = () => {
  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS
  } = require('electron-devtools-installer');

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log('Added Extension: ', name))
    .catch(err => console.log('An error occurred: ', err));
  require('devtron').install();
};

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 650 });

  // and load the index.html of the app.
  mainWindow.loadURL(startUrl);

  // Open the DevTools when development
  if (process.env.ELECTRON_START_URL) {
    installDevTools();
    mainWindow.webContents.openDevTools();
  }

  mainWindow.webContents.on('did-finish-load', () => {
    const template = buildMenu();
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

module.export = mainWindow;
