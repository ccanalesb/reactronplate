const electron = require('electron')
const { ipcMain } = require('electron');
const fs = require("fs");

const Store = require('electron-store');
const store = new Store();

store.set('sample_students', [
    {
        grade: "5to",
        students : [
            {number : 1, name : "Pedro", status: "on"},
            {number : 2, name : "Pablo", status: "off"},
            {number : 3, name : "Marco", status: "on"},
        ]
    }
]);

store.set('student_selected',[])


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

var io = null;
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
var grade_name = ""
app.on('ready', ()=>{
    createWindow()
    console.log("hola")

    ipcMain.on('show_dialog', (event, props) => {
      console.log(event)
      showDialog(props.greeting);

      // sending a message back is a little different
      mainWindow.webContents.send('sendRendererMessage', { result: true });
    });    
    ipcMain.on('send_grade', (event, props) => {
      grade_name = props.grade_name
      console.log(grade_name)
    });  
    ipcMain.on('quiz_started', (event,props) => {
      io.sockets.emit('quiz_started',{})
      console.log("Empezar quiz")
    });
    ipcMain.on('teacher',(event,props)=>{
      if(io == null){
        var server = require('http').createServer();
        io = require('socket.io')(server);    
        io.listen(8081);

        io.on('connection', function(socket){
            console.log('a user connected');
            socket.on('send_ans', function (data) {
              let students = store.get('student_selected')
              let index = students.map((st)=>st.student.number).indexOf(data.student.number)
              if(index>=0){
                console.log("está")
                students[index] = data;
              }else{
                console.log("no está")
              }
              store.set('student_selected', students);
              
            });
            socket.on('student_snap', function (data) {
              let students = store.get('student_selected')
              let index = students.map((st)=>st.student.number).indexOf(data.student.number)
              if(index>=0){
                console.log("ya está")
                socket.emit('already_saved', {})
              }else{
                students.push(data);
                store.set('student_selected',students)
                mainWindow.webContents.send('send_active_students', { students });
                socket.emit('snap_saved', {})
              }              

            });
            socket.on('student_update', function (data) {
              console.log(data)
              let students = store.get('student_selected')
              let index = students.map((st)=>st.student.number).indexOf(data.student.number)
              if(index>=0){
                students[index] = data;
                mainWindow.webContents.send('send_active_students', { students });
              }else{
                students.push(data);
                store.set('student_selected',students)
                mainWindow.webContents.send('send_active_students', { students });

              }              

            });
            socket.on('student', function (data) {
              console.log("Recibiendo datos del estudiante")
              if(grade_name != ""){
              bd = store.get('sample_students')
                for (var i = 0; i < bd.length; i++) {
                    grade = bd[i]
                    if(grade["grade"]==grade_name){
                      students = grade["students"]
                      for (let item of students) {
                        if(item.number==data.student_id){
                          socket.emit('check_student', { student : item})
                        }                  
                      }                    
                    }
                }
              }
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
