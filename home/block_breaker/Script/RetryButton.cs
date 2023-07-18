
/**********************************************
***File Name: RetryButton.cs
***Module   : 9 リトライ処理
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : リセットボタンを押したときの制御
**********************************************/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RetryButton : MonoBehaviour
{
   /**************************************************************************
    ***Function Name: OnClickStartButton
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : 「Retry」ボタンを押したときに再びゲーム画面へ遷移する．
    **************************************************************************/
   public void OnClickStartButton()
   {
    SceneManager.LoadScene("Play");
   }
}
