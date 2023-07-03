using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Block : MonoBehaviour
{
    //なにかとぶつかったときに呼ばれるビルトインメソッド
    void OnCollisionEnter(Collision collision){
        //スコア処理
        FindObjectOfType<Score>().AddPoint(10);

        //ゲームオブジェクトを削除するメソッド
        Destroy(gameObject);
    }
}
