using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

//スコア表示画面に遷移
public class Back_Button : MonoBehaviour
{
    private int Score = ScoreManagement.Score;
    private int gameId = 2;

    public void onClick()
    {
        Application.OpenURL("../score_display/ScoreDisp.html?gameId=" + gameId + "&result=" + Score.ToString());
    }
}
