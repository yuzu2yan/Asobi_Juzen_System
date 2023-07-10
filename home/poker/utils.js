/*******************************************************************
***  File Name : utils.js
***  Version : V1.0
***  Designer : 幸前　譲
***  Date : 2023.06.13
***  Purpose        : 他クラスから使いまわす関数を定義
***
*******************************************************************/
/*
*** Revision :
*** V1.0 : 幸前　譲, 2023.06.13
*/


export default class Util {
  /*
  指定した時間だけ待つ(未指定の場合は1秒)
  手札と山札を交換するときに使う(一瞬だと何が起こったかわからないので)
  */
  static sleep = (wait = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), wait)
    });
  };

  /*
  イベントハンドラの登録用(手札やボタンをクリックしたとき)
  */
  static addEventListener = (selector, event, handler) => {
    document.querySelectorAll(selector).forEach((e) => e.addEventListener(event, handler));
  }

  /*
  役を構成するカードのランク(数字)を合計
  */
  static sum = (...numbers) => {
    let sum = 0;
    numbers.forEach((e) => {
      sum += e;
    });
    return sum;
  }
}