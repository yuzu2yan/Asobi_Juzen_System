/*******************************************************************
***  File Name : main.js
***  Version : V1.0
***  Designer : 幸前　譲
***  Date : 2023.06.13
***  Purpose        : ポーカーのメインフローを処理する
***
*******************************************************************/


import Utils from "./utils.js";
import Player from "./player.js";
import Computer from "./computer.js";
import Card from "./card.js";
import Pair from "./pair.js";

export default class Game {
  #you; // プレイヤー
  #computer; // コンピュータ
  #cards; // 山札のカード
  #isPlaying; // ゲーム実行状態(true:実行中, false:停止中)

  constructor() {
    // プロパティを初期化
    this.#you = null;
    this.#computer = null;
    this.#cards = [];
    this.#isPlaying = false;
    this.#addEvent(); // イベントハンドラを登録
  }

  // イベントハンドラを登録
  #addEvent() {
    // プレイヤーの手札のクリックイベントハンドラを登録
    Utils.addEventListener(".card.you", "click", this.#onClickCard.bind(this));
    // Drawボタンのクリックイベントハンドラを登録
    Utils.addEventListener("#draw", "click", this.#onClickDraw.bind(this));
    // Replayボタンのクリックイベントハンドラを登録
    Utils.addEventListener("#replay", "click", this.#onClickReplay.bind(this));
  }

  // ゲームを実行
  run() {
    this.#initialize(); // ゲームを初期化
  }

  // ゲームを初期化
  #initialize() {
    // プレイヤーを生成
    this.#you = new Player(".card.you");
    this.#computer = new Computer(".card.com");

    // 山札のカードを生成
    this.#cards = [];
    [...Array(52)].map((_, index) => {
      // インデックス番号を持つカードを生成して山札に追加
      this.#cards.push(new Card(index + 1));
    })

    // 山札をシャッフル
    this.#shuffleCards();

    // プレイヤーとコンピュータに５枚ずつカードを配る
    this.#dealCards(this.#you, 5);
    this.#dealCards(this.#computer, 5);

    // ゲームの実行状態を更新
    this.#isPlaying = true;

    // 画面の描画を更新
    this.#updateView();
  };

  // 山札をシャッフル
  #shuffleCards() {
    [...Array(100)].forEach(() => { // 十分に混ざるように100回繰り返す
      // 山札からランダムに2枚のカードを選択して交換
      const index1 = Math.floor(Math.random() * this.#cards.length);
      const index2 = Math.floor(Math.random() * this.#cards.length);
      [this.#cards[index1], this.#cards[index2]] = [this.#cards[index2], this.#cards[index1]];
    });
  };

  // プレイヤーとコンピュータに５枚ずつカードを配る
  #dealCards(player, n) {
    [...Array(n)].map(() => { // n回繰り返す
      // 山札からカードを取り出してプレイヤーに配る
      player.addCard(this.#cards.pop());
    });
  };

  // 画面の描画を更新
  #updateView() {
    // プレイヤーの手札を描画
    this.#you.displayCards(true);
    // コンピュータの手札を描画
    this.#computer.displayCards(!this.#isPlaying);
    // ボタンを描画
    if (this.#isPlaying) {
      document.querySelector("#replay").setAttribute("disabled", true);
      document.querySelector("#draw").removeAttribute("disabled");
    } else {
      document.querySelector("#replay").removeAttribute("disabled");
      document.querySelector("#draw").setAttribute("disabled", true);
    }
  };

  // プレイヤーの手札のクリックイベントハンドラ
  #onClickCard(event) {
    // ゲーム実行中のみクリックを受け付ける
    if (this.#isPlaying) {
      this.#you.selectCard(event.target); // プレイヤーにカードを選択させる
    }
  };

  // Drawボタンのクリックイベントハンドラ
  async #onClickDraw(event) {
    // プレイヤーが選択したカードを交換する
    this.#you.selectedNodes.forEach(() => {
      this.#cards.unshift(this.#you.drawCard(this.#cards.pop()));
    });

    // 画面の描画を更新
    this.#updateView();

    // ゲームの実行状態を更新
    this.#isPlaying = false;

    await Utils.sleep(1000); // 1秒待つ

    // コンピュータが交換するカードを選択する
    this.#computer.selectCard();

    await Utils.sleep(1000); // 1秒待つ

    // コンピュータが選択したカードを交換する
    this.#computer.selectedNodes.forEach(() => {
      this.#cards.unshift(this.#computer.drawCard(this.#cards.pop()));
    });

    // 画面の描画を更新
    this.#updateView();

    await Utils.sleep(1000); // 1秒待つ

    // 勝敗を判定する
    this.#judge();
  };

  // 勝敗を判定する
  #judge() {
    // 役の成否判定を行う 
    const youResult = Pair.judge(this.#you.cards);
    const computerResult = Pair.judge(this.#computer.cards);
    // 勝敗メッセージ
    let message = `(YOU)${youResult.hand}vs(COM)${computerResult.hand}\n`;
    // 勝者の判定
    if (youResult.strength < computerResult.strength) {
      message += `あなたの負けです\nもう一度挑戦しますか？`;
      if(window.confirm(message)){
        this.#initialize();
      }
      else{
        location.href = "../index.html";
      }
    } else if (youResult.strength > computerResult.strength) {
      message += `あなたの勝ちです`;
      window.alert(message);
      if(window.confirm(`ダブルアップに挑戦しますか？`)){
        location.href = "high&low.html";
      }
      else{
        if (window.confirm(`もう一度挑戦しますか？`)) {
          this.#initialize();
        }
        else {
          location.href = "../index.html";
        }
      }
    } else {
      // 役が同じ場合は、ランクの強い方を勝者とする
      if (youResult.rank < computerResult.rank) {
        message += `あなたの負けです\nもう一度挑戦しますか？`;
        if(window.confirm(message)){
          this.#initialize();
        }
        else{
          location.href = "../index.html";
        }
      } else if (youResult.rank > computerResult.rank) {
        message += `あなたの勝ちです`;
        window.alert(message);
        if(window.confirm(`ダブルアップに挑戦しますか？`)){
          location.href = "high&low.html";
        }
        else{
          if (window.confirm(`もう一度挑戦しますか？`)) {
            this.#initialize();
          }
          else {
            location.href = "../index.html";
          }
        }
      } else {
        message += `引き分けです\nもう一度挑戦しますか？`;
        if(window.confirm(message)){
          this.#initialize();
        }
        else{
          location.href = "../index.html";
        }
      }
    }
  };

  // Replayボタンのクリックイベントハンドラ
  #onClickReplay(event) {
    // ゲームを初期化
    this.#initialize();
  };
}