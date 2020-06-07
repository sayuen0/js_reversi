/**
 * ヒント吹き出し
 */
class HintBalloon extends DOM {
  /**
   * コンストラクタ
   */
  constructor() {
    const tagName = "div";
    const classes = ["hint-balloon"];
    super(tagName, classes);
    this.setListener();
    this._node.innerHTML = "hello world";
  }

  setListener() {
    const hintButton = document.getElementById("hint-button");
    hintButton.addEventListener("click", () => {
      this._node.style.display = "block";
      document.body.appendChild(this._node);
    })
  }
}
