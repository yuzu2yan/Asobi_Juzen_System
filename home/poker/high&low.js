/*******************************************************************
***  File Name : high&low.js
***  Version : V1.1
***  Designer : 幸前　譲
***  Date : 2023.07.10
***  Purpose        : ダブルアップを処理する
***
*******************************************************************/
/*
*** Revision :
*** V1.0 : 幸前　譲, 2023.07.7
*** V1.1 : 幸前　譲, 2023.07.10 judgeメソッドにおける遷移やスコアの処理を追加
*/


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

  /****************************************************************************
  *** Function Name : addEvent()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : イベントハンドラを登録。
  *** Return : なし
  ****************************************************************************/

  #addEvent() {
    // Highボタンのクリックイベントハンドラを登録
    Utils.addEventListener("#high", "click", this.#onClickHigh.bind(this));
    // Replayボタンのクリックイベントハンドラを登録
    Utils.addEventListener("#low", "click", this.#onClickLow.bind(this));
  }

  /****************************************************************************
  *** Function Name : run()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : ゲームを実行。
  *** Return : なし
  ****************************************************************************/

  run() {
    this.#initialize();
  }

  /****************************************************************************
  *** Function Name : initialize()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : ゲームの初期化の内容。
  *** Return : なし
  ****************************************************************************/

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

  /****************************************************************************
  *** Function Name : shuffleCards()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : 山札のカードをシャッフル。
  *** Return : なし
  ****************************************************************************/

  #shuffleCards() {
    [...Array(100)].forEach(() => { // 十分に混ざるように100回繰り返す
      // 山札からランダムに2枚のカードを選択して交換
      const index1 = Math.floor(Math.random() * this.#cards.length);
      const index2 = Math.floor(Math.random() * this.#cards.length);
      [this.#cards[index1], this.#cards[index2]] = [this.#cards[index2], this.#cards[index1]];
    });
  };

  /****************************************************************************
  *** Function Name : dealCards()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : プレイヤーとコンピュータにカードを配る。
  *** Return : なし
  ****************************************************************************/

  #dealCards(player, n) {
    [...Array(n)].map(() => { // n回繰り返す
      // 山札からカードを取り出してプレイヤーに配る
      player.addCard(this.#cards.pop());
    });
  };

  /****************************************************************************
  *** Function Name : updateView()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : 画面の描画を更新。
  *** Return : なし
  ****************************************************************************/

  #updateView() {
    // プレイヤーの手札を描画
    this.#you.displayCards(!this.#isPlaying);
    // コンピュータの手札を描画
    this.#computer.displayCards(true);
  };

  /****************************************************************************
  *** Function Name : onClickHigh()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : Highボタンのクリックイベントハンドラ。
  *** Return : なし
  ****************************************************************************/

  async #onClickHigh(event) {
    this.#isPlaying = false;
    await Utils.sleep(1000);
    this.#updateView();
    await Utils.sleep(1000);
    this.#judge("High");
    await Utils.sleep(1000);
    this.#initialize();
  };

  /****************************************************************************
  *** Function Name : onClickLow()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : Lowボタンのクリックイベントハンドラ。
  *** Return : なし
  ****************************************************************************/

  async #onClickLow(event) {
    this.#isPlaying = false;
    await Utils.sleep(1000);
    this.#updateView();
    await Utils.sleep(1000);
    this.#judge("Low");
    await Utils.sleep(1000);
    this.#initialize();
  };

  /****************************************************************************
  *** Function Name : judge()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : 勝敗を判定する。
  *** Return : なし
  ****************************************************************************/

  #judge(selection) {
    // 勝者の判定
    if (selection === "High") {
      if (this.#you.cards[0].rank > this.#computer.cards[0].rank) {
        alert("ダブルアップ成功！！");
        this.#score *= 2;
        if (window.confirm(`score : ${this.#score}\n続けて挑戦しますか？`)){
        }
        else {
          location.href = `../score_display/ScoreDisp.html?gameId=1&score=${this.#score}`;
        }
      }
      else if (this.#you.cards[0].rank < this.#computer.cards[0].rank) {
        alert("ダブルアップ失敗");
          this.#score = 0;
          if (window.confirm(`もう一度ポーカーを遊びますか？`)) {
            location.href = "./poker.html";
          }
          else {
            location.href = "../index.html";
          }
      }
      else {
        if (this.#you.cards[0].suit > this.#computer.cards[0].suit) {
          alert("ダブルアップ成功！！");
          this.#score *= 2;
          if (window.confirm(`score : ${this.#score}\n続けて挑戦しますか？`)){
          }
          else{
            location.href = `../score_display/ScoreDisp.html?gameId=1&score=${this.#score}`;
          }
        }
        else if (this.#you.cards[0].suit < this.#computer.cards[0].suit) { 
          alert("ダブルアップ失敗");
          this.#score = 0;
          if (window.confirm(`もう一度ポーカーを遊びますか？`)) {
            location.href = "./poker.html";
          }
          else {
            location.href = "../index.html";
          }
        }
      }
    }
    else if (selection === "Low") {
      if (this.#you.cards[0].rank < this.#computer.cards[0].rank) {
        alert("ダブルアップ成功！！");
        this.#score *= 2;
        if(window.confirm(`score : ${this.#score}\n続けて挑戦しますか？`)){
        }
        else{
          location.href = `../score_display/ScoreDisp.html?gameId=1&score=${this.#score}`;
        }
      }
      else if (this.#you.cards[0].rank > this.#computer.cards[0].rank) {
        alert("ダブルアップ失敗");
          this.#score = 0;
          if (window.confirm(`もう一度ポーカーを遊びますか？`)) {
            location.href = "./poker.html";
          }
          else {
            location.href = "../index.html";
          }
      }
      else {
        if (this.#you.cards[0].suit < this.#computer.cards[0].suit) {
          alert("ダブルアップ成功！！");
        this.#score *= 2;
        if(window.confirm(`score : ${this.#score}\n続けて挑戦しますか？`)){
        }
        else{
          location.href = `../score_display/ScoreDisp.html?gameId=1&score=${this.#score}`;
        }
        }
        else if (this.#you.cards[0].suit > this.#computer.cards[0].suit) { 
          alert("ダブルアップ失敗");
          this.#score = 0;
          if (window.confirm(`もう一度ポーカーを遊びますか？`)) {
            location.href = "./poker.html";
          }
          else {
            location.href = "../index.html";
          }
        }
      }
    }
  };
}


const game = new DubbleUp();
game.run(); 