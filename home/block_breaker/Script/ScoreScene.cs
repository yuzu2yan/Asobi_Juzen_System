/**********************************************
***File Name: ScoreScene.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : スコア表示画面への遷移を行う処理．
**********************************************/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreScene : MonoBehaviour
{   
    private string htmlURL = "";
    public string score_t = "";
    private int score;
    private int gameId;
    private string gameId_t = "";
    
    /**************************************************************************
    ***Function Name: OnButtonPress
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : 「Score」ボタンを押したときにスコア表示画面へ遷移する．
    **************************************************************************/
    public void OnButtonPress()
    {
        score = Score.score;
        score_t = score.ToString();
        gameId = 3;
        gameId_t = gameId.ToString();
        htmlURL = "http://160.16.141.77:51280/score_display/ScoreDisp.html?gameId="+gameId_t+"&score="+score_t;
        Application.OpenURL(htmlURL);
    }
}
