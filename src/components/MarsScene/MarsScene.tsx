import { useRef, useEffect } from "react";
import * as THREE from "three";
import MarsDiffuseMap from "../../assets/images/diffuse.jpg";
import MarsBumpMap from "../../assets/images/bump.jpg";
import Mars2K from "../../assets/images/2k_mars.jpg"

const MarsScene = () => {
const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshPhongMaterial();
  const mesh = new THREE.Mesh(geometry, material);

  const light = new THREE.DirectionalLight(0xcccccc, 1);

  camera.position.z = 3;
  light.position.set(5, 3, 5);

  material.map = new THREE.TextureLoader().load(Mars2K);
  material.bumpMap = new THREE.TextureLoader().load(MarsBumpMap);     
  material.bumpScale = 0.015;

  scene.add(mesh);
  scene.add(light);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    mesh.rotation.y -= 0.001;
  };

  if (containerRef.current) {
    containerRef.current.appendChild(renderer.domElement);
    animate();
  }
}, []);

return <div ref={containerRef} className="mars-scene"/>;
};

export default MarsScene