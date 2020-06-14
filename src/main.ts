//これのおかげでCSSを読み込む必要なし
import "../sass/style.scss";

import { Card, Suit, Number } from "./trump/Card";
import { CardList } from "./trump/CardList";
import { HandTable, HandType } from "./trump/HandTable";

const root = document.getElementById("root");
if (!root) {
  throw new Error("rootがありません");
}
// const deck = CardList.createNotShuffledDeck();
//これを山札にするので、クラス名を与えて裏向き画像にしておくれ
let card: Card;
const count = 5;
const deck = CardList.createNotShuffledDeck();
deck.shuflle(10000);
const hands = new CardList();
for (let i = 0; i < count; i++) {
  root.appendChild(deck.node);
  card = deck.draw();
  hands.add(card);
}
const table = new HandTable(hands);
root.appendChild(table.node);
table.node.appendChild(hands.node);
const result = table.judgeStrength();
console.log(result);
root.appendChild(document.createTextNode(result.name));

