//これのおかげでCSSを読み込む必要なし
import "../sass/sample/style.scss";

import { Card, Suit, Number } from "./trump/Card";
import { CardList } from "./trump/CardList";

console.log(new Card(Suit.CLUB, Number.EIGHT));

