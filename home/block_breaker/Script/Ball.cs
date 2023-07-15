/**********************************************
***File Name: Ball.cs
***Designer : 沖僚太
***Date     : 2023.7.8
***Purpose  : ボールの動きを制御
**********************************************/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    //ボールの移動の旗差を指定する変数
    public float speed = 5f;
    //速さの最大値を指定する変数
    public float maxSpeed = 10f;
    //速さの最小値を指定する変数
    public float minSpeed = 5f;

    Rigidbody myRigidbody;

    // Transformコンポーネントを保持しておくための変数
    Transform myTransform;

    // Start is called before the first frame update
    void Start()
    {
        //Rigidbodyにアクセスして変数に保持しておく
        myRigidbody = GetComponent<Rigidbody>();
        //右斜め45度に進む
        myRigidbody.velocity = new Vector3(speed, speed, 0f);
    }

    // Update is called once per frame
    void Update()
    {
        //現在の速度の取得
        Vector3 velocity = myRigidbody.velocity;
        //速さの計算
        float clampedSpeed = Mathf.Clamp(velocity.magnitude, minSpeed, maxSpeed);
        //速度の変更
        myRigidbody.velocity = velocity.normalized*clampedSpeed;
    }

    /**************************************************************************
    ***Function Name: OnCollisionEnter
    ***Designer     : 沖僚太
    ***Date         : 2023.7.8
    ***Function     : ボールがユーザオブジェクトに当たったときにボールを跳ね返す．
    **************************************************************************/
    void OnCollisionEnter(Collision collision)
    {
        

        // プレイヤーに当たったときに、跳ね返る方向を変える
        if (collision.gameObject.CompareTag("Player"))
        {
            // プレイヤーの位置を取得
            Vector3 playerPos = collision.transform.position;
            // ボールの位置を取得
            Vector3 ballPos = myTransform.position;
            // プレイヤーから見たボールの方向を計算
            Vector3 direction = (ballPos - playerPos).normalized;
            // 現在の速さを取得
            float speed = myRigidbody.velocity.magnitude;
            // 速度を変更
            myRigidbody.velocity = direction * speed;
        }
    }
}
