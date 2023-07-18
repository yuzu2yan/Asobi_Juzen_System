using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

//経過時間の表示
public class TimerManagement : MonoBehaviour
{
    public static float Timer = 0.0f;
    private float StartTime = 0.0f;
    private Text TimeText;

    // Start is called before the first frame update
    void Start()
    {
        TimeText = GetComponent<Text>();
        TimeText.color = new Color(1f, 1f, 1f, 1f);
        StartTime = Time.time;
    }

    // Update is called once per frame
    void Update()
    {
        Timer = Time.time - StartTime;
        TimeText.text = "TIME  " + Timer.ToString("F2");
    }

}