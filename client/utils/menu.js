const { app, Menu, shell } = require('electron');

module.exports = mainWindow => {
    if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
        setupDevelopmentEnvironment(mainWindow);
    }

    const template =
        process.platform === 'darwin'
            ? buildDarwinTemplate(mainWindow)
            : buildDefaultTemplate(mainWindow);

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
}


const setupDevelopmentEnvironment = mainWindow => {
    mainWindow.openDevTools();
    mainWindow.webContents.on('context-menu', (e, props) => {
        const { x, y } = props;

        Menu.buildFromTemplate([
            {
                label: 'Inspect element',
                click: () => {
                    mainWindow.inspectElement(x, y);
                }
            }
        ]).popup(mainWindow);
    });
};

const buildDarwinTemplate = mainWindow => {
    const subMenuAbout = {
        label: '멘토잉과제봇',
        submenu: [
            {
                label: '과제봇 정보',
                selector: 'orderFrontStandardAboutPanel:'
            },
            { type: 'separator' },
            {
                label: '과제봇 숨기기',
                accelerator: 'Command+H',
                selector: 'hide:'
            },
            {
                label: '다른 앱 숨기기',
                accelerator: 'Command+Shift+H',
                selector: 'hideOtherApplications:'
            },
            { label: '모두 보여주기', selector: 'unhideAllApplications:' },
            { type: 'separator' },
            {
                label: '과제봇 종료',
                accelerator: 'Command+Q',
                click: () => {
                    app.quit();
                }
            }
        ]
    };
    const subMenuEdit = {
        label: '편집',
        submenu: [
            { label: '실행 취소', accelerator: 'Command+Z', selector: 'undo:' },
            { label: '실행 복귀', accelerator: 'Shift+Command+Z', selector: 'redo:' },
            { type: 'separator' },
            { label: '오려두기', accelerator: 'Command+X', selector: 'cut:' },
            { label: '복사하기', accelerator: 'Command+C', selector: 'copy:' },
            { label: '붙혀넣기', accelerator: 'Command+V', selector: 'paste:' },
            {
                label: '전체 선택하기',
                accelerator: 'Command+A',
                selector: 'selectAll:'
            }
        ]
    };
    const subMenuViewDev = {
        label: '도구',
        submenu: [
            {
                label: '리로드',
                accelerator: 'Command+R',
                click: () => {
                    mainWindow.webContents.reload();
                }
            },
            {
                label: '전체화면',
                accelerator: 'Ctrl+Command+F',
                click: () => {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            },
            {
                label: '개발자 도구',
                accelerator: 'Alt+Command+I',
                click: () => {
                    mainWindow.toggleDevTools();
                }
            }
        ]
    };
    const subMenuViewProd = {
        label: '도구',
        submenu: [
            {
                label: '전체화면',
                accelerator: 'Ctrl+Command+F',
                click: () => {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }
        ]
    };
    const subMenuWindow = {
        label: '창',
        submenu: [
            {
                label: '최소화',
                accelerator: 'Command+M',
                selector: 'performMiniaturize:'
            },
            { label: '창 닫기', accelerator: 'Command+W', selector: 'performClose:' },
            { type: 'separator' },
            { label: '모두 보여주기', selector: 'arrangeInFront:' }
        ]
    };
    const subMenuHelp = {
        label: '도움말',
        submenu: [
            {
                label: 'Electron',
                click() {
                    shell.openExternal('http://electron.atom.io');
                }
            },
            {
                label: '도움말',
                click() {
                    shell.openExternal(
                        'https://github.com/atom/electron/tree/master/docs#readme'
                    );
                }
            },
            {
                label: '개발 링크',
                click() {
                    shell.openExternal('https://github.com/atom/electron/issues');
                }
            }
        ]
    };

    const subMenuView =
        process.env.NODE_ENV === 'development' ? subMenuViewDev : subMenuViewProd;

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenuHelp];
}

const buildDefaultTemplate = mainWindow => {
    const templateDefault = [
        {
            label: '&File',
            submenu: [
                {
                    label: '&Open',
                    accelerator: 'Ctrl+O'
                },
                {
                    label: '&Close',
                    accelerator: 'Ctrl+W',
                    click: () => {
                        mainWindow.close();
                    }
                }
            ]
        },
        {
            label: '&View',
            submenu:
                process.env.NODE_ENV === 'development'
                    ? [
                        {
                            label: '&Reload',
                            accelerator: 'Ctrl+R',
                            click: () => {
                                mainWindow.webContents.reload();
                            }
                        },
                        {
                            label: 'Toggle &Full Screen',
                            accelerator: 'F11',
                            click: () => {
                                mainWindow.setFullScreen(
                                    !mainWindow.isFullScreen()
                                );
                            }
                        },
                        {
                            label: 'Toggle &Developer Tools',
                            accelerator: 'Alt+Ctrl+I',
                            click: () => {
                                mainWindow.toggleDevTools();
                            }
                        }
                    ]
                    : [
                        {
                            label: 'Toggle &Full Screen',
                            accelerator: 'F11',
                            click: () => {
                                mainWindow.setFullScreen(
                                    !mainWindow.isFullScreen()
                                );
                            }
                        }
                    ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Learn More',
                    click() {
                        shell.openExternal('http://electron.atom.io');
                    }
                },
                {
                    label: 'Documentation',
                    click() {
                        shell.openExternal(
                            'https://github.com/atom/electron/tree/master/docs#readme'
                        );
                    }
                },
                {
                    label: 'Community Discussions',
                    click() {
                        shell.openExternal('https://discuss.atom.io/c/electron');
                    }
                },
                {
                    label: 'Search Issues',
                    click() {
                        shell.openExternal('https://github.com/atom/electron/issues');
                    }
                }
            ]
        }
    ];

    return templateDefault;
}
