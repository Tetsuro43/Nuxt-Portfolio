<template>
  <div class="page">
    <canvas ref="experience" />
  </div>
</template>
<script setup lang="ts">
import { Scene, PerspectiveCamera, Mesh, SphereGeometry, MeshBasicMaterial, WebGLRenderer } from 'three';
import * as THREE from 'three';

let renderer: WebGLRenderer;
const experience: Ref<HTMLCanvasElement | null> = ref(null);
/**
 * Scene
 * シーンとは3D空間のこと 3Dオブジェクトや光源などの置き場となる
 */
const scene = new Scene();

/**
 * Camera
 * 3Dではどの視点から空間を撮影するか、という実装を行う この機能は「視点」や「カメラ」と呼ばれる
 * THREE.PerspectiveCameraクラスのコンストラクターで画角、アスペクト比、描画開始距離、描画終了距離の4つの情報を引数として渡しカメラを作成
 */
// new THREE.PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)
// const width = 800;
// const height = 600;
// アスペクト比は要素の幅を高さで割ったもの
// 　const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
　const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// シーンにカメラを追加
scene.add(camera);

/**
 * Mesh 立方体を作る
 * 立方体はメッシュという表示オブジェクトを使用して作成します。
 * メッシュを作るには、ジオメトリ（形状）とマテリアル（素材）の二種類を用意する必要があります。
 * ジオメトリとは頂点情報や面情報を持っています。Three.jsにはさまざまなジオメトリが用意されています。
 */
// 形状を表すジオメトリ
const geometry = new SphereGeometry(1, 32, 32);
 // 色をつけるためのマテリアル
const material = new MeshBasicMaterial({ color: 0x00ff00 });
// メッシュとは、ジオメトリを受け取り、それにマテリアルを適用するオブジェクトのこと
const sphere = new Mesh(geometry, material);
// カメラの位置をズラす set(x, y, z)
camera.position.set(0, 0, 2);
// シーンに球体を追加
scene.add(sphere);

function setRender() {
  if(experience.value) {
    /**
     * Renderer
     * rendererのインスタンスを作成
     * アプリを描画するサイズを設定する必要がある
     */
    renderer = new WebGLRenderer({ canvas: experience.value });
    // アプリを描画するサイズを設定
    renderer. setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
};


onMounted(() => {
  setRender();
})
</script>