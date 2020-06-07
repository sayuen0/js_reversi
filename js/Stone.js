/**
 * 石クラス
 */
class Stone extends DOM {

  /**
   * 色
   */
  _color = null;

  /**
   * コンストラクタ
   * divタグとして作成
   * 色を決定する
   * @param {String} color 色
   */
  constructor(color) {
    //白黒どっちでもなければ黒
    color = (color !== "black" && color !== "white") ? "black" : color;
    const tagName = "div";
    const classes = ["stone", color];
    super(tagName, classes);
    this._color = color;
  }

  /**
   * 裏返って色が変わる
   */
  reverse() {
    this._node.classList.toggle("black");
    this._node.classList.toggle("white");
    console.log(this);
    if (this._node.classList.contains("black")) {
      this._color = "black";
    } else {
      this._color = "white";
    }
    console.log(this);

  }

  /**
   * 色を返す
   */
  get color() {
    return this._color;
  }
}



