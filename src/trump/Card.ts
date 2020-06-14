/**
 * トランプカードクラス(ジョーカーを除く)
 * 自分の絵柄を持つ
 *
 */
class Card {
  private _suit: Suit;
  private _number: Number;

  /**
   * @param suit カードマーク
   * @param number カード数値
   */
  constructor(suit: Suit, number: Number) {
    this._suit = suit;
    this._number = number;
  }

  public get number(): Number {
    return this._number
  }

  public get suit(): Suit {
    return this._suit;
  }

  public imagePath(): string {
    return "";
  }
}


/**
 * 番号ども
 */
class Number {
  public static readonly ACE = new Number("ACE", 1);
  public static readonly TWO = new Number("TWO", 1);
  public static readonly THREE = new Number("THREE", 1);
  public static readonly FOUR = new Number("FOUR", 1);
  public static readonly FIVE = new Number("FIVE", 1);
  public static readonly SIX = new Number("SIX", 1);
  public static readonly SEVEN = new Number("SEVEN", 1);
  public static readonly EIGHT = new Number("EIGIT", 1);
  public static readonly NINE = new Number("NINE", 1);
  public static readonly TEN = new Number("TEN", 1);
  public static readonly JACK = new Number("JACK", 1);
  public static readonly QUEEN = new Number("QUEEN", 1);
  public static readonly KING = new Number("KING", 1);
  /**
   * コンストラクタ
   * @param name 名前
   * @param num 数値
   */
  private constructor(public readonly name: string, public readonly num: number) {
    /**
     * 全部を返す
     */
  }
  public static getAll(): Number[] {
    return [
      Number.ACE,
      Number.TWO,
      Number.THREE,
      Number.FOUR,
      Number.FIVE,
      Number.SIX,
      Number.SEVEN,
      Number.EIGHT,
      Number.NINE,
      Number.TEN,
      Number.JACK,
      Number.QUEEN,
      Number.KING
    ];
  }

}

// TODO: create JOKER
//アイディアとしては、Card抽象クラスを作っておいてJokerとNumberCardサブクラスを作成する

/**
 * マークども
 */
class Suit {
  public static readonly CLUB = new Suit("CLUB", 0);
  public static readonly DIAMOND = new Suit("DIAMOND", 1);
  public static readonly HEART = new Suit("HEART", 2);
  public static readonly SPADE = new Suit("SPADE", 3);
  /**
   * コンストラクタ
   * @param name 名前
   * @param num 数値
   */
  private constructor(public readonly name: string, public readonly num: number) {
  }
  /**
   * 全部を返す
   */
  public static getAll(): Suit[] {
    return [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE];
  }
}
export { Card, Suit, Number, }
