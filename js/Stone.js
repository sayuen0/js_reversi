/**
 * 石クラス
 */
class Stone extends DOM {
  /**
   * 
   * @param {String} color 
   */
  constructor(color) {
    const tagName = "div";
    //白でも黒でもどっちでも無いのが与えられたら白にしとく
    if (color !== "white" && color !== "black") {
      color = "white";
    }
    const classes = ["stone", color];
    super(tagName, classes);
  }

  setStyle() {
  }
}



