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
    this.app.browserWindow.isVisible().then(function(visible) {
      assert(visible, true);
    });
  });

  it("Check if window is minimized", function() {
    utils.minimizeTest(this.app.browserWindow);
    assert(this.app.browserWindow.isMinimized(), true);
  });
  
  it("Check if window is maximized", function() {
    utils.maximizeTest(this.app.browserWindow);
    assert(this.app.browserWindow.isMaximized(), true);
  });
});
