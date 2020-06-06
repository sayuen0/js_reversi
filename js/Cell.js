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
   */
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
