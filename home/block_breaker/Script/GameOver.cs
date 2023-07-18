/**********************************************
***File Name: GameOver.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : ボールが下の壁に打ついて時の処理．
**********************************************/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameOver : MonoBehaviour
{
    //publicにしてInspectorから設定できるようにする
    public Text gameOverMessage;

    /**************************************************************************
    ***Function Name: OnCollisionEnter
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : ボールが下の壁と衝突したときに「GameOver」と表示し，
    　　　　　　　　　 画面を遷移させる．
    **************************************************************************/
    void OnCollisionEnter(Collision collision)
    {
        //Game Overと表示する
        gameOverMessage.text = "Game Over";
        //当たったゲームのオブジェクトを削除する
        Destroy(collision.gameObject);
        //3秒後にシーンの切り替え
        Invoke("ChangeScene", 3.0f);

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
