/*************************************************************
***Designer             : 今中翔悟
***Date                 : 2023/6/13
***Purpose              : ランキングデータ呼出処理
**************************************************************/

const sendRequest = function sendRequest(gameId,callback){
  fetch(`http://160.16.141.77:51280/?game_id=${gameId}`)
    .then(response => response.json())
    .then(data => {
      // レスポンスを受け取った場合の処理
      callback(data);
    });
}
export{sendRequest}
