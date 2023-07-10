/*******************************************************************
***  File Name : pair.js
***  Version : V1.0
***  Designer : 幸前　譲
***  Date : 2023.06.13
***  Purpose        : 役の判定を行う
***
*******************************************************************/
/*
*** Revision :
*** V1.0 : 幸前　譲, 2023.06.13
*/


import Utils from "./utils.js";

export default class Pair {
  static #rank = 0;
  // ロイヤルストレートフラッシュを判定
  static isRoyalStraightFlush = (cards) => {
    let isRoyal = false;
    // ５枚すべてが同じスートでランクが[10,11,12,13,14]の場合
    if (
      cards.every((card) => card.suit === cards[0].suit) && // ５枚すべてが同じスート
      cards[0].rank === 10 && // １枚目のランクが10
      cards[1].rank === 11 && // ２枚目のランクがJ
      cards[2].rank === 12 && // ３枚目のランクがQ
      cards[3].rank === 13 && // ４枚目のランクがK
      cards[4].rank === 14 // ５枚目のランクがA
    ) {
      isRoyal = true;
      // ５枚のランクを合計
      this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isRoyal;
  };

  // ストレートフラッシュを判定
  static isStraightFlush = (cards) => {
    let isStraight = false;
    // ５枚すべてが同じスートでランクが連続している場合
    if (
      cards.every((card) => card.suit === cards[0].suit) && // ５枚すべてが同じスート
      cards[0].rank + 1 === cards[1].rank && // １枚目と２枚目のランクが連続
      cards[1].rank + 1 === cards[2].rank && // ２枚目と３枚目のランクが連続
      cards[2].rank + 1 === cards[3].rank && // ３枚目と４枚目のランクが連続
      cards[3].rank + 1 === cards[4].rank // ４枚目と５枚目のランクが連続
    ) {
      isStraight = true;
      // ５枚のランクを合計
      this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isStraight;
  };

  // フォーカードを判定
  static isFourCard = (cards) => {
    let isFourCard = false;
    // ５枚のうち４枚のランクが同じ場合
    if (
      cards[0].rank === cards[1].rank && cards[0].rank === cards[2].rank && cards[0].rank === cards[3].rank // １枚目から４枚目のランクが同じ
    ) {
      isFourCard = true;
      // ４枚のランクを合計
      this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank);
    }
    else if (
      cards[1].rank === cards[2].rank && cards[1].rank === cards[3].rank && cards[1].rank === cards[4].rank // ２枚目から５枚目のランクが同じ
    ) {
      isFourCard = true;
      // ４枚のランクを合計
      this.#rank = Utils.sum(cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isFourCard;
  };

  // フルハウスを判定
  static isFullHouse = (cards) => {
    let isFullHouse = false;
    // ５枚のうち３枚のランクが同じ場合
    if (
      cards[0].rank === cards[1].rank && cards[0].rank === cards[2].rank // １枚目から３枚目のランクが同じ
    ) {
      // 残りの２枚のランクが同じ場合
      if (cards[3].rank === cards[4].rank) {
        isFullHouse = true;
        // ５枚のランクを合計
        this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
      }
    }
    else if (
      cards[2].rank === cards[3].rank && cards[2].rank === cards[4].rank // ３枚目から５枚目のランクが同じ
    ) {
      // 残りの２枚のランクが同じ場合
      if (cards[0].rank === cards[1].rank) {
        isFullHouse = true;
        // ５枚のランクを合計
        this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
      }
    }
    return isFullHouse;
  };

  // フラッシュを判定
  static isFlush = (cards) => {
    let isFlush = false;
    // ５枚すべてが同じスートの場合
    if (cards.every((card) => card.suit === cards[0].suit)) {
      isFlush = true;
      // ５枚のランクを合計
      this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isFlush;
  };

  // ストレートを判定
  static isStraight = (cards) => {
    let isStraight = false;
    // ５枚のランクが連続している場合
    if (
      cards[0].rank + 1 === cards[1].rank && // １枚目と２枚目のランクが連続
      cards[1].rank + 1 === cards[2].rank && // ２枚目と３枚目のランクが連続
      cards[2].rank + 1 === cards[3].rank && // ３枚目と４枚目のランクが連続
      cards[3].rank + 1 === cards[4].rank // ４枚目と５枚目のランクが連続
    ) {
      isStraight = true;
      // ５枚のランクを合計
      this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isStraight;
  };

  // スリーカードを判定
  static isThreeCard = (cards) => {
    let isThreeCard = false;
    // ５枚のうち３枚のランクが同じ場合
    if (
      cards[0].rank === cards[1].rank && cards[0].rank === cards[2].rank // １枚目から３枚目のランクが同じ
    ) {
      isThreeCard = true;
      // ３枚のランクを合計
      this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank);
    }
    else if (
      cards[1].rank === cards[2].rank && cards[1].rank === cards[3].rank // ２枚目から４枚目のランクが同じ
    ) {
      isThreeCard = true;
      // ３枚のランクを合計
      this.#rank = Utils.sum(cards[1].rank, cards[2].rank, cards[3].rank);
    }
    else if (
      cards[2].rank === cards[3].rank && cards[2].rank === cards[4].rank // ３枚目から５枚目のランクが同じ
    ) {
      isThreeCard = true;
      // ３枚のランクを合計
      this.#rank = Utils.sum(cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isThreeCard;
  };

  // ツーペアを判定
  static isTwoPair = (cards) => {
    let isTwoPair = false;
    // １枚目と２枚目のランクが同じ場合
    if (cards[0].rank === cards[1].rank) {
      // ３枚目と４枚目のランクが同じ場合
      if (cards[2].rank === cards[3].rank) {
        isTwoPair = true;
        // ４枚のランクを合計
        this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank);
      }
      // ４枚目と５枚目のランクが同じ場合
      else if (cards[3].rank === cards[4].rank) {
        isTwoPair = true;
        // ４枚のランクを合計
        this.#rank = Utils.sum(cards[0].rank, cards[1].rank, cards[3].rank, cards[4].rank);
      }
    }
    // ２枚目と３枚目のランクが同じ場合
    else if (cards[1].rank === cards[2].rank) {
      // ４枚目と５枚目のランクが同じ場合
      if (cards[3].rank === cards[4].rank) {
        isTwoPair = true;
        // ４枚のランクを合計
        this.#rank = Utils.sum(cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
      }
    }
    return isTwoPair;
  };

  // ワンペアを判定
  static isOnePair = (cards) => {
    let isOnePair = false;
    // １枚目と２枚目のランクが同じ場合
    if (cards[0].rank === cards[1].rank) {
      isOnePair = true;
      // ２枚のランクを合計
      this.#rank = Utils.sum(cards[0].rank, cards[1].rank);
    }
    // ２枚目と３枚目のランクが同じ場合
    else if (cards[1].rank === cards[2].rank) {
      isOnePair = true;
      // ２枚のランクを合計
      this.#rank = Utils.sum(cards[1].rank, cards[2].rank);
    }
    // ３枚目と４枚目のランクが同じ場合
    else if (cards[2].rank === cards[3].rank) {
      isOnePair = true;
      // ２枚のランクを合計
      this.#rank = Utils.sum(cards[2].rank, cards[3].rank);
    }
    // ４枚目と５枚目のランクが同じ場合
    else if (cards[3].rank === cards[4].rank) {
      isOnePair = true;
      // ２枚のランクを合計
      this.#rank = Utils.sum(cards[3].rank, cards[4].rank);
    }
    return isOnePair;
  };

  // 最も強い役を判定
  static judge = (cards) => {
    let StrongestHand = null;
    // カード配列のコピーを作成
    const _cards = [...cards];
    // ランクで昇順にソート
    _cards.sort((a, b) => a.rank - b.rank);
    // 役が強い順に判定
    if (this.isRoyalStraightFlush(_cards)) {
      StrongestHand = {
        strength: 9,
        rank: this.#rank,
        score: 10000,
        hand: "ロイヤルストレートフラッシュ"
      };
    }
    else if (this.isStraightFlush(_cards)) {
      StrongestHand = {
        strength: 8,
        rank: this.#rank,
        score: 2000,
        hand: "ストレートフラッシュ"
      };
    }
    else if (this.isFourCard(_cards)) {
      StrongestHand = {
        strength: 7,
        rank: this.#rank,
        score: 1000,
        hand: "フォーカード"
      };
    }
    else if (this.isFullHouse(_cards)) {
      StrongestHand = {
        strength: 6,
        rank: this.#rank,
        score: 500,
        hand: "フルハウス"
      };
    }
    else if (this.isFlush(_cards)) {
      StrongestHand = {
        strength: 5,
        rank: this.#rank,
        score: 400,
        hand: "フラッシュ"
      };
    }
    else if (this.isStraight(_cards)) {
      StrongestHand = {
        strength: 4,
        rank: this.#rank,
        score: 300,
        hand: "ストレート"
      };
    }
    else if (this.isThreeCard(_cards)) {
      StrongestHand = {
        strength: 3,
        rank: this.#rank,
        score: 200,
        hand: "スリーカード"
      };
    }
    else if (this.isTwoPair(_cards)) {
      StrongestHand = {
        strength: 2,
        rank: this.#rank,
        score: 100,
        hand: "ツーペア"
      };
    }
    else if (this.isOnePair(_cards)) {
      StrongestHand = {
        strength: 1,
        rank: this.#rank,
        score: 50,
        hand: "ワンペア"
      };
    }
    else {
      StrongestHand = {
        strength: 0,
        rank: 0,
        score: 0,
        hand: "役無し"
      };
    }
    return StrongestHand;
  };
}