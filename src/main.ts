//これのおかげでCSSを読み込む必要なし
import "../sass/sample/style.scss"

import { Card, CardSuit, CardNumber } from "./trump/Card";
import { CardList } from "./trump/CardList";
const card1 = new Card(CardSuit.Club, CardNumber.ACE);
const card2 = new Card(CardSuit.Spade, CardNumber.KING);
const deck = new CardList();
deck.add(card1);
deck.add(card2);

console.log(deck);
