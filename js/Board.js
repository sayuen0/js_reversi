class Board extends DOM {
  /**
   * コンストラクタ
   * タグ名とクラス名を決定
   */
  constructor() {
    const tagName = "div";
    const classes = ["board"];
    super(tagName, classes);
  }

  /**
   * ボードのスタイリングをする
   */
  setStyle() {
    //1セル25px * 8
    const size = "404px";
    this._node.style.height = size;
    this._node.style.width = size;
  }

  /**
   * 基底となるHTMLタグにゲーム版を貼り付ける
   * @param {Node} root 基底となるHTMLタグそのもの
   */
  appendTo(root) {
    root.appendChild(this._node);
  }
}
