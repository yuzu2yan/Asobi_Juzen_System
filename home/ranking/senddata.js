/*************************************************************
***Designer             : 今中翔悟
***Date                 : 2023/7/2
***Purpose              : ランキングデータ登録処理
**************************************************************/
/*
*** Revision :
*** V1.0 : 今中 翔悟, 2023.07.02
*** V1.1 : 今中 翔悟, 2023.07.06 フェッチ先をローカルサーバーに変更
*/
const sendData = function sendData(gameId,score){
  console.log('function called');
  fetch('http://127.0.0.1:3000',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      game_id: gameId,
      score: score
    })
  }).then(response =>{
    if(response.ok){
      alert('データの登録が成功しました');
    }
  });
}
export{sendData}