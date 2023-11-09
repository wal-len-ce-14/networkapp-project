const { app, BrowserWindow } = require('electron');
const express = require('express');
const path = require('path');
const homepage = require('./router/homepage');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load your Express app
  const expressApp = express();
  expressApp.set('views', path.join(__dirname, 'webpage'));
  expressApp.set('view engine', 'jade');
  expressApp.use(express.static(path.join(__dirname, 'public')));
  expressApp.use(express.urlencoded({ extended: false }));
  expressApp.use(express.json());
  expressApp.use('/', homepage);

  mainWindow.loadURL('http://localhost:8080');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // Start Express server
  const server = expressApp.listen(8080, () => {
    console.log('Express app is listening on port 8080...');
  });

  // Quit the app when the main window is closed
  mainWindow.on('closed', () => {
    server.close(); // Close the Express server
    app.quit(); // Quit the Electron app
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
