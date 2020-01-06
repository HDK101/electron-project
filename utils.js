const { remote } = require("electron");

closeWindow = () => {
  let window = remote.getCurrentWindow();
  window.close();
};

maximizeWindow = () => {
  let window = remote.getCurrentWindow();
  window.isMaximized() ? window.unmaximize() : window.maximize();
};

minimizeWindow = () => {
  let window = remote.getCurrentWindow();
  window.minimize();
};
