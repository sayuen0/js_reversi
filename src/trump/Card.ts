import { NodeElement } from "./NodeElement";
/**
 * トランプカードクラス(ジョーカーを除く)
 * 自分の絵柄を持つ
 *
 */
class Card extends NodeElement {
  public readonly suit: Suit;
  public readonly number: Number;
  /**
   * コンストラクタ
   * @param suit カードマーク
   * @param number カード数値
   */
  constructor(suit: Suit, number: Number, ...classNames: Array<string>) {
    const node = document.createElement("div");
    super(node, classNames);
    this.node.dataset.name = suit.name;
    this.node.dataset.num = <string><unknown>number.num;
    this.suit = suit;
    this.number = number;//TODO:これ宣言しなくてもいけるんでね?
    this.decorateHTMLAttributes();
    // this.setClickListener();
  }

  /**
   * カードの画像パスを返す
   */
  public get imagePath(): string {
    return `cards_${this.suit.name.toLowerCase()}_${("00" + this.number.num).slice(-2)}.png`;
  }

  /**
   * タグにクラスや背景画像属性を与える
   */
  private decorateHTMLAttributes(): void {
    this._node.classList.add("card");
    const imageRoot = "/images/trump"
    this._node.style.backgroundImage = `url('${imageRoot}/${this.imagePath}')`;
  }

  /**
   * クリックイベントつける
   */
  private setClickListener(): void {
    this.node.addEventListener("click", (event) => {
      console.log(event.target, event.currentTarget, this.number, this.suit);
    })
  }
}

/**
 * 番号ども
 */
class Number {
  public static readonly ACE = new Number("ACE", 1);
  public static readonly TWO = new Number("TWO", 2);
  public static readonly THREE = new Number("THREE", 3);
  public static readonly FOUR = new Number("FOUR", 4);
  public static readonly FIVE = new Number("FIVE", 5);
  public static readonly SIX = new Number("SIX", 6);
  public static readonly SEVEN = new Number("SEVEN", 7);
  public static readonly EIGHT = new Number("EIGIT", 8);
  public static readonly NINE = new Number("NINE", 9);
  public static readonly TEN = new Number("TEN", 10);
  public static readonly JACK = new Number("JACK", 11);
  public static readonly QUEEN = new Number("QUEEN", 12);
  public static readonly KING = new Number("KING", 13);
  /**
   * コンストラクタ
   * @param name 名前
   * @param num 数値
   */
  private constructor(public readonly name: string, public readonly num: number) {
    /**
     * 全部を返す
     */
  }
  public static getAll(): Number[] {
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

// TODO: create JOKER
//アイディアとしては、Card抽象クラスを作っておいてJokerとNumberCardサブクラスを作成する

/**
 * マークども
 */
class Suit {
  private _name: string;
  private _num: number;
  public static readonly CLUB = new Suit("CLUB", 0);
  public static readonly DIAMOND = new Suit("DIAMOND", 1);
  public static readonly HEART = new Suit("HEART", 2);
  public static readonly SPADE = new Suit("SPADE", 3);
  /**
   * コンストラクタ
   * @param name 名前
   * @param num 数値
   */
  private constructor(public readonly name: string, public readonly num: number) {
    this._name = name;
    this._num = num;
  }
  /**
   * 全部を返す
   */
  public static getAll(): Suit[] {
    return [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE];
  }
}
export { Card, Suit, Number, }
