import { Card, Suit, Number } from "../../src/trump/Card";


describe('カード番号やカードマーク', () => {
  it('カード番号が正しい', () => {
    const card1 = new Card(Suit.CLUB, Number.ACE);
    expect(card1.suit).toBe(Suit.CLUB);
    expect(card1.number).toBe(Number.ACE);
  });
});

