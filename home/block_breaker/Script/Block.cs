/**********************************************
***File Name: Block.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : ボールがぶつかったときにブロックが消える．
　　　　　　　 点数を10点追加する．
**********************************************/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Block : MonoBehaviour
{
    private Score score; //スクリプトの参照

    void Start(){
        score = FindObjectOfType<Score>();
    }

    /**************************************************************************
    ***Function Name: OnCollisionEnter
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : ボールとブロックが衝突したときにブロックを消し，スコアを追加する．
    **************************************************************************/
    void OnCollisionEnter(Collision collision)
    {   
        

            //スコア処理を追加
            FindObjectOfType<Score>().AddPoint(10);

            //相手のタグがBallならば、自分を消す
            Destroy(this.gameObject);
        
        
       
    }
}
