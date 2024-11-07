

import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// 
const Home = () => {
  const mountRef = useRef(null);
// 
  useEffect(() => {
    const currentMount = mountRef.current; 
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // White background
    // 
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
// 
    camera.position.set(0, 2, 10);
    camera.lookAt(0, 0, 0);
// 
    // Add ambient and directional light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); 
    scene.add(ambientLight);
// 
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
// 
    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(
      '/models/model.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); 
        model.position.set(0, 0, 0); 
        model.rotation.y = Math.PI / 2;
        // 
// 
        scene.add(model);
// 
        // Log bounding box to verify position
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        console.log("Model bounding box:", box);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log('An error occurred while loading the model:', error);
      }
    );
// 
    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
// 
    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
// 
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
// 
    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);
// 
  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};
// 
export default Home;
