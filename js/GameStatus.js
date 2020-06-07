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
   * ヒント吹き出し
   */
  _hintBalloon = null;

  /**
   * ゲーム履歴
   */
  _gameHistory = null;

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
    this._hintBalloon = new HintBalloon();
    this._gameHistory = new GameHistory();
  }

  /**
   * 先手を決める
   */
  selectFirstHand() {
    //TODO:  ランダムないしはじゃんけんの結果で決められるようにする
    //とりあえずあなた
    this._turnPlayer = this._players[0];
    this._alertBox.setMessage(`${this._turnPlayer.name}の番です 色: ${this._turnPlayer.color}`, "info");
  }

  /**
   * 石が置かれたことでアクションを取る
   * ターンプレイヤーを切り替える
   */
  observeStonePut() {
    this._turnPlayer = this._turnPlayer === this._players[0] ? this._players[1] : this._players[0];
    this._alertBox.setMessage(`${this._turnPlayer.name}の番です 色: ${this._turnPlayer.color}`, "info");
  }

  /**
   * 石の数の変更を受け取り通知する
   * @param {int} whites 白の数
   * @param {int} black 黒の数
   * 
   */
  observeStoneCount(whites, blacks) {
    this._alertBox.setMessage(`${this._turnPlayer.name}の番です 色: ${this._turnPlayer.color},
    石の数: 白-> ${whites} , 黒->${blacks}
    `, "info");
  }
  /**
   * 今の手番の色を返す
   */
  get turnColor() {
    return this._turnPlayer.color;
  }


  /**
   * マスが選択されたとき、取れる数を数えさせる。Boardに
   * @param {int} v
   * @param {int} h
   */
  countStonesCanGet(v, h, cellList, cellNode) {
    //TODO: 石が重なっている箇所でも置ける数を数えてしまうのでなんとかする
    //HACK: oberveBoardという名前が不適切(観測じ以外でも呼び出してしまっているので)なので変える
    this._hintBalloon.setMessage(
      this.observeBoard(cellList, cellNode).length + "個取れます"
    )
  }

  /**
   * 3. 自分自身のとき(ずらすインデックスがv=0, h=0のとき)
   * @param {Array} cellList ますたち
   * @param {Node} clickedCell クリックされたマスのタグ
   */
  observeBoard(cellList, clickedCellNode) {
    //その8方に対して、直進してひっくり返せるかどうか判定
    const searchIncrementals = [-1, 0, 1];
    let reversibleCellIndexes = [];
    searchIncrementals.forEach(v => {
      searchIncrementals.forEach(h => {
        //自分自身なら終了
        if (v === 0 && h === 0) {
          console.log("自分自身なので終了", clickedCellNode.dataset.v, clickedCellNode.dataset.h);
          return;
        }
        reversibleCellIndexes = reversibleCellIndexes.concat(
          this.countReversibleCellIndexes(
            v,
            h,
            cellList,
            clickedCellNode,
            reversibleCellIndexes));
      })
    })
    //重複排除
    reversibleCellIndexes = Array.from(new Set(reversibleCellIndexes));
    console.log(reversibleCellIndexes);
    return reversibleCellIndexes;
  }

  /**
   * ひっくり返せるコマのインデックスを深さ優先探索で数えて返す
   * 隣接したマスが以下の条件のとき終了する
   * 1. 次に置かれるべき色と同じ色のとき(上を見たとき、白を置こうとして上に白があるとき)
   * 2. 壁のとき(インデックスが-1か8)
   * 4. 空マスのとき(石がないとき)

   * 以下のときひっくり返せるコマのマス番地として形状
   * - 自分と違う色の先に自分と同じ色が存在するとき
   * @param {int} v 縦に更新される値。-1なら下に、0なら縦は動かず、1なら上に
   * @param {int} h 横に更新される値。-1なら左に、0なら横は動かず、1なら右に
   * @param {Array[Array[Cell]]} cellList マスたち
   * @param {Cell} currentCell 今見ているマス
   */
  countReversibleCellIndexes(v, h, cellList, currentCell, reversibleList) {
    const [currentV, currentH] = [parseInt(currentCell.dataset.v), parseInt(currentCell.dataset.h)];
    const [nextV, nextH] = [currentV + v, currentH + h];
    //隣接マスが壁なら一つもひっくり返せず終了
    if (nextV === -1 || nextV === 8 || nextH === -1 || nextH === 8) {
      console.log("壁なので終了", nextV, nextH);
      reversibleList = [];
      return reversibleList;
    }
    //隣接マスが空なら一つもひっくり返せず終了
    //FIXME: 動かせるけどエラーになって気持ち悪いので直す
    const nextCell = cellList[nextV][nextH];
    if (!nextCell.hasStone) {
      console.log("空なので終了", nextV, nextH);
      reversibleList = [];
      return reversibleList;
    }
    //同じ色なら、今までに見つけたひっくり返せる列を返して終了
    //1発目に空なら空配列を返して終了できる
    if (nextCell.stone.color === this.turnColor) {
      console.log("同じ色なので終了", this.turnColor, nextV, nextH);
      return reversibleList;
    }

    //違う色なら今見つけた位置を保存して、一つずらして継続
    if (nextCell.stone.color !== this.turnColor) {
      console.log("違う色なので継続", nextCell.stone.color, nextV, nextH);
      const mayReversible = { v: nextV, h: nextH };
      reversibleList = this.countReversibleCellIndexes(v, h, cellList, nextCell._node, reversibleList.concat(mayReversible));
      console.log(reversibleList);
    }
    return reversibleList;
  }
}
