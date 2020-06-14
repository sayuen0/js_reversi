import { Card, CardSuit, CardNumber } from "../../src/trump/Card";


describe('カード番号やカードマーク', () => {
  it('カード番号が正しい', () => {
    const card1 = new Card(CardSuit.Club, CardNumber.ACE);
    expect(card1.suit).toBe(CardSuit.Club);
    expect(card1.number).toBe(CardNumber.ACE);
  });
});

