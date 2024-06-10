const { app, BrowserWindow } = require("electron");

const path = require("path");

require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

function criarJanela() {
  const janela = new BrowserWindow({
    width: 800,
    height: 600,
    icon: `${__dirname}/assets/icon.png`,
  });

  janela.loadFile("./src/index.html");
}

app.whenReady().then(() => {
  criarJanela();
});
