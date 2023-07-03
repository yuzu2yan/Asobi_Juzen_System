using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Menuselect : MonoBehaviour
{
    // GameStartボタンを押したとき
    public void StartGame()
    {
        SceneManager.LoadScene("Play");
    }

    
    public void EndGame()
    {
        Application.Quit();
    }

    // Rankingボタンを押したとき
    public void Ranking()
    {
        
    }
}
