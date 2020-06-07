/**
 * ゲーム履歴リスト
 */
class GameHistory {
  /**
   * ゲーム状態の履歴
   */
  _gameStatusList = null;
  /**
   * 今履歴の何番目を指しているか
   */
  _currentIndex = null;
  constructor() {
    this._gameStatusList = [];
    this._currentIndex = -1;
  }

  /**
   * ゲーム状態を追加する
   * @param {GameStatus} status ゲーム状態
   */
  addStatus(status) {
    this._gameStatusList.push(status);
    console.log(this._gameStatusList);
    this._currentIndex++;
  }
}
