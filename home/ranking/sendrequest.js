/*************************************************************
***Designer             : 今中翔悟
***Date                 : 2023/6/13
***Purpose              : ランキング呼出フェッチ処理
***Module               : C3.0 M2. ランキング呼出フェッチ処理
**************************************************************/
/*
*** Revision :
*** V1.0 : 今中 翔悟, 2023.07.02
*** V1.1 : 今中 翔悟, 2023.07.06 フェッチ先をローカルサーバーに変更
*** V1.2 : 今中 翔悟, 2023.07.09 フェッチ先を再びグローバルIPに変更
*/
const sendRequest = function sendRequest(gameId,callback){
  fetch(`http://160.16.141.77:51280/node/?game_id=${gameId}`)
    .then(response => response.json())
    .then(data => {
      // レスポンスを受け取った場合の処理
      callback(data);
    });
}
export{sendRequest}
