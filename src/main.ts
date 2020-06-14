//これのおかげでCSSを読み込む必要なし
import "../sass/style.scss";

import { Card, Suit, Number } from "./trump/Card";
import { CardList } from "./trump/CardList";
import { HandTable } from "./trump/HandTable";

const c1 = new Card(Suit.CLUB, Number.EIGHT);
const c2 = new Card(Suit.CLUB, Number.NINE);
const root = document.getElementById("root");
if (!root) {
  throw new Error("rootがありません");
}
const deck = CardList.createNotShuffledDeck();
//これを山札にするので、クラス名を与えて裏向き画像にしておくれ
root.appendChild(deck.node);
deck.shuflle(10000);
let card: Card;
const count = 5;
const hands: CardList = new CardList();
for (let i = 0; i < count; i++) {
  card = deck.draw();
  hands.add(card);
}

const table = new HandTable(hands);
root.appendChild(table.node);
table.node.appendChild(hands.node);
console.log(table.judgeStrength());

