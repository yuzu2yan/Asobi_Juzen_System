using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class player : MonoBehaviour
{
    private float Speed = 7.0f;
    private float MinX = -6.0f;
    private float MaxX = 6.0f;


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.position += new Vector3(Input.GetAxisRaw("Horizontal") * Time.deltaTime * Speed,0f);

        var Pos = transform.position;

        // x軸方向の移動範囲制限
        Pos.x = Mathf.Clamp(Pos.x, MinX, MaxX);

        transform.position = Pos;
    }

    private void OnCollisionEnter2D(Collision2D Collision)
    {
        if (Collision.gameObject.CompareTag("Obstacle"))
        {
            SceneManager.LoadScene("GameOverScene");
        }
    }
}
