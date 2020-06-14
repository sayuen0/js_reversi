import { Card, Suit, Number } from "../../src/trump/Card";



describe('コンストラクタ', () => {
  it('カードに与えた番号が正しい', () => {
    const card1 = new Card(Suit.CLUB, Number.ACE);
    expect(card1.suit).toBe(Suit.CLUB);
    expect(card1.number).toBe(Number.ACE);
  });
  it('クラス名が正しい', () => {
    const card = new Card(Suit.HEART, Number.FIVE, "helloworld", "goodbye");
    expect(card.node.classList[0]).toBe("card");
    expect(card.node.classList[1]).toBe("helloworld");
    expect(card.node.classList[2]).toBe("goodbye");
  });

});

describe('画像パス', () => {
  it('画像パスが正しい', () => {
    const c = new Card(Suit.CLUB, Number.EIGHT);
    expect(c.imagePath).toBe("cards_club_08.png");
  });
});



