/*******************************************************************
***  File Name : computer.js
***  Version : V1.0
***  Designer : 幸前　譲
***  Date : 2023.06.13
***  Purpose        : plyaerクラスを継承したcomputerクラスを定義する
***
*******************************************************************/
/*
*** Revision :
*** V1.0 : 幸前　譲, 2023.06.13
*/


import Pair from './pair.js';
import Player from './player.js';

export default class Computer extends Player {
  constructor(selector) {
    super(selector);
  }


  /****************************************************************************
    *** Function Name : selectCard()
    *** Designer : 幸前　譲
    *** Date : 2023.7.18
    *** Function : 交換するカードを選択。
    *** Return : なし
    ****************************************************************************/
  
  selectCard() {
    /*
    コンピュータの交換戦略
    1. 役が揃っていない場合：全てのカードを交換
    2. ワンペア or ツーペア or スリーカード：残りのカードを交換
    3. それ以外の役が揃っている場合：交換しない
    */

    // 成立している役を調べる
    const strength = Pair.judge(this.cards).strength;
    // １の場合
    if (strength === 0) {
      this.nodes.forEach((node) => super.selectCard(node));
    }
    // ２の場合
    else if (1 <= strength && strength <= 3) {
      this.cards.forEach((card, index) => {
        const sameRankCards = this.cards.filter((c) => c.rank === card.rank);
        if (sameRankCards.length === 1) { // 自分以外に同じランクのカードがない場合
          super.selectCard(this.nodes[index]); // ペアを持たないので交換
        }
      });
    }
  };
}