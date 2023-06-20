var query = location.search;
var score = query.split("=");


document.addEventListener("DOMContentLoaded", setScore(score[1]), false);

function setScore(score) {
  var result = document.getElementById("result");
  result.textContent = "あなたの得点は" + score + "点です。";
}

var rankingButton = document.getElementById("rankingButton");
rankingButton.addEventListener("click", showRankings, false);

function showRankings() {
  var res = confirm("ランキングを表示しますか？");
  if (res == true) {
    window.location.href = "https://www.google.com";
  }
  else {
    ;
  }
}

var gameSelectionButton = document.getElementById("gameSelectionButton");
gameSelectionButton.addEventListener("click", showGameSelection, false);

function showGameSelection() {
  var res = confirm("ゲーム選択画面へ遷移しますか？");
  if (res == true) {
    window.location.href = "https://www.amazon.com";
  }
  else {
    ;
  }
}


