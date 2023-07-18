/**********************************************
***File Name: GameClear.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : ブロックが全部消えた時の処理
**********************************************/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameClear : MonoBehaviour
{
    public Text gameClearMessage;
    Transform myTransform;

    void Start()
    {
        //Transformコンポーネントを保持しておく
        myTransform = transform;
    }

    void Update()
    {
        //子供がいなくなったらゲームを停止する
        if (myTransform.childCount == 0)
        {
            gameClearMessage.text = "Game Clear";
            Time.timeScale = 0f;
            //3秒後にシーンの切り替え
            Invoke("ChangeScene", 3.0f);
        }
    }

    /**************************************************************************
    ***Function Name: ChangeScene
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : 「Retry」ボタンや「Score」ボタンのある画面に遷移する．
    **************************************************************************/
    void ChangeScene()
    {
        SceneManager.LoadScene("Finish");
    }
}
