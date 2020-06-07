/**
 * ヒント吹き出し
 */
class HintBalloon extends DOM {
  /**
   * コンストラクタ
   */
  constructor() {
    const tagName = "div";
    const classes = ["hint-balloon", "disabled"];
    super(tagName, classes);
    this.setListener();
    this.setMessage("ヒントボックスです。マスに重ねると取れるコマの数を表示します。");
  }

  /**
   * イベントリスナーをセットする
   * クリックイベント
   * マウス移動イベント
   */
  setListener() {
    //クリックイベント
    const hintButton = document.getElementById("hint-button");
    hintButton.addEventListener("click", () => {
      this._node.classList.toggle("disabled");
      document.body.appendChild(this._node);
    })
    //マウス移動イベント
    window.addEventListener("mousemove", (e) => {
      this._node.style.left = `${e.clientX + 20}px`;
      this._node.style.top = `${e.clientY + 20}px`;
    })
  }

  /**
   * 
   */
  setMessage(message) {
    this._node.textContent = message;
  }
}
