// @flow
const { app, Menu } = require("electron");

function buildMenu() {
  //   if (process.env.ELECTRON_START_URL) {
  //     setupDevelopmentEnvironment();
  //   }

  const template =
    process.platform === "darwin"
      ? buildDarwinTemplate()
      : buildDefaultTemplate();

  // const menu = Menu.buildFromTemplate(template);

  return template;
}

// function setupDevelopmentEnvironment() {
//   this.mainWindow.webContents.on("context-menu", (e, props) => {
//     const { x, y } = props;

//     Menu.buildFromTemplate([
//       {
//         label: "Inspect element",
//         click: function() {
//           this.mainWindow.inspectElement(x, y);
//         }
//       }
//     ]).popup(this.mainWindow);
//   });
// }

function buildDarwinTemplate() {
  const subMenuAbout = {
    label: "System",
    submenu: [
      {
        label: "About ElectronReact",
        selector: "orderFrontStandardAboutPanel:"
      },
      { type: "separator" },
      { label: "Services", submenu: [] },
      { type: "separator" },
      {
        label: "Hide ElectronReact",
        accelerator: "Command+H",
        selector: "hide:"
      },
      {
        label: "Hide Others",
        accelerator: "Command+Shift+H",
        selector: "hideOtherApplications:"
      },
      { label: "Show All", selector: "unhideAllApplications:" },
      { type: "separator" },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click: function() {
          app.quit();
        }
      }
    ]
  };
  const subMenuEdit = {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "Command+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "Command+X", selector: "cut:" },
      { label: "Copy", accelerator: "Command+C", selector: "copy:" },
      { label: "Paste", accelerator: "Command+V", selector: "paste:" },
      {
        label: "Select All",
        accelerator: "Command+A",
        selector: "selectAll:"
      }
    ]
  };
  const subMenuViewDev = {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "Command+R",
        click: function() {
          this.mainWindow.webContents.reload();
        }
      },
      {
        label: "Toggle Full Screen",
        accelerator: "Ctrl+Command+F",
        click: function() {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        }
      },
      {
        label: "Toggle Developer Tools",
        accelerator: "Alt+Command+I",
        click: function() {
          this.mainWindow.toggleDevTools();
        }
      }
    ]
  };
  const subMenuViewProd = {
    label: "View",
    submenu: [
      {
        label: "Toggle Full Screen",
        accelerator: "Ctrl+Command+F",
        click: function() {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        }
      }
    ]
  };
  const subMenuWindow = {
    label: "Window",
    submenu: [
      {
        label: "Minimize",
        accelerator: "Command+M",
        selector: "performMiniaturize:"
      },
      { label: "Close", accelerator: "Command+W", selector: "performClose:" },
      { type: "separator" },
      { label: "Bring All to Front", selector: "arrangeInFront:" }
    ]
  };

  const subMenuView = process.env.ELECTRON_START_URL
    ? subMenuViewDev
    : subMenuViewProd;

  return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow];
}

function buildDefaultTemplate() {
  const templateDefault = [
    {
      label: "&File",
      submenu: [
        {
          label: "&Open",
          accelerator: "Ctrl+O"
        },
        {
          label: "&Close",
          accelerator: "Ctrl+W",
          click: function() {
            this.mainWindow.close();
          }
        }
      ]
    },
    {
      label: "&View",
      submenu: process.env.ELECTRON_START_URL
        ? [
            {
              label: "&Reload",
              accelerator: "Ctrl+R",
              click: function() {
                this.mainWindow.webContents.reload();
              }
            },
            {
              label: "Toggle &Full Screen",
              accelerator: "F11",
              click: function() {
                this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
              }
            },
            {
              label: "Toggle &Developer Tools",
              accelerator: "Alt+Ctrl+I",
              click: function() {
                this.mainWindow.toggleDevTools();
              }
            }
          ]
        : [
            {
              label: "Toggle &Full Screen",
              accelerator: "F11",
              click: function() {
                this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
              }
            }
          ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Learn More",
          click: function() {
            "http://electron.atom.io";
          }
        },
        {
          label: "Documentation",
          click: function() {
            "https://github.com/atom/electron/tree/master/docs#readme";
          }
        },
        {
          label: "Community Discussions",
          click: function() {
            "https://discuss.atom.io/c/electron";
          }
        },
        {
          label: "Search Issues",
          click: function() {
            "https://github.com/atom/electron/issues";
          }
        }
      ]
    }
  ];

  return templateDefault;
}

module.exports = buildMenu;
