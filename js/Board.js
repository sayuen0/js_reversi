class Board extends DOM {
  constructor(tagName, ...classes) {
    super(tagName, ...classes);
    console.log("board");
    this.setStyle();
  }

  /**
   * ボードのスタイリングをする
   */
  setStyle() {
    //1セル25px * 8
    const size = "200px";
    this._node.style.height = size;
    this._node.style.width = size;
  }
}
