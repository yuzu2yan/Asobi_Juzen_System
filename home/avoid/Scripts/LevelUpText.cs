using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

//一定時間ごとに”LEVEL UP ！！！”を表示
public class LevelUpText : MonoBehaviour
{
    private Text LevelUptext;
    public float SpeedUpSpan = 10f;
    private float CurrentTime = 0f;
    private float DisplaySpan = 3f;
    private bool isDisplayFlag = false;
    // Start is called before the first frame update
    void Start()
    {
        LevelUptext = GetComponent<Text>();
        LevelUptext.color = new Color(1f, 1f, 1f, 1f);
    }

    // Update is called once per frame
    void Update()
    {
        CurrentTime += Time.deltaTime;
        if (CurrentTime > SpeedUpSpan)
        {
            LevelUptext.text = "LEVEL UP!!!";
            isDisplayFlag = true;
            CurrentTime = 0f;
        }
        if (isDisplayFlag & (CurrentTime > DisplaySpan))
        {
            LevelUptext.text = "";
            isDisplayFlag = false;
        }
    }
}
