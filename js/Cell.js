/**
 * マス目クラス
 * 石をおける
 */
class Cell extends DOM {
  /**
   * 横番地
   */
  _v = null;
  /**
   * 縦番地
   */
  _h = null;

  _stone = null;
  /**
   * コンストラクタ
   * セルを作成
   * 番地を登録
   * クリックイベントを登録
   * 置かれた状態はfalse
   */
  constructor(v, h) {
    const tagName = "div";
    const classes = ["cell"];
    super(tagName, classes);
    this._v = v;
    this._h = h;
    //クリックイベント登録
    this._node.addEventListener("click", (event) => {
      //TODO: クリックした回数をカウントして、白と黒を置き分ける
      const color = Math.random() <= 0.5 ? "black" : "white";
      this.setStone(color);
    });
    this._alreadyPut = false;
  }

  /**
   * 石を置く
   * 置いた位置には新たにはおけない
   * @param {String} color 石の色
   */
  setStone(color) {
    console.log("石が置かれました", this._v, this._h);
    if (this._alreadyPut) {
      return console.log("すでに置かれています");
    }
    this._stone = new Stone(color);
    this.addChildNode(this._stone);
    this._alreadyPut = true;
  }

  /**
   * 石を裏返す
   */
  //TODO: あってもいいけどなくて良い
  reverseStone() {
    this.stone.reverse();
  }
}
