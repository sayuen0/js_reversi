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
   * ゲーム状態
   */
  _gameStatus = null;

  /**
   * コンストラクタ
   * タグ名とクラス名を決定
   * HTML基底タグに貼り付ける
   * 空の8x8マスを作成して付加
   * 最初の4つの石を配置
   * ゲーム状態をセット
   * @param {DOM} root 基底タグ
   * @param {GameStatus} gameStatus ゲーム状態
   */
  constructor(root, gameStatus) {
    const tagName = "div";
    const classes = ["board"];
    super(tagName, classes);
    this._gameStatus = gameStatus;
    this.appendTo(root);
    this.createEmptyCellsList();
    this.setReady();
    this.setListener();
  }

  /**
   * イベントリスナをセットする
   */
  setListener() {
    this._node.addEventListener("click", this.handleClick);
    this._node.addEventListener("mouseover", this.handleMouseOver);
  }

  /**
   * クリックイベント処理
   * 石を置けるかどうか判定して、おけないなら何もしない。
   * 置けるなら、ひっくり返せる石を全てひっくり返してクリック位置に石を置く
   * @param {Event} event クリックイベント
   * @param {Event} self 自分自身の参照
   */
  handleClick = (event) => {
    //すでにそのマスに石があるなら何もしない
    //1. 石がクリックされたとき
    if (event.target.classList.contains("stone")) {
      console.log("石がクリックされても何もしない");
      return;
    }
    //2.石の置いてあるマス(のすき間)がクリックされたとき
    const [clickedV, clickedH] = [parseInt(event.target.dataset.v), parseInt(event.target.dataset.h)];
    const targetCell = this._cellList[clickedV][clickedH];
    if (targetCell.hasStone) {
      console.log("すでに置かれているマスがクリックされても何もしない");
      return;
    }
    // 現在の盤面をゲーム状態にに通知して置けるかどうか判定
    const reversibleList = this._gameStatus.observeBoard(this._cellList, event.target);
    console.log("ひっくり返せるマス達", reversibleList);
    //ひっくり返せるマスがないときはおかずに終了
    if (reversibleList.length === 0) {
      console.log("ひっくり返せるマス数がないのでおけません");
      return;
    }
    //ひっくり返せるマスがあれば全部ひっくり返す
    reversibleList.forEach(({ v, h }) => {
      this._cellList[v][h].reverseStone();
    })
    //新しく置く
    targetCell.setStone(this._gameStatus.turnColor);
    const turnColor = this._gameStatus.turnColor;

    // 石の数を数えてゲーム状態に通知する
    const [whites, blacks] = this.countStones();
    this._gameStatus.observeStoneCount(whites, blacks);
    //ゲーム状態を履歴として保存する
    this._gameStatus.saveCurrentStatus(this._cellList);
  }

  /**
   * マウスオーバーイベント処理
   * もしそこに石を置いたらどうなるかをシミュレートし、
   * 置ける石の数をヒント吹き出しに載せる
   */
  handleMouseOver = (event) => {
    const [targetV, targetH] = [parseInt(event.target.dataset.v, event.target.dataset.h)]
    this._gameStatus.countStonesCanGet(targetV, targetH, this._cellList, event.target);
  }

  /**
   * 基底となるHTMLタグにゲーム版を貼り付ける
   * CellをこれにつけるときはDOM#addChildNodeを用いること。
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
        const cell = new Cell(v, h, this._gameStatus);
        this.addChildNode(cell);
        this._cellList[v][h] = cell;
      }
    }
    //初期状態を保存しておく
    this._gameStatus.saveCurrentStatus(this._cellList);
  }

  /**
   * ゲーム開始状態を作成する
   * 白、黒、白、黒を初期配置する
   */
  setReady() {
    const stoneColors = ["white", "black", "black", "white"];
    const cells = [
      this._cellList[3][3],
      this._cellList[4][3],
      this._cellList[3][4],
      this._cellList[4][4],
    ]
    stoneColors.forEach((color, index) => {
      cells[index].setStone(color);
    })
  }
  /**
   * 今ある石の数を返す
   * @return {int} [白の数, 黒の数]
   */
  countStones() {
    let [whites, blacks] = [0, 0];
    this._cellList.forEach(vertical => {
      vertical.forEach(cell => {
        if (cell.hasStone && cell.stone.color === "white") {
          whites++;
          return;
        }
        if (cell.hasStone && cell.stone.color === "black") {
          blacks++;
          return;
        }
      })
    })
    return [whites, blacks];
  }

  getCell(v, h) {
    return this._cellList[v][h];
  }
}
