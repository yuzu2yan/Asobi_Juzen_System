/*******************************************************************
***  File Name : main.js
***  Version : V1.0
***  Designer : 幸前　譲
***  Date : 2023.06.13
***  Purpose        : ゲーム選択画面におけるカバーフローの処理を行う
***  Module    : 1 ゲーム選択UI処理
*******************************************************************/


import * as THREE from "three";

/** 背景画像 */
const URL_BG = "./imgs/bg.jpg";

/** 平面の横幅 */
const ITEM_W = 256;
/** スライドの個数 */
const MAX_SLIDE = 3;
/** 平面の縦幅 */
const ITEM_H = 256;
/** 現在のスライドID */
let currentPage = 0;
/** 平面のX座標の間隔 */
const MARGIN_X = 80;

/**
 * 平面を格納する配列
 * @type {Card[]}
 */
const cards = [];

// 3D空間を作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(30);
scene.add(camera);

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);

// エレメントを追加
document.body.appendChild(renderer.domElement);

// インプット要素の制御
const elementInput = document.querySelector("input#rangeSlider");
elementInput.addEventListener("input", onInputChange);

// マウスホイール対応
window.addEventListener(
  "wheel",
  (event) => {
    elementInput.valueAsNumber += event.deltaY * 0.0005;
    onInputChange();
    event.preventDefault();
  },
  { passive: false }
);

/****************************************************************************
*** Function Name : init()
*** Designer : 幸前　譲
*** Date : 2023.7.18
*** Function : カバーフローの初期化を行う。
*** Return : なし
****************************************************************************/

function init() {
  // ライト
  const pointLight = new THREE.PointLight(0xffffff, 4, 1000);
  pointLight.position.set(0, 0, 500);
  scene.add(pointLight);

  // Planeの作成
  for (let i = 0; i < MAX_SLIDE; i++) {
    // カード
    const card = new Card(i);

    // カードのクリックイベントの追加
    card.onClick = function () {
      onMouseClick(i);
    };

    // 3Dシーンに追加
    scene.add(card);

    // 配列に参照の保存
    cards[i] = card;
  }

  renderer.domElement.addEventListener("click", onCardClick);

  //  カメラの位置
  camera.position.z = 900;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // 背景の生成
  const meshBg = new THREE.Mesh(
    new THREE.PlaneGeometry(3000, 1000),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(URL_BG),
    })
  );
  meshBg.position.z = -500;
  scene.add(meshBg);

  // 初期のページ表示
  moveSlide(MAX_SLIDE / 2);

  // リサイズ制御
  window.addEventListener("resize", onResize);
  onResize(); // サイズをウインドウにフィットさせる
  // レンダリング

  tick();
}

/****************************************************************************
*** Function Name : onInputChange()
*** Designer : 幸前　譲
*** Date : 2023.7.18
*** Function : スクロールが動いた時のイベント
*** Return : なし
****************************************************************************/

function onInputChange() {
  const val = elementInput.valueAsNumber;
  // スクロールバーの値からページIDの計算
  const nextId = Math.round(val * (MAX_SLIDE - 1));
  // ページ遷移
  moveSlide(nextId);
}

/****************************************************************************
*** Function Name : moveSlide()
*** Designer : 幸前　譲
*** Date : 2023.7.18
*** Function : スライドを移動する。
@params id {number} スライドのID
*** Return : なし
****************************************************************************/

function moveSlide(id) {
  // 遷移先が現在のスライド番号と同じであれば処理を終了
  if (currentPage === id) {
    return;
  }

  for (let i = 0; i < MAX_SLIDE; i++) {
    // 移動値を初期化
    let targetX = MARGIN_X * (i - id); // X座標の計算
    let targetZ = 0;
    let targetRot = 0;

    // 中央のスライド画像より左側のもの
    if (i < id) {
      targetX -= ITEM_W * 0.6; // 余白分ずらす
      targetZ = ITEM_W; // 奥側へ配置
      targetRot = +45 * (Math.PI / 180);
    }
    // 中央のスライド画像より右側のもの
    else if (i > id) {
      targetX += ITEM_W * 0.6; // 余白分ずらす
      targetZ = ITEM_W; // 奥側へ配置
      targetRot = -45 * (Math.PI / 180);
    }
    // 中央のスライド画像
    else {
      targetX = 0;
      targetZ = 0;
      targetRot = 0;
    }

    // 対象のカードの参照
    const card = cards[i];

    // 配置座標を指定
    gsap.to(card.position, {
      x: targetX,
      z: -1 * targetZ,
      duration: 1.8, // 1.8秒かけて移動
      ease: "expo.out", // 強めのイージングを指定
      overwrite: true, // 上書き許可
    });

    // 角度を動かす
    gsap.to(card.rotation, {
      y: targetRot,
      duration: 0.9, // 0.9秒かけて移動
      ease: "expo.out", // 強めのイージングを指定
      overwrite: true, // 上書き許可
    });
  }

  currentPage = id;
}

/****************************************************************************
*** Function Name : onResize()
*** Designer : 幸前　譲
*** Date : 2023.7.18
*** Function : レイアウト処理(リサイズ対応も兼ねる)。
*** Return : なし
****************************************************************************/

function onResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

/****************************************************************************
*** Function Name : tick()
*** Designer : 幸前　譲
*** Date : 2023.7.18
*** Function : エンターフレームイベント。
*** Return : なし
****************************************************************************/
function tick() {
  // レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

/**
 * カバーフローのカード
 */
class Card extends THREE.Object3D {
  /**
   * @param index {number}
   */
  constructor(index) {
    super();

    const texture = new THREE.TextureLoader().load("./imgs/" + index + ".jpg");

    // 上面

    // マテリアルの作成
    const material = new THREE.MeshLambertMaterial({
      map: texture,
    });

    const planeTop = new THREE.Mesh(
      new THREE.PlaneGeometry(ITEM_W, ITEM_H),
      material
    );
      
    this.add(planeTop);

    // 反射面
    const materialOpt = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true,
      side: THREE.BackSide,
    });
    materialOpt.opacity = 0.2;
    const planeBottom = new THREE.Mesh(
      new THREE.PlaneGeometry(ITEM_W, ITEM_H),
      materialOpt
    );
    planeBottom.rotation.y = 180 * (Math.PI / 180);
    planeBottom.rotation.z = 180 * (Math.PI / 180);
    planeBottom.position.y = -ITEM_H - 1;
    this.add(planeBottom);
  }
}

// コードを実行

init();

/****************************************************************************
*** Function Name : onMouseClick()
*** Designer : 幸前　譲
*** Date : 2023.7.18
*** Function : カードのクリックイベントハンドラ関数を定義。
*** Return : なし
****************************************************************************/

function onMouseClick(cardIndex) {
  switch (cardIndex) {
    case 0:
      window.location.href = './poker/poker.html';
      break;
    case 1:
      window.location.href = './avoid/AvoidGame.html';//避けるゲームへのパス
      break;
    case 2:
      window.location.href = './block_breaker/Build/block_breaker.html';//ブロック崩しのパス
      break;
    default:
      console.log('default');
      break;
  }
}


/****************************************************************************
*** Function Name : onCardClick()
*** Designer : 幸前　譲
*** Date : 2023.7.18
*** Function : マウスクリックのイベントハンドラ関数。
*** Return : なし
****************************************************************************/

function onCardClick(event) {
  // マウスクリック位置の座標を取得
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // レイキャストを作成
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // レイキャストを実行してクリックされたオブジェクトを取得
  const intersects = raycaster.intersectObjects(cards, true);

  if (intersects.length > 0) {
    // クリックされたカードの処理を実行
    const clickedCard = intersects[0].object.parent;
    clickedCard.onClick(); // カードのクリックイベントハンドラを呼び出す
  }
}

