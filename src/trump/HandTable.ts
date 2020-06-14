import { Card } from "./Card";
import { CardList } from "./CardList";
/**
 * 手札置き場
 * 5枚までカードを置ける
 */
class HandTable {
  /**
   * 山札(手札)
   */
  private _deck: CardList;
  public constructor(deck: CardList = new CardList()) {
    this._deck = deck;
  }

  get deck(): CardList {
    return this._deck;
  }

  /**
   * カードを置く
   * @param card カード
   */
  public addCard(card: Card): void {
    if (this._deck.length >= 5) {
      console.log("もう追加でけへんで");
      return;
    }
    this._deck.add(card);
  }

  /**
   * 枚数を返す
   */
  public get num() {
    return this._deck.length;
  }
}


/**
 * 役
 * 得点=強さを持つ
 */
class HandType {
  //弱い順
  public readonly HIGH_CARDS = new HandType(0);
  public readonly ONE_PAIR = new HandType(1);
  public readonly TWO_PAIR = new HandType(2);
  public readonly THREE_OF_A_KIND = new HandType(3);
  public readonly STRAIGHT = new HandType(4);
  public readonly FLUSH = new HandType(5);
  public readonly FULL_HOUSE = new HandType(6);
  public readonly FOUR_OF_A_KIND = new HandType(7);
  public readonly STRAIGHT_FLUSH = new HandType(8);
  public readonly ROYAL_STRAIGHT_FLUSH = new HandType(9);

  private constructor(strength: number) { }
}

export { HandTable, HandType };
