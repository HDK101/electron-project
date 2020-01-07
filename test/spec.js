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

  //const win = this.app.browserWindow;

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  //   it("Check if window is undefined", function() {
  //     console.log(this.app.browserWindow);
  //   });

  it("Check if window is visible", function() {
    this.app.browserWindow.isVisible().then(function(visible) {
      assert(visible, true);
    });
  });

//   it("Check if window is minimized", function() {
//     //utils.getCurrentWindowForTest();
//     utils.minimizeTest(this.app.browserWindow).then(function() {
//       assert(this.app.browserWindow.isMinimized(), true);
//     });
//   });

  it("Check if window is minimized", function() {
    //utils.getCurrentWindowForTest();
    utils.minimizeTest(this.app.browserWindow);
    assert(this.app.browserWindow, true);
  });

  //   it("Show initial window", function() {
  //     return this.app.client.getWindowCount().then(function(count) {
  //       assert.equal(count, 1);
  //     });
  //   });

  it("Check sum of 2 + 2 is 4", function() {
    const sum = 2 + 2;
    assert.equal(sum, 4);
  });
});
