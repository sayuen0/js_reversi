class Card {
  private _suit: CardSuit;
  private _number: CardNumber;

  constructor(suit: CardSuit, number: CardNumber) {
    this._suit = suit;
    this._number = number;
  }

  public get number(): CardNumber {
    return this._number
  }

  public get suit(): CardSuit {
    return this._suit;
  }
}


/**
 * 番号ども
 */
enum CardNumber {
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
enum CardSuit {
  Club,
  Diamond,
  Heart,
  Spade
}


export { Card, CardNumber, CardSuit }
