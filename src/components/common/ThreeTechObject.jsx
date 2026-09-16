import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeTechObject = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x06b6d4, 4, 15);
    cyanPointLight.position.set(4, 3, 3);
    scene.add(cyanPointLight);

    const indigoPointLight = new THREE.PointLight(0x6366f1, 4.5, 15);
    indigoPointLight.position.set(-4, -3, 3);
    scene.add(indigoPointLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3, 10);
    purpleLight.position.set(0, 4, -2);
    scene.add(purpleLight);

    // 4. Main 3D Object Group
    const group = new THREE.Group();
    scene.add(group);

    // Start with scale 0 for the entrance animation
    group.scale.set(0, 0, 0);

    // Outer Torus Knot: Sleek cyber geometry
    const outerGeometry = new THREE.TorusKnotGeometry(1.2, 0.36, 120, 32, 2, 3);
    
    // Wireframe Overlay
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireframeMesh = new THREE.Mesh(outerGeometry, wireframeMaterial);
    group.add(wireframeMesh);

    // Glossy Obsidian Outer Core Shell
    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0x312e81,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85,
    });
    const shellMesh = new THREE.Mesh(outerGeometry, shellMaterial);
    group.add(shellMesh);

    // Inner Glowing Core (Floating Octahedron)
    const innerGeometry = new THREE.OctahedronGeometry(0.55, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x6366f1,
      emissiveIntensity: 1.5,
      flatShading: true,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // Floating Orbital Ring
    const ringGeometry = new THREE.TorusGeometry(2.0, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    group.add(ringMesh);

    const secondRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.015, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.45 })
    );
    secondRing.rotation.x = -Math.PI / 4;
    secondRing.rotation.y = Math.PI / 6;
    group.add(secondRing);

    // Orbital Particle Swarm
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.0 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particleSystem);

    // 5. Mouse & Touch Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = (y / rect.height) * 2;
    };

    const handleTouchMove = (event) => {
      if (!container || !event.touches || !event.touches[0]) return;
      const touch = event.touches[0];
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = touch.clientX - rect.left - rect.width / 2;
      const y = touch.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = (y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 6. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      if (newWidth === 0 || newHeight === 0) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Render Loop & Entrance Animation
    let animationFrameId;
    const clock = new THREE.Clock();
    let entranceProgress = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Scale-In & Spin Entrance Animation on load
      if (entranceProgress < 1) {
        entranceProgress += 0.018;
        // Ease out cubic
        const scale = 1 - Math.pow(1 - Math.min(entranceProgress, 1), 3);
        group.scale.set(scale, scale, scale);
        // Spin into view during entrance
        group.rotation.z = (1 - scale) * 1.5;
      } else {
        group.rotation.z = Math.sin(elapsedTime * 0.4) * 0.05;
      }

      // Base Auto Rotations
      wireframeMesh.rotation.x = elapsedTime * 0.25;
      wireframeMesh.rotation.y = elapsedTime * 0.35;
      shellMesh.rotation.x = elapsedTime * 0.25;
      shellMesh.rotation.y = elapsedTime * 0.35;

      innerMesh.rotation.x = -elapsedTime * 0.5;
      innerMesh.rotation.y = -elapsedTime * 0.4;
      innerMesh.rotation.z = elapsedTime * 0.3;

      ringMesh.rotation.z = elapsedTime * 0.15;
      secondRing.rotation.z = -elapsedTime * 0.2;

      particleSystem.rotation.y = elapsedTime * 0.1;
      particleSystem.rotation.x = elapsedTime * 0.05;

      // Subtle breathing pulse on the inner core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Smooth Mouse-Following Tilt (Lerp)
      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.6;

      group.rotation.y += (targetRotationY - group.rotation.y) * 0.06;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.06;

      // Floating vertical bobbing
      group.position.y = Math.sin(elapsedTime * 1.5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      outerGeometry.dispose();
      wireframeMaterial.dispose();
      shellMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      secondRing.geometry.dispose();
      secondRing.material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">
      {/* Subtle Ambient Behind-Glow */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute w-72 h-72 rounded-full bg-gradient-to-tr from-brand/35 via-accent-cyan/25 to-accent-emerald/15 blur-[90px] opacity-70"
      />

      {/* 3D Canvas Container */}
      <div 
        ref={mountRef} 
        className="relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center select-none" 
        title="Interactive 3D Tech Core — Move your cursor to rotate"
      />

      {/* Clean Minimal Tech Label at Bottom */}
      <div className="absolute bottom-2 flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-text-muted select-none pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        <span>WebGL 3D Core • Interactive</span>
      </div>
    </div>
  );
};
