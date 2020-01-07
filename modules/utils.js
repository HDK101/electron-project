const { remote } = require("electron");

let currentWindow;

getCurrentWindow = () => {
  currentWindow = remote.getCurrentWindow();
};

closeWindow = win => {
  win == null ? currentWindow.close() : win.close();
};

maximizeWindow = win => {
  if (!win) {
    currentWindow.isMaximized()
      ? currentWindow.unmaximize()
      : currentWindow.maximize();
  }
  else {
    win.maximize();
  }
};

minimizeWindow = win => {
  win == null ? currentWindow.minimize() : win.minimize();
};

module.exports.minimizeTest = function(winTest) {
  return minimizeWindow(winTest);
};
module.exports.maximizeTest = function(winTest) {
  return maximizeWindow(winTest);
};
module.exports.closeTest = function(winTest) {
  return closeWindow(winTest);
};
