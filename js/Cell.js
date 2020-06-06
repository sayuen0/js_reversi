/**
 * マス目クラス
 * 石をおける
 */
class Cell extends DOM {
  constructor() {
    const tagName = "div";
    const classes = ["cell"];
    super(tagName, classes);
    //クリックイベント登録
    this._node.addEventListener("click", this.sayHello);
  }

  /**
   * 初期スタイル
   */
  setStyle() {
    const size = "50px";
    this._node.style.width = size;
    this._node.style.height = size;
    this._node.style.display = "inline-block";
    this._node.style.lineHeight = "1";
    this._node.style.fontSize = 0;
    this._node.style.verticalAlign = "bottom"
  }

  /**
   * ダミーメソッド
   * @param {Event} event 
   */
  sayHello(event) {
    //TODO: メソッド名を適切なものに変える
    //TODO: クリックされたらマスのインデックスを特定したい
    console.log("Hello");
  }
}
