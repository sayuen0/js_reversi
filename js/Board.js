/**
 * ゲーム盤
 * 8x8のマス目を持つ
 */
class Board extends DOM {

  /**
   * マス目たち
   */
  _cellList = null;

  /**
   * コンストラクタ
   * タグ名とクラス名を決定
   * HTML基底タグに貼り付ける
   * 空の8x8マスを作成して付加
   * 最初の4つの石を配置
   * @param {DOM} root 基底タグ
   */
  constructor(root) {
    const tagName = "div";
    const classes = ["board"];
    super(tagName, classes);
    this.appendTo(root);
    this.createEmptyCellsList();
    this.setReady();
  }

  /**
   * 基底となるHTMLタグにゲーム版を貼り付ける
   * @param {Node} root 基底となるHTMLタグそのもの
   */
  appendTo(root) {
    root.appendChild(this._node);
  }

  /**
   * ゲーム開始時の初期処理としてからの8x8マスを作成する。
   * ボードに順に貼り付ける
   */
  createEmptyCellsList() {
    const cellCount = 8
    this._cellList = new Array(cellCount);
    for (let v = 0; v < cellCount; v++) {
      //空っぽなら、横列をを作成する
      if (this._cellList[v] === null || this._cellList[v] === undefined) {
        this._cellList[v] = new Array(cellCount);
      }
      for (let h = 0; h < cellCount; h++) {
        const cell = new Cell(v, h);
        this.addChildNode(cell);
        this._cellList[v][h] = cell;
      }
    }
  }

  /**
   * ゲーム開始状態を作成する
   * 白、黒、白、黒を初期配置する
   */
  setReady() {
    const stoneColors = ["white", "black", "black", "white"];
    const cells = [
      this._cellList[3][3],
      this._cellList[3][4],
      this._cellList[4][3],
      this._cellList[4][4],
    ]
    stoneColors.forEach((color, index) => {
      cells[index].setStone(color);
    })
  }
}
