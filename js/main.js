//ゲーム状態の初期化

main()
/**
 * ゲームの初期状態を作成する
 * 空のボードをレンダリングする
 */
function main() {
  const root = document.getElementById("root");
  const board = new Board(root, new GameStatus());
  const alertRoot = document.getElementById("alert");
}
