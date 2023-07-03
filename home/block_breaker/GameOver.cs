using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//�ǉ�
using UnityEngine.UI;
using UnityEngine.SceneManagement;


public class GameOver : MonoBehaviour
{
    //public�ɂ���Inspector����ݒ�ł���悤�ɂ���
    public Text gameOverMessage;
    //�Q�[���I�[�o�[�������ǂ����𔻒f���邽�߂̕ϐ�
    bool isGameOver = false;

    void Update(){
        Invoke("GameOverScene", 10);
    }

    void GameOverScene(){
        if(isGameOver){
            //数秒後GameOverMenu画面への移行
            SceneManager.LoadScene("GameOverScene");
        }
    }

    //�Փˎ��ɌĂ΂��
    void OnCollisionEnter(Collision collision)
    {
        //GameOver�ƕ\������
        gameOverMessage.text = "Game Over";

        //���������Q�[���I�u�W�F�N�g���폜����
        Destroy(collision.gameObject);
        //isGameOver��true�ɂ���(�t���O�𗧂Ă�)
        isGameOver = true;
    }
}
