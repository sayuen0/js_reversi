import { Card } from "./Card";
import { CardList } from "./CardList";
import { NodeElement } from "./NodeElement";
/**
 * 手札置き場
 * 5枚までカードを置ける
 * 弾き終わって交換したら自分の強さを観れる
 */
class HandTable extends NodeElement {
  /**
   * タグ
   */
  public constructor(public readonly _deck: CardList = new CardList()) {
    super(document.createElement("div"), ["hand-table"]);
  }

  get deck(): CardList {
    return this._deck;
  }

  /**
   * カードを1枚置く
   * @param card カード
   */
  public addCard(card: Card): void {
    this._deck.add(card);
  }

  /**
   * 枚数を返す
   */
  public get num() {
    return this._deck.length;
  }

  /**
   * 手札の強さを返す
   * 格判定を使う
   */
  public judgeStrength(): HandType {
    if (this.isRoyalStraightFlush()) {
      return HandType.ROYAL_STRAIGHT_FLUSH;
    }
    console.log("ロイヤルストレートフラッシュじゃ無いです。");

    if (this.isStraightFlush()) {
      return HandType.STRAIGHT_FLUSH;
    }
    console.log("ストレートフラッシュじゃ無いです");
    if (this.isFlush()) {
      return HandType.FLUSH;
    }
    console.log("フラッシュじゃ無いです");
    if (this.isStraight()) {
      return HandType.STRAIGHT;
    }
    console.log("ストレートじゃ無いです");

    return HandType.HIGH_CARDS;
  }

  /**
   * ロイヤルストレートフラッシュならtrue
   */
  private isRoyalStraightFlush(): boolean {
    const startFrom = 10;
    return this.isStraightFlush(startFrom);
  }
  /**
   * ストレートかつフラッシュならtrue
   * @param {number} fisrtNumber 先頭の数値
  */
  private isStraightFlush(startFrom?: number): boolean {
    return this.isStraight() && this.isFlush();
  }
  /**
   * 柄が全部一緒ならtrue
   */
  private isFlush(): boolean {
    const first = this._deck.cards[0];
    return this._deck.cards.every(card => {
      return card.suit === first.suit;
    });
  }

  /**
   * 数値が連続ならtrue
   * @param {number} startFrom 何番から始まるか
   */
  private isStraight(startFrom?: number): boolean {
    const sorted = this.deck.cards.sort((a, b) => {
      return a.number.num - b.number.num;
    })
    const first = sorted[0];
    const firstNumber = startFrom ? startFrom : first.number.num;
    return sorted.every((card, index) => {
      return card.number.num == firstNumber + index
    });
  }
}


/**
 * 役
 * 得点=強さを持つ
 */
class HandType {
  //弱い順
  public static readonly HIGH_CARDS = new HandType(0);
  public static readonly ONE_PAIR = new HandType(1);
  public static readonly TWO_PAIR = new HandType(2);
  public static readonly THREE_OF_A_KIND = new HandType(3);
  public static readonly STRAIGHT = new HandType(4);
  public static readonly FLUSH = new HandType(5);
  public static readonly FULL_HOUSE = new HandType(6);
  public static readonly FOUR_OF_A_KIND = new HandType(7);
  public static readonly STRAIGHT_FLUSH = new HandType(8);
  public static readonly ROYAL_STRAIGHT_FLUSH = new HandType(9);

  private constructor(public readonly strength: number) {
  }
}

export { HandTable, HandType };
