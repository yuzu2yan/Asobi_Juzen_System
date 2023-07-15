/**********************************************
***File Name: Score.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : スコアの表示とスコアの追加処理．
**********************************************/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Score : MonoBehaviour
{
    // スコアを表示する
    public Text scoreText;
    
    // スコア
    public static int score;
    
    void Start ()
    {
        Initialize ();
    }

    void Update ()
    {    
        // スコア・ハイスコアを表示する
        scoreText.text = score.ToString ();
        
    }

    /**************************************************************************
    ***Function Name: Initialize
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : ゲーム開始時にスコアを0に戻す．
    **************************************************************************/
    private void Initialize ()
    {
        // スコアを0に戻す
        score = 0;        
    }

    /**************************************************************************
    ***Function Name: AddPoint
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : 現状のスコアにポイントを追加する．
    **************************************************************************/
    public void AddPoint (int point)
    {
        score = score + point;
    }

    
}
