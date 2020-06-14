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
   * 山札(手札)
   */
  private _deck: CardList;
  /**
   * タグ
   */
  public constructor(deck: CardList = new CardList()) {
    super(document.createElement("div"), ["hand-table"]);
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
    // if (this._deck.length >= 5) {
    //   console.log("もう追加でけへんで");
    //   return;
    // }
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

    }
    return HandType.HIGH_CARDS;
  }

  /**
   * ロイヤルストレートフラッシュならtrue
   */
  private isRoyalStraightFlush(): boolean {
    //先頭の柄取得
    const first = this._deck;
    console.log(first);

    // const sortedCards = this._deck.cards.sort((a, b) => {
    //   return a.number.num - b.number.num;
    // })
    // console.log(sortedCards);
    return false;
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
