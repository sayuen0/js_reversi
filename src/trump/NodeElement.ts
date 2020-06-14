/**
 * タグクラス
 * HTMLに貼り付けるもの
 */
export abstract class NodeElement {
  /**
   * タグ
   */
  protected _node: HTMLElement;
  /**
   * コンストラクタ
   * タグ作ってHTMLクラスを最初から与える
   * @param node タグ
   * @param classNames クラス名の配列
   */
  constructor(node: HTMLElement, classNames: Array<string>) {
    this._node = node;
    this._node.classList.add(...classNames);
  }

  public get node() {
    return this._node;
  }
}
