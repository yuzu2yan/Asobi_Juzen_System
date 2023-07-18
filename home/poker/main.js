/*******************************************************************
***  File Name : main.js
***  Version : V1.1
***  Designer : 幸前　譲
***  Date : 2023.07.10
***  Purpose        : ポーカーのメインフローを処理する
***
*******************************************************************/
/*
*** Revision :
*** V1.0 : 幸前　譲, 2023.06.13
*** V1.1 : 幸前　譲, 2023.07.10 judgeメソッドにおける遷移やスコアの処理を追加
*/

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

  /****************************************************************************
  *** Function Name : addEvent()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : イベントハンドラを登録。
  *** Return : なし
  ****************************************************************************/
  #addEvent() {
    // プレイヤーの手札のクリックイベントハンドラを登録
    Utils.addEventListener(".card.you", "click", this.#onClickCard.bind(this));
    // Drawボタンのクリックイベントハンドラを登録
    Utils.addEventListener("#draw", "click", this.#onClickDraw.bind(this));
  }

  /****************************************************************************
  *** Function Name : run()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : ゲームを実行。
  *** Return : なし
  ****************************************************************************/

  run() {
    this.#initialize(); // ゲームを初期化
  }

  /****************************************************************************
  *** Function Name : initialize()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : ゲームを初期化する際の内容。
  *** Return : なし
  ****************************************************************************/

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

  /****************************************************************************
  *** Function Name : shuffleCards()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : 山札をシャッフルする。
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
    this.#you.displayCards(true);
    // コンピュータの手札を描画
    this.#computer.displayCards(!this.#isPlaying);
    // ボタンを描画
    if (this.#isPlaying) {
      document.querySelector("#draw").removeAttribute("disabled");
    } else {
      document.querySelector("#draw").setAttribute("disabled", true);
    }
  };

  /****************************************************************************
  *** Function Name : onClickCard()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : プレイヤーの手札のクリックイベントハンドラ。
  *** Return : なし
  ****************************************************************************/

  #onClickCard(event) {
    // ゲーム実行中のみクリックを受け付ける
    if (this.#isPlaying) {
      this.#you.selectCard(event.target); // プレイヤーにカードを選択させる
    }
  };

  /****************************************************************************
  *** Function Name : onClickDraw()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : Drawボタンのクリックイベントハンドラ。
  *** Return : なし
  ****************************************************************************/

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

  /****************************************************************************
  *** Function Name : judge()
  *** Designer : 幸前　譲
  *** Date : 2023.7.18
  *** Function : 勝敗を判定する。
  *** Return : なし
  ****************************************************************************/

  #judge() {
    // 役の成否判定を行う 
    const youResult = Pair.judge(this.#you.cards);
    const computerResult = Pair.judge(this.#computer.cards);
    // 勝敗メッセージ
    let message = `あなた：${youResult.hand} vs 相手：${computerResult.hand}\n`;
    // 勝者の判定
    if (youResult.strength < computerResult.strength) {
      message += `あなたの負けです\nもう一度挑戦しますか？`;
      if (window.confirm(message)){
        this.#initialize();
      }
      else {
        location.href = "../index.html";
      }
    } else if (youResult.strength > computerResult.strength) {
      message += `あなたの勝ちです！！\n`;
      window.alert(message);
      if(window.confirm(`score : ${youResult.score}\nダブルアップに挑戦しますか？`)){
        location.href = `high&low.html?score=${youResult.score}`;
      }
      else{
          location.href = `../score_display/ScoreDisp.html?gameId=1&score=${youResult.score}`;
        }
      }
    else {
      // 役が同じ場合は、ランクの強い方を勝者とする
      if (youResult.rank < computerResult.rank) {
        message += `あなたの負けです\nもう一度挑戦しますか？`;
        if (window.confirm(message)){
          this.#initialize();
        }
        else {
          location.href = "../index.html";
        }
      } else if (youResult.rank > computerResult.rank) {
        message += `あなたの勝ちです！！`;
        window.alert(message);
        if (window.confirm(`score : ${youResult.score}\nダブルアップに挑戦しますか？`)){
          location.href = `high&low.html?score=${youResult.score}`;
        }
        else {
          location.href = `../score_display/ScoreDisp.html?gameId=1&score=${youResult.score}`;
        }
      } else {
        message += `引き分けです\nもう一度挑戦しますか？`;
        if (window.confirm(message)){
          this.#initialize();
        }
        else {
          location.href = "../index.html";
        }
      }
    }
  };

}