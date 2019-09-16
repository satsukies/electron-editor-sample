const { app, BrowserWindow } = require('electron')

// window変数はグローバル変数として保持しておく
// そうしないと、JSのガベージコレクションによって自動的に閉じられる可能性がある
let window

function createWindow() {
  // windowを作成
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // index.htmlを読み込む
  window.loadFile('index.html')

  // 必要なら、chroniumの開発者ツールを開くことができる
  // window.webContents.openDevTools()

  // windowが閉じられたときに{}内が実行される
  window.on('closed', () => {
    // nullを代入して参照を切る
    window = null
  })
}

// アプリケーションのライフサイクルがreadyになったら、createWindowを実行
app.on('ready', createWindow)

// 全てのwindowが閉じられたら、アプリを終了させる
app.on('window-all-closed', () => {
  // macOSでは、一般的に全てのwindowが閉じられてもアプリケーションは終了しない
  // CMD+Qを押下するか、メニューからアプリケーションを終了させるまでアクティブなまま
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOSでdockに表示されているアイコンを押下すると
  // windowが再生成され画面に表示される
  if(window === null) {
    createWindow()
  }
})