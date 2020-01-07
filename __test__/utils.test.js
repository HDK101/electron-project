const utils = require("../utils");

const { app, BrowserWindow, remote } = require("electron");

let win;

beforeAll(() => {
  return createWindowTest();
});

function createWindowTest() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  console.log("Window created!");
}

describe("Minimize function", () => {
  utils.minimizeTest();
  test("window should be minimized", () => {
    expect(win.isMinimized()).toBe(true);
  });
});
