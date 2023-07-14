const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");
const { autoUpdater } = require('electron-updater')
const log = require('electron-log');
// log.transports.file.resolvePath = () => path.join('I:/Angular/finalgrocery/logs', 'logs/main.log');
log.log("Applicatoin version" + app.getVersion())
log.info("hello ,Log");
log.warn("some problem appears");
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })
  app.on('ready', () => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
  })

  autoUpdater.on("checking-for-update", () => {
    log.info("checking for update ...");
  })
  autoUpdater.on("update-available", (info) => {
    log.info("update-avaliable");
  })
  autoUpdater.on("update-not-available", (info) => {
    log.info("update-not-available");
  })
  autoUpdater.on('error', (err) => {
    log.info("error in auto updater", + err);
  })

  autoUpdater.on("download-progress", (progressTrack) => {
    log.info("download-progress")
    log.info(progressTrack)
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
