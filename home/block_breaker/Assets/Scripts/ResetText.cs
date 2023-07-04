using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//Textコンポーネントを使用する場合に必要
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
