// htmlの読み込み完了イベントが発生したら、{}内を実行する
window.addEventListener('DOMContentLoaded', () => {
  var editor = CodeMirror.fromTextArea(
    document.getElementById('textarea'),
    {
      // kotlinモードになるように指定
      mode: "text/x-kotlin",
      // 行頭に行番号を表示
      lineNumbers: true,
      // インデントを2文字に設定
      indentUnit: 2
    }
  )
});