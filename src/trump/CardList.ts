import { Card, Suit, Number } from "./Card";
class CardList {
  private _cards: Array<Card>;
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
    Number.getAll().forEach(number => {
      Suit.getAll().forEach(suit => {
        card = new Card(suit, number);
        cards.push(card);
      })
    })
    return new CardList(cards);
  }

  /**
   * カードをまぜまぜする
   * Fisher–Yatesアルゴリズムに従う
   */
  public shuflle(count: number = 1): void {
    for (let i = 0; i < count; i++) {
      const r = Math.floor(Math.random() * (i + 1));
      [this._cards[i], this.cards[r]] = [this._cards[r], this.cards[i]]
    }
  }

  /**
   * てっぺんから一枚引いて返す
   */
  public draw(): Card {
    const card = this._cards.shift();
    if (!card) {
      throw new Error("無いものからは引けないぜ。");
    }
    return card;
  }
}


export { CardList }
