import { Card, Suit, Number } from "./Card";
class CardList {
  private _cards: Card[];
  /**
   * コンストラクタ
   * カードのリストから作成
   * 何も渡さなくてもからの山札を作成
   */
  constructor(list: Array<Card> = new Array<Card>()) {
    this._cards = list;
  }

  /**
   * カードを末尾に加える
   */
  public add(card: Card): void {
    this._cards.push(card);
  }

  /**
   * カードたちを返す
   */
  public get cards(): Card[] {
    return this._cards;
  }

  /**
   * カード枚数を返す
   */
  get length() {
    return this._cards.length;
  }

  /**
   * 未開封カードリストを作成する
   * @param {boolean} withJoker ジョーカー入りの54枚で作成するならtrue
   */
  public static createNotShuffledDeck(withJoker: boolean = false): CardList {
    let card;
    const cards = new Array<Card>();
    Card.getAllNumbers().forEach(number => {
      Card.getAllSuits().forEach(suit => {
        card = new Card(suit, number);
        cards.push(card);
      })
    })
    return new CardList(cards);
  }

  /**
   * まぜまぜする
   */
  public shuflle(): void {

  }
}


export { CardList }
