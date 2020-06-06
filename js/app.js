//ゲーム状態の初期化
main()
const gameStatus = new GameStatus();
/**
 * ゲームの初期状態を作成する
 * 空のボードをレンダリングする
 */
function main() {
  const root = document.getElementById("root");
  const board = new Board();
  console.log(board);
  board.appendTo(root);
  const cellCount = 8;
  const gameStatus = new GameStatus();
  for (let x = 0; x < cellCount; x++) {
    for (let y = 0; y < cellCount; y++) {
      const cell = new Cell();
      cell.appendTo(board);
    }
  }
  setReady();
}

/**
 * 中央4マスに最初のコマをセットする
 */
function setReady() {
  const stone1 = new Stone("black");
  const stone2 = new Stone("black");
  const stone3 = new Stone("black");
  const stone4 = new Stone("black");
  const stones = [stone1, stone2, stone3, stone4];
  
  console.log(stone);
}


//TODO: マスがクリックされたらそこに石を置く
