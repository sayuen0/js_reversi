//これのおかげでCSSを読み込む必要なし
import "../sass/sample/style.scss"

import Class1 from "./Class1";

console.log(hello("typescript"));

function hello(name: String): string {
  return `Hello, ${name}`;
}


console.log(new Class1("hello").name);
