import * as THREE from "./build/three.module.js";

let scene, camera, renderer, pointLight;
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 500);

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

// 平行光源を追加
let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// ポイント光源を追加
pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(-200, -200, -200);
scene.add(pointLight);

// レンダリング
renderer.render(scene, camera);
