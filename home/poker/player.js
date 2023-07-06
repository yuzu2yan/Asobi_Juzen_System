import Card from './card.js';

export default class Player {
  #cards; // 手札
  #nodes; // 手札のノード

  get cards() {
    return this.#cards;
  };

  get nodes() {
    return this.#nodes;
  };

  get selectedNodes() {
    return this.nodes.filter((node) => node.classList.contains("selected"));
  };

  constructor(selector) {
    // プロパティの初期化
    this.#nodes = Array.from(document.querySelectorAll(selector));
    this.#cards = [];
  };

  // 手札を描画
  displayCards(front) {
    // 手札について
    this.cards.forEach((Card, index) => {
      // 描写する画像のファイル名
      let name = String(Card.index).padStart(2, "0") + ".png";
      // 裏面を表示するとき
      if (!front) {
        name = "red.png";
      }
      // カードの画像をセット
      this.nodes[index].setAttribute("src", "images/" + name);
    });
  };

  // 新しいカードを手札に追加
  addCard(newCard) {
    //　カードを手札の最後尾に追加 
    this.cards.push(newCard);
    // 最後尾のノードにカードのインデックス番号を設定
    this.nodes[this.cards.length - 1].dataset.index = newCard.index;
  };

  //　交換するカードを選択する
  selectCard(node) {
    // 選択状態を表すCSSクラス名を切り替える
    node.classList.toggle("selected");
  };

  // 山札からカードを引いて交換する
  drawCard(newCard) {
    // 選択しているノードの先頭から１つ取り出す
    const node = this.selectedNodes.shift();
    // インデックス番号を取得
    const index = parseInt(node.dataset.index);
    // 手札の位置を検索
    const pos = this.cards.findIndex((Card) => Card.index === index);
    // 複製して退避
    const oldCard = this.cards.slice(pos, pos + 1)[0];
    // 新しい手札で置き換える
    this.cards[pos] = newCard;
    // ノードのインデックス番号を更新
    node.dataset.index = newCard.index;
    // ノードの状態を未選択に戻す
    node.classList.remove("selected");
    // 交換したカードを返す
    return oldCard;
  };
}