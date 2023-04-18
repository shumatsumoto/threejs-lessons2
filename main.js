import * as THREE from "./build/three.module.js";

let scene;
scene = new THREE.Scene();

camara = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
