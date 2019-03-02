const { app, BrowserWindow } = require('electron');
const { format } = require('url');
const path = require('path');
const MenuBuilder = require('./utils/menu');
let w;

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    require('electron-debug')();
}

const createWindow = () => {
    const defaultWindowOptions = {
        show: false,
        width: 800,
        height: 600,
    };

    const startUrl = format({
        pathname: path.join(__dirname, './assets/html/index.html'),
        protocol: 'file',
        slashes: true
    });

    w = new BrowserWindow(defaultWindowOptions);
    w.loadURL(startUrl);

    w.webContents.on('did-finish-load', () => {
        if (!w) {
            throw new Error('"mainWindow" is not defined');
        } else {
            w.show();
            w.focus();
        }
    });

    w.on('closed', () => {
        w = null;
    });

    // Menu build
    MenuBuilder(w);
    // new AppUpdater();
}

app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (w === null) {
        createWindow()
    }
})


app.on('ready', createWindow);



// import { autoUpdater } from 'electron-updater';
// import log from 'electron-log';
// export default class AppUpdater {
//     constructor() {
//         log.transports.file.level = 'info';
//         autoUpdater.logger = log;
//         autoUpdater.checkForUpdatesAndNotify();
//     }
// }