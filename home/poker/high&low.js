import Utils from "./utils.js";
import Card from "./card.js";
import Player from "./player.js";
import Computer from "./computer.js";

export default class DubbleUp {
  #you; // プレイヤー
  #computer; // コンピュータ
  #cards; // 山札のカード
  #score; // スコア
  #isPlaying; // ゲーム実行状態(true:実行中, false:停止中)

  constructor() {
    // プロパティを初期化
    this.#you = null;
    this.#computer = null;
    this.#cards = [];
    this.#isPlaying = false;
    let urlParams = new URLSearchParams(window.location.search);
    this.#score = urlParams.get('score');
    this.#addEvent(); // イベントハンドラを登録
  }

  // イベントハンドラを登録
  #addEvent() {
    // Highボタンのクリックイベントハンドラを登録
    Utils.addEventListener("#high", "click", this.#onClickHigh.bind(this));
    // Replayボタンのクリックイベントハンドラを登録
    Utils.addEventListener("#low", "click", this.#onClickLow.bind(this));
  }

  run() {
    this.#initialize();
  }

  #initialize() {
    this.#you = new Player(".card.you");
    this.#computer = new Computer(".card.com");
    const scoreElement = document.getElementById("myScore");
    scoreElement.textContent = this.#score;

    this.#cards = [];
    [...Array(52)].map((_, index) => {
      this.#cards.push(new Card(index + 1));
    })

    this.#shuffleCards();

    this.#dealCards(this.#you, 1);
    this.#dealCards(this.#computer, 1);

    this.#isPlaying = true;

    this.#updateView();
  }

    // 山札をシャッフル
    #shuffleCards() {
      [...Array(100)].forEach(() => { // 十分に混ざるように100回繰り返す
        // 山札からランダムに2枚のカードを選択して交換
        const index1 = Math.floor(Math.random() * this.#cards.length);
        const index2 = Math.floor(Math.random() * this.#cards.length);
        [this.#cards[index1], this.#cards[index2]] = [this.#cards[index2], this.#cards[index1]];
      });
    };
  

  // プレイヤーとコンピュータに１枚ずつカードを配る
  #dealCards(player, n) {
    [...Array(n)].map(() => { // n回繰り返す
      // 山札からカードを取り出してプレイヤーに配る
      player.addCard(this.#cards.pop());
    });
  };

  // 画面の描画を更新
  #updateView() {
    // プレイヤーの手札を描画
    this.#you.displayCards(!this.#isPlaying);
    // コンピュータの手札を描画
    this.#computer.displayCards(true);
  };

  // Highボタンのクリックイベントハンドラ
  async #onClickHigh(event) {
    this.#isPlaying = false;
    await Utils.sleep(1000);
    this.#updateView();
    await Utils.sleep(1000);
    this.#judge("High");
    await Utils.sleep(1000);
    this.#initialize();
  };

  // Lowボタンのクリックイベントハンドラ
  async #onClickLow(event) {
    this.#isPlaying = false;
    await Utils.sleep(1000);
    this.#updateView();
    await Utils.sleep(1000);
    this.#judge("Low");
    await Utils.sleep(1000);
    this.#initialize();
  };

  // 勝敗を判定する
  #judge(selection) {
    // 勝者の判定
    if (selection === "High") {
      if (this.#you.cards[0].rank > this.#computer.cards[0].rank) {
        alert("あなたの勝ちです");
        this.#score *= 2;
      }
      else if (this.#you.cards[0].rank < this.#computer.cards[0].rank) {
        alert("あなたの負けです");
        this.#score = 0;
      }
      else {
        if (this.#you.cards[0].suit > this.#computer.cards[0].suit) {
          alert("あなたの勝ちです");
          this.#score *= 2;
        }
        else if (this.#you.cards[0].suit < this.#computer.cards[0].suit) { 
          alert("あなたの負けです");
          this.#score = 0;
        }
      }
    }
    else if (selection === "Low") {
      if (this.#you.cards[0].rank < this.#computer.cards[0].rank) {
        alert("あなたの勝ちです");
        this.#score *= 2;
      }
      else if (this.#you.cards[0].rank > this.#computer.cards[0].rank) {
        alert("あなたの負けです");
        this.#score = 0;
      }
      else {
        if (this.#you.cards[0].suit < this.#computer.cards[0].suit) {
          alert("あなたの勝ちです");
          this.#score *= 2;
        }
        else if (this.#you.cards[0].suit > this.#computer.cards[0].suit) { 
          alert("あなたの負けです");
          this.#score = 0;
        }
      }
    }
  };
}


const game = new DubbleUp();
game.run(); 