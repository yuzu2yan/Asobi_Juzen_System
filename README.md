# アソビ十全システム
![](https://img.shields.io/badge/version-1.0-blue)
![](https://img.shields.io/badge/release_date-july_2023-yellow)
![](https://img.shields.io/badge/ubuntu-v20.04.6-blue)
![](https://img.shields.io/badge/-Unity-000000.svg?logo=unity&style=popout)
![](https://img.shields.io/badge/nodejs-v14.21.3-blue)
![](https://img.shields.io/badge/threejs-v0.151.3-blue)
![](https://img.shields.io/badge/gsap-v3.11.5-blue)

避けるゲーム，ブロック崩し，ポーカーが遊べるWebアプリケーションプラットフォームです．  
各ゲームにおいて，スコアのランキングも登録できます．  

URL：http://160.16.141.77:51280/  
対応ブラウザ(PC版のみ)：IE，FireFox，Chrome  
## 遊び方
### 遊びたいゲームを選択する

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/e0afd83c-b67c-423e-bc1a-a7de5e7d07b9" width="650px">

下のスクロールバーをスライドしてカバーフローを動かし，遊びたいゲームのカバーフローをクリック！  
ランキングを確認したいときは，右上の「点数表示画面へ」ボタンをクリック！  
### ポーカーの遊び方
**役の配当**  
| 役名 | スコア |
|:-----------|------------:|
| ロイヤルストレートフレッシュ       | 10000        | 
| ストレートフラッシュ              | 2000      | 
| フォーカード                      | 1000      |
| フルハウス                       | 500       | 
| フラッシュ                        | 400      | 
| ストレート                         | 300     |
| スリーカード                        | 200     |
| ツーペア                         | 100     |
| ワンペア                         | 50     |

**役の強さ**  
ランク(数字)：2<3<4<5<6<7<8<9<10<J<Q<K<A  
スート(絵柄)：クローバー♧ < ダイヤ♢ < ハート♡ < スペード♤  

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/50f77cd6-46d4-46b3-a875-f78597ae7559" width="650px">

交換したいカードをクリックしてください．クリックすると，上のようにスライドします．  
交換するカードを選択したら，Drawボタンをクリック！  

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/2dce24c5-b341-4c70-8806-8ae46e99f14b" width="650px">

Drawボタンを押すと，相手と勝負になり，勝敗が表示されます．  
勝利すると，スコアが表示され，ダブルアップチャンスを獲得！  
ダブルアップチャンスでは，High＆Lowゲームを行い，成功するとスコアが倍になり，失敗すると０になります．  

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/42669ed9-043b-4465-bed8-ea40853b3415" width="650px">

ダブルアップチャンスでは，表向きのカードと裏向きのカードが一枚ずつ配られ，High＆Lowゲームを行います．  
表のカードよりも裏向きのカードが強いか弱いかを推測し，HighかLowのボタンを押します．  

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/3d789e6a-c78b-4a08-81d5-43a5b0377c73" width="650px">

ダブルアップに成功すると，スコアが倍になります！！ダブルアップチャンスは，失敗するか，終了するまで続けることができます．  
ゲーム終了時の最終的なスコアをランキングに登録します(スコアが０の場合はホーム画面に移行します)．  

### 避けるゲームの遊び方
<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/f1c2843a-1afc-4a08-a7e8-e1584497fdcc" width="650px">

十字キーまたはADキーで左右に動かし，障害物をよけていきます．  
2秒経つごとに，スコアが10加算されます！  

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/10abbdd5-b99d-4bf6-8504-3e813fdd3dd8" width="650px">

10秒経つごとにレベルアップし，障害物が生成される間隔が早くなっていきます．  

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/a0a23196-e711-48cd-916c-8dc7cf458c3a"  width="650px">  

障害物にぶつかると「GAME OVER」と表示され，その時点でのスコアをランキングに登録できます．  

### ブロック崩しの遊び方
<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/c762a32b-7ac6-4d1f-ae4f-84f79880b967" width="650px">

十字キーまたはADキーで左右に動かし，球を跳ね返しながらブロックを崩していきます．  
１つブロックを崩すごとにスコアが10加算されます！  

<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/dd70e627-8cc1-4045-ab5b-f62862e8a156" width="650px">

ブロックをすべて崩すと，「Game Clear」と表示され，球を跳ね返せなかった場合は「Game Over」となります．  
ゲーム終了時の最終的なスコアをランキングに登録します．  

### スコアを確認する
<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/aefb6ec1-145c-45d0-a9a0-73641caf1cb6" width="650px">

各ゲーム終了後にスコア確認画面に移行し，自動でランキングにスコアが登録されます．  
「ランキング表示」ボタンでランキング表示画面に，「ゲーム選択画面」ボタンでホーム画面に遷移します．  

### ランキングを表示する
<img src="https://github.com/Yuzudayo/Asobi_Juzen_System/assets/89567103/30bf1cec-c92a-459b-8888-a888de049ebd" width="650px">

ランキング表示画面では，各ゲームのスコアランキングを確認できます！  
上部のセレクトボックスからゲームを選択すると，そのゲームのスコアが降順で表示されます．  
セレクトボックスの「メニューに戻る」を選択すると，ホーム画面に戻れます．  

  
### トラブルシューティング    
動作に問題があった場合，以下の対処方法をお試しください．  
- ブラウザのキャッシュを消去
- ブラウザを変更，最新版にアップロード
- ブラウザの設定で，ポップアップの表示を許可する

上記の対処法で解決しない場合は，お手数ですが，ご連絡ください．
