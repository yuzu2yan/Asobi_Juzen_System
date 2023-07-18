/*******************************************************************
***  Component Name  : c1.4 点数表示UI処理部
***  Module Name     : M1 点数表示UI処理
**
*******************************************************************/

/*******************************************************************
***  File Name		: score_disp.js
***  Version		: V1.0
***  Designer		: 小林 丈瑠
***  Date			: 2023.06.20
***  Purpose       	: 点数を表示する，ランキング登録をする．
                      ゲーム選択画面，ランキング表示画面へ遷移させる．
***
*******************************************************************/

/*
*** Revision :
*** V1.0 : 小林 丈瑠, 2023.06.20
*** V1.1 : 小林 丈瑠, 2023.07.04 score_disp.js
*** V1.2 : 今中 翔悟, 2023.07.06 ランキング表示画面への遷移を追加
*** V1.3 : 小林 丈瑠, 2023.07.10 ゲーム選択画面への遷移を追加
*** V1.4 : 小林 丈瑠, 2023.07.10 データベースへの登録処理を追加
*** V1.5 : 小林 丈瑠, 2023.07.11 バグの修正
*/



// From. Added 小林丈瑠 2023.07.10
import {sendData} from '../ranking/senddata.js';
// To. Added 小林丈瑠 2023.07.10




/****************************************************************************
*** Function Name       : disp()
*** Designer            : 小林 丈瑠
*** Date                : 2023.7.10
*** Function            : soreを表示する．
*** Return              : なし
****************************************************************************/


// From. Changed 小林丈瑠 2023.07.10
let isSent = false;
const disp = function() {
  console.log('disp() called');
  
  // URLからクエリパラメータを取得する
  const query = location.search.substring(1).split('&');
  const gameId = query[0].split('=')[1];
  const score = query[1].split('=')[1];
  console.log('gameId=' + gameId +  '\nscore=' + score);
  //データベースへの登録
  if(!isSent){
    sendData(gameId, score);
    isSent = true;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // htmlのresultの部分に点数表示
    const result = document.getElementById("result");
    result.textContent = 'あなたの得点は' + score + '点です!!!!!';
  }, false);
=======
// From. Changed 小林丈瑠 2023.07.11
const disp = function(score) {
  console.log('disp() called');

  // htmlのresultの部分に点数表示
  const result = document.getElementById('result');
  result.textContent = 'あなたの得点は' + score + '点です!!!!!';
}
// To. Changed 小林丈瑠 2023.07.11





/****************************************************************************
*** Function Name       : rankingButtonAddEvent()
*** Designer            : 小林 丈瑠
*** Date                : 2023.7.10
*** Function            : rannkigButtonへのイベントの登録を行う．
*** Return              : なし
****************************************************************************/

// From. Changed 小林丈瑠 2023.07.11
const rankingButtonAddEvent = function(){
  console.log('rankingButtonAddEvent() called');

  const rankingButton = document.getElementById('rankingButton');
  // From. Changed 今中翔悟 2023.07.06

  // ランキング表示ボタンが押されたら，ランキング表示画面へ遷移させる．
  rankingButton.addEventListener('click', function() {
    // From. Added 小林丈瑠 2023.07.11
    console.log('rankingButton clicked');
    // To. Added 小林丈瑠 2023.07.11

    const res = confirm('ランキングを表示しますか？');
    if (res === true) {
      console.log('OK clicked');
      window.location.href = '../ranking/RankingUI.html';
      // window.location.href = "test2.html";
    } else {
      console.log('キャンセル clicked');
    }
  }, false);
}
// To. Changed 今中翔悟 2023.07.06
// To. Changed 小林丈瑠 2023.07.11





/****************************************************************************
*** Function Name       : gameSelectionButtonAddEvent()
*** Designer            : 小林 丈瑠
*** Date                : 2023.7.10
*** Function            : gameSelectionButtonへのイベントの登録を行う．
*** Return              : なし
****************************************************************************/

// From. Changed 小林丈瑠 2023.07.11
const gameSelectionButtonAddEvent = function() {
  console.log('gameSelectionButtonAddEvent() called');

  // ゲーム選択ボタンが押されたら，ゲーム選択画面へ遷移させる．
  const gameSelectionButton = document.getElementById('gameSelectionButton');
  
  gameSelectionButton.addEventListener('click', function() {

    // From. Added 小林丈瑠 2023.07.11
    console.log('gameSelectionButton clicked');
    // To. Added 小林丈瑠 2023.07.11

    const res = confirm('ゲーム選択画面へ遷移しますか？');
    if (res === true) {
      console.log('OK clicked');
      window,location.href = '../index.html';
      //window.location.href = "https://www.amazon.com";
    } else {
      console.log('キャンセル clicked');
    }
  }
  , false);
}
// To. Changed 小林丈瑠 2023.07.11





/****************************************************************************
*** Function Name       : checkRef()
*** Designer            : 小林 丈瑠
*** Date                : 2023.7.11
*** Function            : リファラ情報を確認する．
*** Return              : true リファラ情報あり
                          false リファラ情報なし
****************************************************************************/

// From. Added 小林丈瑠 2023.07.11
const checkRef = function() {
  console.log('checkRef() called');
  const ref = document.referrer; // リファラ情報
  if (ref.length === 0) {
    console.log('no ref');
    return false;
  } else {
    console.log('found ref');
    return true;
  }
}
// To. Added 小林丈瑠 2023.07.11



// From. Changed 小林丈瑠 2023.07.11
// リファラ情報があった場合実行する
if (checkRef()) {
  // URLからクエリパラメータを取得する
  const query = location.search.substring(1).split('&');  // URLのクエリパラメータの?を除いた文字列
  const gameId = query[0].split('=')[1];                  // gameID (ゲームを識別するもの)
  const score = query[1].split('=')[1];                   // score (ゲームの得点)
  console.log('gameId=' + gameId +  '\nscore=' + score);
  
  // 読み込みで表示された時にデータベースへ登録する．
  // (ブラウザの'リロード'，'進む'，'戻る'で表示された場合には実行しない)
  window.addEventListener('pageshow', function() {
    if (performance.getEntriesByType("navigation")[0].type === 'navigate') {
      // データベースへの登録
      sendData(gameId, score);
      console.log('Registration has been done.');
    } else {
      ;
    }
  }, false);
  
  disp(score);
  rankingButtonAddEvent();
  gameSelectionButtonAddEvent();

} else {
  const result = document.getElementById('result');
  result.textContent = 'Error';
}
// To. Changed 小林丈瑠 2023.07.11
