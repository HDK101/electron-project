const { Application } = require("spectron");
const assert = require("assert");
const electronPath = require("electron");
const path = require("path");
const utils = require("../modules/utils");

describe("Application launch", function() {
  beforeEach(function() {
    this.timeout(10000);
    this.app = new Application({
      path: electronPath,
      requireName: "electronRequire",
      args: [path.join(__dirname, "..")]
    });
    return this.app.start();
  });

  afterEach(function() {
    this.timeout(10000);
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it("Check if window is visible", function() {
    var isVisible;
    this.app.browserWindow.isVisible().then(function(visible) {
      isVisible = visible;
      console.log("window is visible? " + visible);
      return assert.equal(visible, true);
    });
  });

  it("Check if window is minimized", function() {
    utils.minimizeTest(this.app.browserWindow);
    this.app.browserWindow.isMinimized().then(function(minimized) {
      console.log("The window is minimized:" + minimized);
      return assert.equal(minimized, true);
    });
  });

  it("Check if window is maximized", function() {
    utils.maximizeTest(this.app.browserWindow);
    //this.app.browserWindow.maximize();

    /*Maximize*/
    this.app.browserWindow.isMaximized().then(function(maximized) {
      console.log("The window is maximized:" + maximized);
      return assert.equal(maximized, true);
    });
    
  });
});
