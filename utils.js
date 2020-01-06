const { remote } = require("electron");

closeWindow = () => {
  let window = remote.getCurrentWindow();
  window.close();
  console.log("Should be working!");
};
