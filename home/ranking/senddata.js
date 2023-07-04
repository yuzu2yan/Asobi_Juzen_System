/*************************************************************
***Designer             : 今中翔悟
***Date                 : 2023/7/2
***Purpose              : ランキングデータ登録処理
**************************************************************/

const sendData = function sendData(gameId,score){
  console.log('function called');
  fetch('http://160.16.141.77:51280',{
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