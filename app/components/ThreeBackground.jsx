"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    container.appendChild(renderer.domElement);

    // Mouse
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particles
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 16;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i3] = (Math.random() - 0.5) * 0.012;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.012;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.008;

      // Varied sizes - bigger "nodes"
      sizes[i] = Math.random() * 0.035 + (Math.random() > 0.85 ? 0.055 : 0.018);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Enhanced Glow Material
    const createGlowTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");

      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(100, 220, 255, 1)");
      grad.addColorStop(0.3, "rgba(80, 180, 255, 0.6)");
      grad.addColorStop(0.7, "rgba(60, 140, 255, 0.08)");
      grad.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const pointsMaterial = new THREE.PointsMaterial({
      color: "#67e8f9",
      size: 0.045,
      map: createGlowTexture(),
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false,
    });

    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // Connection Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#22d3ee",
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });

    let lineGeometry = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const maxConnectionDistance = 3.2;

    // Resize Handler
    const resize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", resize);

    let animationFrameId;

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const posArray = geometry.attributes.position.array;

      // Update particles
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        posArray[i3] += velocities[i3];
        posArray[i3 + 1] += velocities[i3 + 1];
        posArray[i3 + 2] += velocities[i3 + 2];

        // Bounce off walls
        for (let axis = 0; axis < 3; axis++) {
          const limit = axis === 2 ? 5.5 : 7.5;
          if (Math.abs(posArray[i3 + axis]) > limit) {
            velocities[i3 + axis] *= -0.98;
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Gentle rotation
      points.rotation.y += 0.00012;

      // Smooth mouse parallax
      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.018;
      camera.position.y += (-mouse.y * 0.9 - camera.position.y) * 0.018;
      camera.lookAt(0, 0, 0);

      // Update connections
      const linePositions = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const i3 = i * 3;
          const j3 = j * 3;

          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];

          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.6;
            lineMaterial.opacity = Math.max(0.08, alpha);

            linePositions.push(
              posArray[i3], posArray[i3 + 1], posArray[i3 + 2],
              posArray[j3], posArray[j3 + 1], posArray[j3 + 2]
            );
          }
        }
      }

      lineGeometry.dispose();
      lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      lines.geometry = lineGeometry;

      renderer.render(scene, camera);
    };

    resize();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);

      lineGeometry.dispose();
      geometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden z-[-1]"
    >
      {/* Background Grid */}
      <Image
        src="/square-bg.webp"
        alt="Background Grid"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay + subtle vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-black/80" />

      {/* Three.js Container */}
      <div ref={mountRef} className="absolute inset-0" />
    </div>
  );
}