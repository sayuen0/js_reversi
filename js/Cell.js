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

  /**
   * 石
   */
  _stone = null;

  /**
   * ゲーム状態
   */
  _gameStatus = null;
  /**
   * コンストラクタ
   * セルを作成
   * 番地を登録
   * クリックイベントを登録
   * 置かれた状態はfalse
   * オブザーバーとしてゲーム状態をセット
   * @param {int} v 縦座標
   * @param {int} h 横座標
   * @param {GameStatus} gameStatus ゲーム状態
   */
  constructor(v, h, gameStatus) {
    const tagName = "div";
    const classes = ["cell"];
    super(tagName, classes);
    this._v = v;
    this._h = h;
    this._gameStatus = gameStatus;
    //クリックイベント登録
    this._node.addEventListener("click", (event) => {
      //TODO: クリックした回数をカウントして、白と黒を置き分ける
      const turnColor = this._gameStatus.turnColor;
      this.setStone(turnColor);
    });
    this._alreadyPut = false;
  }

  /**
   * 石を置く
   * 置いた位置がクリックされたらそれをひっくり返す
   * @param {String} color 石の色
   */
  setStone(color) {
    //置かれてるならひっくり返す
    if (this._alreadyPut) {
      return this._stone.reverse();
    }
    //今のターンプレイヤーの色の石を置く
    this._stone = new Stone(color);
    this.addChildNode(this._stone);
    this._alreadyPut = true;
    this._gameStatus.observeStonePut();
  }

  /**
   * 置かれている石を返す
   */
  get stone() {
    return this._stone;
  }

  /**
   * 石が置かれていたらtrueを返す
   */
  get hasStone() {
    return this._stone !== null && this._stone !== undefined;
  }
}
