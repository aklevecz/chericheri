import React, { useEffect } from "react";
import * as THREE from "three";
import front from "../assets/thc_oil_box_front.png";
import back from "../assets/thc_oil_box_back.png";
import side from "../assets/thc_oil_box_side.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import * as OrbitControls from "../../node_modules/three/examples/jsm/controls/OrbitControls";
export default function () {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      preserveDrawingBuffer: true,
      canvas: document.getElementById("canvas"),
    });
    renderer.setSize(400, 400);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxBufferGeometry(boxWidth, boxHeight, boxDepth);
    const loader = new THREE.TextureLoader();
    const frontTexture = loader.load(front);
    frontTexture.minFilter = THREE.LinearFilter;

    const assetsPath = "../assets";
    const materials = [
      new THREE.MeshStandardMaterial({
        map: loader.load(side),
      }),
      new THREE.MeshStandardMaterial({
        map: loader.load(side),
      }),
      new THREE.MeshStandardMaterial({
        // map: loader.load(front),
        color: "white",
      }),
      new THREE.MeshStandardMaterial({
        // map: loader.load(front),
        color: "white",
      }),
      new THREE.MeshStandardMaterial({
        map: frontTexture,
        color: "white",
      }),
      new THREE.MeshStandardMaterial({
        map: loader.load(back),
      }),
    ];
    const mesh = new THREE.Mesh(geometry, materials);
    mesh.scale.set(2.5, 5.5, 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    camera.position.z = 10;
    camera.position.y = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(mesh);

    const floorGeometry = new THREE.PlaneGeometry(20, 20, 5);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: "white" });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.receiveShadow = true;
    floor.position.z = -4;
    floor.rotation.x = -1.6;
    floor.position.y = -3;
    scene.add(floor);
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 3, 8);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    //Set up shadow properties for the light
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default
    scene.add(light);
    scene.add(light.target);
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    ambientLight.intensity = 1.5;
    scene.add(ambientLight);

    function animate() {
      requestAnimationFrame(animate);
      //   cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }, []);
  return (
    <div>
      <canvas style={{ display: "block", margin: "auto" }} id="canvas"></canvas>
    </div>
  );
}
