/**
 * トランプカードクラス(ジョーカーを除く)
 * 自分の絵柄を持つ
 *
 */
class Card {
  private _suit: Suit;
  private _number: Number;

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

  public static getAllSuits(): Suit[] {
    return [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE];
  }

  public static getAllNumbers(): Number[] {
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


/**
 * 番号ども
 */
enum Number {
  ACE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING
}

// TODO: create JOKER
//アイディアとしては、Card抽象クラスを作っておいてJokerとNumberCardサブクラスを作成する

/**
 * マークども
 */
enum Suit {
  CLUB,
  DIAMOND,
  HEART,
  SPADE
}


export { Card, Number, Suit }
