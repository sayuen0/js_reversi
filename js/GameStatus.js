/**
 * ゲームの状態管理
 */
class GameStatus {
  /**
   * ゲーム盤
   */
  _board = null;

  /**
   * ターンプレイヤー
   */

  /**
   * コンストラクタ
   * ゲーム盤をセット
   * @param {Board} board ゲーム盤
   */
  constructor(board) {
    this._board = board;
    this.selectFirstHand();
  }

}
