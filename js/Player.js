/**
 * プレイヤー
 * ユーザーかコンピュータ
 */
class Player {
  /**
   * 打つ石の色
   */
  #color = null;

  /**
   * 識別名
   */
  #name = null;

  /**
   * コンストラクタ
   * @param {String} color 打つ色
   * @param {String} name 識別名
   */
  constructor(color, name) {
    this.#color = color
    this.#name = name;
  }
  
  get color() {
    return this.#color;
  }

  get name() {
    return this.#name;
  }
}
