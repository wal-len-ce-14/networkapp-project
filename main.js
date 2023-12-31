const {app, BrowserWindow } = require('electron') 
const path = require('path')
const Tray = require('electron').Tray; // 系統通知區
const Menu = require('electron').Menu; // 應用程式選單
function createWindow() { 
    // Create the browser window.
    var loadingWindow = new BrowserWindow({
        width:          200,
        height:         200,
        transparent:    (process.platform != 'linux'), // Transparency doesn't work on Linux.
        resizable:      false,
        frame:          false,
        alwaysOnTop:    true,
        hasShadow:      false,
        title:          "Loading..."
    });
    loadingWindow.loadURL('file://' + __dirname + '/appearance/loadingAnimation.gif');

    var win = new BrowserWindow({
        title: "ToDo",
        icon: __dirname + '/appearance/check.ico',
        show: false,
        width: 1080,  // 寬度
        height: 720, // 高度
    });

    win.loadURL('http://localhost:8080/');
    win.once('ready-to-show', () => {
        win.show();
        loadingWindow.close();
    })
    win.on('closed', () => {
        win = null;
    })
    return win;
}

function createTray(win){
    const iconPath = path.join(__dirname, '/appearance/check.ico');
    const tray = new Tray(iconPath)
    const contextMenu = Menu.buildFromTemplate([
        {
            label: '    show', click: () => {
                win.show();
            }
        },
        {
            label: '    hide', click: () => {
                win.hide();
            }
        },
        {
            label: '    close', click: () => {
                win.close();
            }
        },
        {
            label: '    quit', click: () => {
                app.quit();
            }
        }
    ])
    tray.setToolTip('ToDo List')
    tray.setContextMenu(contextMenu);
    return tray;
}

app.once('ready', () =>{
    const win = createWindow();
    createTray(win)
});
app.on('activate', createWindow)
app.on('window-all-closed', () => app.quit())
