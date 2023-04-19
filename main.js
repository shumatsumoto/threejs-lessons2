import * as THREE from "./build/three.module.js";

let scene, camera, renderer;
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// レンダラー追加
renderer = new THREE.WebGLRenderer({
  alpha: true,
});
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// ジオメトリ作成
let ballGeometry = new THREE.SphereGeometry(100, 64, 32);

// マテリアル作成
let ballMaterial = new THREE.MeshPhysicalMaterial();

// メッシュ化
let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);
