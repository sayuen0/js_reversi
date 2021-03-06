/**
 * DOM
 * HTMLへのレンダリングを行う
 */
class DOM {
  /**
   * コンストラクタ
   * タグとしてNodeを生成
   * @param {String} tagName HTMLでのタグ名
   * @param {Array} classes クラス名
   */
  constructor(tagName, classes = []) {
    this._node = document.createElement(tagName);
    if (classes.length > 0) {
      classes.forEach((className) => {
        this._node.classList.add(className);
      })
    }
  }
  /**
   * 自身に子要素タグを付加する
   * @param {DOM} child 付加対象
   */
  addChildNode(child) {
    this._node.appendChild(child._node);
  }
}

