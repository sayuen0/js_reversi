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
   * コンストラクタ
   */
  constructor() {

  }

  /**
   * 打つ石の色をセットする
   * @param {String} color 色
   */
  set color(color) {
    this._color = color;
  }
}
