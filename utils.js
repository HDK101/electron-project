const { remote } = require("electron");

closeWindow = () => {
  let window = remote.getCurrentWindow();
  window.close();
};

maximizeWindow = () => {
  let window = remote.getCurrentWindow();
  window.isMaximized ? window.maximize() : window.minimize();
};

minimizeWindow = () => {
  let window = remote.getCurrentWindow();
  window.minimize();
};
