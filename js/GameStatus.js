/**
 * ゲームの状態管理
 * 各コンポーネントにおけるクリックイベントのオブザーバー
 */
class GameStatus {
  /**
   * プレイヤーたち
   */
  _players = [];

  /**
   * 次の手番プレイヤー
   */
  _turnPlayer = null;

  /**
   * 通知ボックス
   */
  _alertBox = null;


  /**
   * コンストラクタ
   * ゲーム盤をセット
   * プレイヤーを2人セット
   * 通知ボックスを作成してセット
   */
  constructor() {
    const user = new Player("white", "あなた");
    const opponent = new Player("black", "CPU");
    this._players.push(user);
    this._players.push(opponent);
    this._alertBox = new AlertBox(document.getElementById("alert"));
    this.selectFirstHand();
  }

  /**
   * 先手を決める
   */
  selectFirstHand() {
    //TODO:  ランダムないしはじゃんけんの結果で決められるようにする
    //とりあえずあなた
    this._turnPlayer = this._players[0];
    this._alertBox.setMessage(`${this._turnPlayer.name}の番です`, "info")
  }

  /**
   * 石が置かれたことでアクションを取る
   * ターンプレイヤーを切り替える
   */
  observeStonePut() {
    this._turnPlayer = this._turnPlayer === this._players[0] ? this._players[1] : this._players[0];
    this._alertBox.setMessage(`${this._turnPlayer.name}の番です`, "info");
  }
}
