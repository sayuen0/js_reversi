import { Card, Suit, Number } from "../../src/trump/Card";
import { CardList } from "../../src/trump/CardList";

describe("カード追加について", () => {
  it('追加正常系', () => {
    const cardList1 = new CardList();
    expect(cardList1.length).toBe(0);
    const card1 = new Card(Suit.SPADE, Number.QUEEN);
    cardList1.add(card1);
    expect(cardList1.length).toBe(1);
  });

  it('未開封山札正常系', () => {
    const cardList = CardList.createNotShuffledDeck();
    expect(cardList.length).toBe(52);
  });

});

