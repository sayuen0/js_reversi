/**
 * 通知ボックス
 */
class AlertBox extends DOM {

  /**
   * コンストラクタ
   * タグはdiv,
   * @param {Node} root 基底
   */
  constructor(root) {
    super("div", ["alert-box"]);
    this.appendTo(root);
  }

  /**
   * メッセージをセットする
   * @param {String} message 内容
   * @param {String} status エラーとかログとか
   */
  setMessage(message, status) {
    this._node.innerHTML = message;
    this._node.classList.add(status);
  }

  /**
  * 基底となるHTMLタグに付加する
  * @param {Node} root 基底となるHTMLタグそのもの
  */
  appendTo(root) {
    root.appendChild(this._node);
  }
}
