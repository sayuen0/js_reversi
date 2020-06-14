import { Card, CardSuit, CardNumber } from "../../src/trump/Card";
import { CardList } from "../../src/trump/CardList";

describe("カード追加について", () => {
  it('追加正常系', () => {
    const cardList1 = new CardList();
    expect(cardList1.length).toBe(0);
  });
});

