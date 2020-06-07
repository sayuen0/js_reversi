//ゲーム状態の初期化
let board;
main()
/**
 * ゲームの初期状態を作成する
 * 空のボードをレンダリングする
 */

function main() {
  const root = document.getElementById("root");
  board = new Board(root, new GameStatus());
  const alertRoot = document.getElementById("alert");
  const hintBalloon = new HintBalloon();
}
