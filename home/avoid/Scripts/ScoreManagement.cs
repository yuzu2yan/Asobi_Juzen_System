using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

//スコアの表示
public class ScoreManagement : MonoBehaviour
{
    private Text ScoreText;
    public static int Score = 0;
    public float Span = 2f;
    private float CurrentTime = 0f;

    // Start is called before the first frame update
    void Start()
    {
        ScoreText = GetComponent<Text>();
        ScoreText.color = new Color(1f, 1f, 1f, 1f);
        Score = 0;
    }

    // Update is called once per frame
    void Update()
    {
        CurrentTime += Time.deltaTime;
        if (CurrentTime > Span)
        {
            ScoreText.text = "SCORE " + Score.ToString();
            Score += 10;
            CurrentTime = 0f;
        }
    }
}
