/*******************************************************************
***  File Name		: score_disp.js
***  Version		: V1.0
***  Designer		: 小林 丈瑠
***  Date			: 2023.06.20
***  Purpose       	: 点数を表示する．
                      ゲーム選択画面，ランキング表示画面へ遷移させる．
***
*******************************************************************/
/*
*** Revision :
*** V1.0 : 小林 丈瑠, 2023.06.20
*** V1.1 : 小林 丈瑠, 2023.07.04 score_disp.js
*/


// htmlのresultの部分に点数表示
// From. Changed 小林丈瑠 2023.07.04
document.addEventListener("DOMContentLoaded", function() {
  const query = location.search;
  const score = query.split("=")[1];
  const result = document.getElementById("result");
  result.textContent = 'あなたの得点は' + score + '点です!!!!!';
}, false);
// To. Changed 小林丈瑠 2023.07.04


// ランキング表示ボタンが押された，ランキング表示画面へ遷移させる．
const rankingButton = document.getElementById("rankingButton");

// From. Changed 小林丈瑠 2023.07.04
rankingButton.addEventListener("click", function() {
  const res = confirm('ランキングを表示しますか？');
  if (res === true) {
    window.location.href = "https://www.google.com";
    // window.location.href = "test2.html";
  }
  else {
    ;
  }
}, false);
// To. Changed 小林丈瑠 2023.07.04


// ゲーム選択ボタンが押されたら，ゲーム選択画面へ遷移させる．
const gameSelectionButton = document.getElementById("gameSelectionButton");

// From. Changed 小林丈瑠 2023.07.04
gameSelectionButton.addEventListener("click", function() {
  const res = confirm('ゲーム選択画面へ遷移しますか？');
  if (res === true) {
    window.location.href = "https://www.amazon.com";
  }
  else {
    ;
  }
}
, false);
// To. Changed 小林丈瑠 2023.07.04

