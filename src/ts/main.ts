//これのおかげでCSSを読み込む必要なし
import "../../sass/sample/style.scss"

function hello(name: String): string {
  return `Hello, ${name}`;
}

console.log(hello("typescript"));


