/*************************************************************
***Designer             : 今中翔悟
***Date                 : 2023/6/13
***Purpose              : ランキングデータ呼出処理
**************************************************************/
/*
*** Revision :
*** V1.0 : 今中 翔悟, 2023.07.02
*** V1.1 : 今中 翔悟, 2023.07.06 フェッチ先をローカルサーバーに変更
*/
const sendRequest = function sendRequest(gameId,callback){
  fetch(`http://127.0.0.1:3000/?game_id=${gameId}`)
    .then(response => response.json())
    .then(data => {
      // レスポンスを受け取った場合の処理
      callback(data);
    });
}
export{sendRequest}
