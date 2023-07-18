using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//一定時間ごとに障害物を生成
public class prehab_obstacle : MonoBehaviour
{
    public GameObject obstacle;
    private float CurrentTime = 0f;
    private float Span = 10.0f;
    private float Intarval = 1.0f;
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("SpawnObstacle", 0f, Intarval);
    }

    void SpawnObstacle()
    {
        Instantiate(obstacle, new Vector3(Random.Range(-6.5f, -3.0f), transform.position.y, transform.position.z), transform.rotation);
        Instantiate(obstacle, new Vector3(Random.Range(-3.0f, 3.0f), transform.position.y, transform.position.z), transform.rotation);
        Instantiate(obstacle, new Vector3(Random.Range(3.0f, 6.5f), transform.position.y, transform.position.z), transform.rotation);
    }

    // Update is called once per frame
    void Update()
    {
        CurrentTime += Time.deltaTime;
        if ((CurrentTime > Span) & (Intarval > 0.1f))
        {
            Intarval -= 0.1f;
            CancelInvoke();
            InvokeRepeating("SpawnObstacle", 0f, Intarval);
            CurrentTime = 0f;
        }
    }

}
