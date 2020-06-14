import { Card, Suit, Number } from "../../src/trump/Card";

describe('カード番号やカードマーク', () => {
  it('カードに与えた番号が正しい', () => {
    const card1 = new Card(Suit.CLUB, Number.ACE);
    expect(card1.suit).toBe(Suit.CLUB);
    expect(card1.number).toBe(Number.ACE);
  });
  it('it', () => {
    expect(true).toBe(true);
  });
});

describe('画像パス', () => {
  it('画像パスが正しい', () => {
    const c = new Card(Suit.CLUB, Number.EIGHT);
    expect(c.imagePath).toBe("cards_club_08.png");
  });
});

