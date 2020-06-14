//これのおかげでCSSを読み込む必要なし
import "../sass/sample/style.scss";

import { Card, Suit, Number } from "./trump/Card";
import { CardList } from "./trump/CardList";

const c = new Card(Suit.CLUB, Number.EIGHT);

const root = document.getElementById("root");
if (!root) {
  throw new Error("rootがありません");
}
root.appendChild(c.element);
