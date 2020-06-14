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

  public get cards(): Card[] {
    return this._cards;
  }

  /**
   * 未開封カードリストを作成する
   */
  public static createNotShuffledDeck(withJoker: boolean): CardList {
    return new CardList();
  }
}

export { CardList }
