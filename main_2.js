const {app, BrowserWindow } = require('electron')
// const express = require("./server")

function createWindow() {
    // express
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
        icon: __dirname + 'appearance/check.ico',
        show: false,
        width: 1000,  // 寬度
        height: 650, // 高度
        closable: true, // 可否點擊關閉按鈕
        // frame: false,          // 標題列不顯示
        // transparent: true,     // 背景透明
        autoHideMenuBar: true,  // 工具列不顯示
    });

    win.loadURL('http://localhost:8080/');
    win.once('ready-to-show', () => {
        win.show();
        loadingWindow.close();
    })
    win.on('closed', () => {
        win = null;
    })
    module.exports = win;
}

app.on('ready', createWindow);
app.on('activate', createWindow)
app.on('window-all-closed', () => app.quit())


