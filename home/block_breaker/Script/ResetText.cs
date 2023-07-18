/**********************************************
***File Name: ResetText.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : ゲーム開始時に画面上のテキストを消す．
**********************************************/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ResetText : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        //アクセスは１回きりなので，フィールド変数を用意しなくてもいい
        Text myText = GetComponent<Text>();
        //textに空の文字列を設定する
        myText.text = "";
    }

}
