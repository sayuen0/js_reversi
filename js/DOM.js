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
    this.setStyle();
  }
  /**
   * 自身を子要素として付加する
   * @param {DOM} target 付加対象
   */
  appendTo(target) {
    target._node.appendChild(this._node);
  }

  /**
   * デフォルトのスタイリングをする
   */
  setStyle() {

  }
}

