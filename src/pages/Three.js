import React, { useEffect } from "react";
import * as THREE from "three";
import front from "../assets/thc_oil_box_front.png";
import back from "../assets/thc_oil_box_back.png";
import side from "../assets/thc_oil_box_side.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import object from "../assets/model.json";
import { LinearFilter } from "three";
// import * as OrbitControls from "../../node_modules/three/examples/jsm/controls/OrbitControls";
export default function () {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const height = window.innerWidth;
    const width = window.innerWidth;
    // console.log(width)
    // const height = 1080;
    // const width = 1080;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      // antialias: false,
      // preserveDrawingBuffer: true,
      canvas,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    // document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.5;
    controls.maxPolarAngle = Math.PI / 2;
    const boxWidth = 2.5;
    const boxHeight = 5.5;
    const boxDepth = 2;
    const geometry = new THREE.BoxBufferGeometry(boxWidth, boxHeight, boxDepth);
    const loader = new THREE.TextureLoader();
    const frontTexture = loader.load(front);
    // frontTexture.minFilter = LinearFilter;
    frontTexture.needsUpdate = true;
    // frontTexture.anisotropy = 16;
    // frontTexture.magFilter = LinearFilter;
    // frontTexture.premultiplyAlpha = false;

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
      new THREE.MeshBasicMaterial({
        map: frontTexture,
        color: "white",
      }),
      new THREE.MeshStandardMaterial({
        map: loader.load(back),
      }),
    ];
    const m = materials[4];
    // m.depthWrite = false;
    // m.depthTest = false;
    const mesh = new THREE.Mesh(geometry, materials);
    // mesh.scale.set(2.5, 5.5, 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    camera.position.z = 11;
    camera.position.y = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(mesh);

    const floorGeometry = new THREE.PlaneGeometry(100, 100, 5);
    floorGeometry.rotateX(-Math.PI * 0.5); // this is how you can do it

    const floorMaterial = new THREE.MeshStandardMaterial({ color: "white" });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.receiveShadow = true;
    // floor.position.z = -4;
    // floor.rotation.x = -1.6;
    floor.position.y = -2.7;
    scene.add(floor);
    const color = 0xffffff;
    const intensity = 0.9;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 8, 8);
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

    // const oloader = new THREE.ObjectLoader();

    // const o = oloader.parse(object);
    // o.position.y = -2;
    // scene.add(o);
    document.addEventListener("pointerup", myOnMouseDownFunction, false);
    function myOnMouseDownFunction(evt) {
      evt.preventDefault();
      // return alert("wat");
    }
    function animate() {
      requestAnimationFrame(animate);
      //   cube.rotation.y += 0.01;
      controls.update();
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
