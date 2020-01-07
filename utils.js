const { remote } = require("electron");

let currentWindow = remote.getCurrentWindow();

closeWindow = () => {
  currentWindow.close();
};

maximizeWindow = () => {
  currentWindow.isMaximized() ? currentWindow.unmaximize() : currentWindow.maximize();
};

minimizeWindow = () => {
  currentWindow.minimize();
};

module.exports.minimizeTest = () => {
  return minimizeWindow();
};
