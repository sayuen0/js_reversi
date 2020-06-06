/**
 * ゲームの状態管理
 */
class GameStatus {
  /**
   * コンストラクタ
   * 石を入れるマスの二次元配列を初期化する
   */
  constructor() {
    const cellCount = 8;
    const cells = new Array(cellCount);
    for (let y = 0; y < cellCount; y++) {
      cells[y] = new Array(cellCount);
    }
    this._cellList = cells;
  }

  /**
     * 
     * @param {int} x 横インデックス
     * @param {int} y 縦インデックス
     * @param {Cell} cell マス
   */
  setCell(x, y, cell) {
    this._cellList[x][y] = cell;
  }
  /**
   * 
   * @param {int} x 横インデックス
   * @param {int} y 縦インデックス
   * @param {Stone} stone 石
   */
  setStone(x, y, stone) {
    stone.appendTo(this._cellList[x][y]);
  }
}
