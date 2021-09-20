const electron = require('electron')
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;
let mainWindow;
process.env.NODE_ENV = 'production';
// Specify flash path, supposing it is placed in the same directory with main.js.
let pluginName
switch (process.platform) {
  case 'win32':
    pluginName = 'pepflashplayer.dll'
    break
  case 'darwin':
    pluginName = 'PepperFlashPlayer.plugin'
    break
  case 'linux':
    pluginName = 'libpepflashplayer.so'
    break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName))

// Optional: Specify flash version, for example, v17.0.0.169
app.commandLine.appendSwitch('ppapi-flash-version')
//let contents = mainWindow.webContents
//listen for app to be ready
app.on('ready', function(){
// creat new window
  mainWindow = new BrowserWindow({
    width: 950,
    height: 600,
    title: 'A2', 
    icon: path.join(__dirname, 'assets/icons/png/icon1.png'), 
    webPreferences:{
    plugins: true,

}


  });
//load html window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol:'file:',
    slashes: true
  }));
  //Build menu from tamplate
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
//insert menu
Menu.setApplicationMenu(mainMenu);
//quit app completlly
//mainWindow.on('closed', function(){app.quit();});

});

const mainMenuTemplate =[{label:'About', submenu:[{
label:'Quit',
accelerator: process.platform=='darwin'? 'command+Q' :
'Ctrl+Q',
click(){app.quit();},


},{role:'reload'}]}];
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        role: 'reload'
      },
      {
        label: 'Toggle DevTools',
        accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}
// Module to control application life. (this variable should already exist)
if (handleSquirrelEvent(app)) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}
function handleSquirrelEvent(application) {
  if (process.argv.length === 1) {
      return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
      let spawnedProcess, error;

      try {
          spawnedProcess = ChildProcess.spawn(command, args, {
              detached: true
          });
      } catch (error) {}

      return spawnedProcess;
  };

  const spawnUpdate = function(args) {
      return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
      case '--squirrel-install':
      case '--squirrel-updated':
          // Optionally do things such as:
          // - Add your .exe to the PATH
          // - Write to the registry for things like file associations and
          //   explorer context menus

          // Install desktop and start menu shortcuts
          spawnUpdate(['--createShortcut', exeName]);

          setTimeout(application.quit, 1000);
          return true;

      case '--squirrel-uninstall':
          // Undo anything you did in the --squirrel-install and
          // --squirrel-updated handlers

          // Remove desktop and start menu shortcuts
          spawnUpdate(['--removeShortcut', exeName]);

          setTimeout(application.quit, 1000);
          return true;

      case '--squirrel-obsolete':
          // This is called on the outgoing version of your app before
          // we update to the new version - it's the opposite of
          // --squirrel-updated

          application.quit();
          return true;
  }
};

