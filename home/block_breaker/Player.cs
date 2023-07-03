using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    //?¿½v?¿½?¿½?¿½C?¿½?¿½?¿½[?¿½ÌˆÚ“ï¿½?¿½Ì‘ï¿½?¿½?¿½
    public float speed = 12f;
    Rigidbody myRigidbody;

    // Start is called before the first frame update
    void Start()
    {
        //Rigidbody?¿½ÉƒA?¿½N?¿½Z?¿½X?¿½?¿½?¿½Ä•Ïï¿½?¿½É•Ûï¿½
        myRigidbody = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
        //?¿½?¿½?¿½E?¿½ÌƒL?¿½[?¿½?¿½?¿½Í‚É‚ï¿½è‘¬?¿½x?¿½?¿½ÏX?¿½?¿½?¿½?¿½
        myRigidbody.velocity = new Vector3(Input.GetAxis("Horizontal") * speed, 0f, 0f);
    }
}
