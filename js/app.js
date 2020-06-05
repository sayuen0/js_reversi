main()

/**
 * ゲームの初期状態を作成する
 * 空のボードをレンダリングする
 */
function main() {
  const root = document.getElementById("root");
  const board = new Board("div", "board");
  console.log(board);
  board.appendTo(root);
}
