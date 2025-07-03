
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './inde.css'

export default function App() {
  const domRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!domRef.current) return;

    // 初始化场景
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: domRef.current, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 添加控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 加载GLB模型
    const loader = new GLTFLoader();
    loader.load('/glb/1.glb', (
      gltf
    ) => {
      console.log('GLB模型加载成功:', gltf);
      scene.add(gltf.scene);
      // 调整模型位置、旋转和大小
      gltf.scene.position.set(0, -0.5, 0);
      // gltf.scene.rotation.set(0, Math.PI * 2, 0);
      gltf.scene.scale.set(1.2, 1.2, 1.2);
      // 添加坐标轴和网格辅助器帮助调试
      const axesHelper = new THREE.AxesHelper(10);
      scene.add(axesHelper);
      const gridHelper = new THREE.GridHelper(10, 10);
      scene.add(gridHelper);
    }, (xhr) => {
      // 加载进度反馈
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, (error) => {
      console.error('模型加载错误详情:', error);
      alert('模型加载失败，请检查控制台错误信息');
    });
    // 设置相机位置以确保模型可见
    camera.position.set(0, 2, 6);
    // camera.lookAt(0, 1, 0);

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 窗口大小调整
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [domRef]);

  return <canvas ref={domRef} style={{ width: '100vw', height: '100vh' }} />;
}