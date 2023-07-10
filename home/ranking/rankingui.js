/*************************************************************
***Designer             : 今中翔悟
***Date                 : 2023/6/13
***Purpose              : ランキング表示UI処理
**************************************************************/

window.addEventListener('load',function() {
  particlesJS('particles-js',
    {
      'particles': {
        //シェイプ数
        'number': {
          //要素内に表示するシェイプの数
          'value': 130,
          'density': {
            //シェイプ表示間隔設定
            'enable': true, //true:有効, false:無効
            //シェイプ表示間隔
            'value_area': 900
          }
        },
        //シェイプ色
        'color': {
          'value': ['#00bfff', '#404B69', '#DBEDF3']
        },

        //シェイプの設定
        'shape': {
          //シェイプ形
          'type': ['polygon', 'circle'], 
          //シェイプの形でpolygonを指定した場合
          'polygon': {
            //ポリゴン角数指定
            'nb_sides': 6
          },
        },

        //シェイプ透過率指定
        'opacity': {
          //透過率指定
          'value': 1,
          //ランダム設定
          'random': false, //true:有効, false:無効

          //透過アニメーション設定
          'anim': {
            //アニメーション設定
            'enable': true, //true:有効, false:無効
            //アニメーション速度
            'speed': 1,
            //アニメーション最小透過率
            'opacity_min': 0.1,
            //アニメーション同期
            'sync': false //true:有効, false:無効
          }
        },

        //シェイプサイズ
        'size': {
          //シェイプサイズ指定
          'value': 10,
          //ランダムサイズ
          'random': true, //true:有効, false:無効
          //サイズアニメーション設定
          'anim': {
            //アニメーション設定
            'enable': true, //true:有効, false:無効
            //アニメーション速度
            'speed': 20,
            //アニメーション時のシェイプ最小サイズ,
            'size_min': 0.1,
            //アニメーション同期設定
            'sync': false //true:有効, false:無効
          }
        },

        //シェイプを線で繋ぐか
        'line_linked': {
          //線の設定
          'enable': true, //true:有効, false:無効
          //線の間隔
          'distance': 150,
          //線の色
          'color': '#ffffff',
          //線の透過率
          'opacity': 0.9,
          //線の幅
          'width': 1
        },
        //シェイプの動きの設定
        'move': {
          //動きを制御するか
          'enable': true, //true:有効, false:無効
          //動く速度
          'speed': 6,
          //動く方向
          'direction': 'none', //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
          //ランダム設定
          'random': false, //true:有効, false:無効
          //静止状態にする
          'straight': false, //true:有効, false:無効
          //シェイプの動き
          'out_mode': 'bounce', //ボックス内で動かす bounce ボックス外に逃がす out
          'attract': {
            'enable': true,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',

        //マウスイベント設定
        'events': {
          //マウスオーバー時の処理
          'onhover': {
            'enable': true, //true:有効, false:無効
            'mode': 'grab' //grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:拒絶
          },

          //クリック時の処理処理
          'onclick': {
            //クリック時の処理
            'enable': true, //true:有効, false:無効
            //クリック時の処理の設定
            'mode': 'push' //push:追加, remove:削除, bubble:拡大, repulse:拒絶
          },
          'resize': true
        },
        //以下でマウスイベント発生時の詳細値を設定
        'modes': {
          'grab': {
            'distance': 200,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 1
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      //Retina Display対応
      'retina_detect': true, //true:有効, false:無効
    }
  )
});