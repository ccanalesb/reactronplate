const electron = require('electron')
const { ipcMain } = require('electron');
// Module to control application life.
const app = electron.app

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  // mainWindow = new BrowserWindow({width: 800, height: 480})
  mainWindow = new BrowserWindow({show: false})
  mainWindow.maximize()
  mainWindow.show()

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}



const dialog = require('electron').dialog || require('electron').remote.dialog;

function showDialog(greeting) {
  dialog.showMessageBox({
    type: 'info',
    title: 'Greetings',
    message: `${greeting}!`,
    buttons: []
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

const io = null;

app.on('ready', ()=>{
    createWindow()
    console.log("hola")

    ipcMain.on('show_dialog', (event, props) => {
      console.log(event)
      showDialog(props.greeting);

      // sending a message back is a little different
      mainWindow.webContents.send('sendRendererMessage', { result: true });
    });    
    ipcMain.on('teacher',(event,props)=>{
      if(io != null){

        var server = require('http').createServer();
        var io = require('socket.io')(server);    
        io.listen(8081);
      
        io.on('connection', function(socket){
          console.log('a user connected');
            socket.on("student", () => {
                console.log("received test"); // not displayed
                // io.emit("ok");
            })
            socket.on('send_ans', function (data) {
              console.log(data);
            });
            socket.on('student', function (data) {
              console.log("Recibiendo datos del estudiante")
              console.log(data);
            });
        });    
      }
    })    
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform !== 'darwin') {
  //   app.quit()
  // }
  app.quit()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
