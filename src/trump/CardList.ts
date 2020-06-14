import { Card } from "./Card";
class CardList {
  private _cards: Card[];
  constructor() {
    this._cards = [];
  }

  /**
   * カードを末尾に加える
   */
  public add(card: Card): void {
    this._cards.push(card);
  }

  /**
   * カードたちを返す
   */
  public get cards(): Card[] {
    return this._cards;
  }

  /**
   * カード枚数を返す
   */
  get length() {
    return this._cards.length;
  }

  /**
   * 未開封カードリストを作成する
   * @param {boolean} withJoker ジョーカー入りの54枚で作成するならtrue
   */
  public static createNotShuffledDeck(withJoker: boolean = false): CardList {
    if (withJoker) {
      console.log("withJoker");
    }
    return new CardList();
  }
}


export { CardList }
