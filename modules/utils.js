const { remote } = require("electron");

let currentWindow;

getCurrentWindow = () => {
  currentWindow = remote.getCurrentWindow();
};

closeWindow = () => {
  currentWindow.close();
};

maximizeWindow = () => {
  currentWindow.isMaximized()
    ? currentWindow.unmaximize()
    : currentWindow.maximize();
};

function minimizeWindow (win) {
  win == null ? currentWindow.minimize() : win.minimize();
};

module.exports.minimizeTest = function(winTest) {
  return minimizeWindow(winTest);
};
