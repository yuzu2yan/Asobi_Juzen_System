using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Retry : MonoBehaviour
{
    string sceneName = "Play";

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Retryボタンを押したときの処理
    public void RetryButton()
    {
            SceneManager.LoadScene(sceneName);
        
    }

}
