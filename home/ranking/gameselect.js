/*************************************************************
***Designer             : 今中翔悟
***Date                 : 2023/7/2
***Purpose              : ゲーム選択処理
**************************************************************/

import { sendRequest } from './sendrequest.js';
/*****************テーブル作成用関数****************************/
/**コールバック関数として実装。リクエストしたデータをテーブルに入力して表示する */
const displayData = function displayData(data){
  console.log(data);
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  let i = 1;
  for (const row of data) {
    console.log(row);
    const tr = document.createElement('tr');
    const tdRank = document.createElement('td');
    tdRank.textContent = i;
    tr.appendChild(tdRank);
    const tdScore = document.createElement('td');
    tdScore.textContent = row.score;
    tr.appendChild(tdScore);
    console.log(tdScore);
    tbody.appendChild(tr);
    i++;
    if(i > 100){
      break;
    }
  }
}
window.addEventListener('load', function(){
/*****************ゲーム選択処理*******************************/
  console.log('selectGame function called');

  const selectGame = function selectGame(event){
    
    let Game = event.target.value;
    if(Game === 'Poker'){
      alert('ポーカーが選択されました');
      sendRequest(1,displayData);
    }else if(Game === 'Escape'){
      alert('避けるゲームが選択されました');
      sendRequest(2,displayData);
    }else if(Game === 'Block'){
      alert('ブロック崩しが選択されました');
      sendRequest(3,displayData);
    }else if(Game === 'menu'){
      location.href = '/sendTest.html';//ここにメニューのURLを入れる
    }else{
      alert('不正な値です。');
    }
  };

  let select = document.getElementById('selectGame');
  select.onchange = selectGame;
});
