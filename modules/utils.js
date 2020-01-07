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

minimizeWindow = win => {
  win != null ? currentWindow.minimize() : win.minimize();
};

module.exports.minimizeTest = winTest => {
  return minimizeWindow(winTest);
};

module.exports.getCurrentWindowForTest = () => {
  return getCurrentWindow();
};
