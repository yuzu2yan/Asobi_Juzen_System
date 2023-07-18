/**********************************************
***File Name: Player.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : ユーザが動かすオブジェクトの制御．
**********************************************/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    //プレイヤーの移動の速さ
    public float speed = 10f;
    Rigidbody myRigidbody;

    // Start is called before the first frame update
    void Start()
    {
        //Rigidbodyにアクセスして変数に保持
        myRigidbody = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
        //左右のキー入力により速度を変更する
        myRigidbody.velocity = new Vector3(Input.GetAxis("Horizontal")*speed, 0f, 0f);
    }
}
