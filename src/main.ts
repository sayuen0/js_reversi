//これのおかげでCSSを読み込む必要なし
import "../sass/style.scss";

import { Card, Suit, Number } from "./trump/Card";
import { CardList } from "./trump/CardList";
import { HandTable } from "./trump/HandTable";

const c1 = new Card(Suit.CLUB, Number.EIGHT);
const c2 = new Card(Suit.CLUB, Number.NINE);
const t = new HandTable();
const root = document.getElementById("root");
if (!root) {
  throw new Error("rootがありません");
}
root.appendChild(t.node);
const deck = CardList.createNotShuffledDeck();
deck.shuflle(10000);
let card: Card;
const count = 5;
for (let i = 0; i < count; i++) {
  card = deck.draw();
  console.log(i);
  t.node.appendChild(card.node);
}
