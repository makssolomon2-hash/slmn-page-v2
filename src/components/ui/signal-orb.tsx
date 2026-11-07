"use client";

import { useEffect, useRef, useState } from "react";

export default function SignalOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let disposed = false;
    let started = false;
    let visible = false;
    let stopScene = () => {};
    let syncScene = () => {};
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncScene();
      if (!visible || started) return;
      started = true;

      import("three").then((THREE) => {
        if (disposed) return;

        let renderer: InstanceType<typeof THREE.WebGLRenderer>;
        try {
          renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
        } catch (error) {
          console.warn("The 3D music visual is unavailable; showing the static visual instead.", error);
          return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.z = 5.2;
        const group = new THREE.Group();
        scene.add(group);

        const record = new THREE.Group();
        group.add(record);
        const discGeometry = new THREE.CylinderGeometry(1.28, 1.28, 0.055, 96);
        const discMaterial = new THREE.MeshStandardMaterial({ color: 0x14191c, metalness: 0.65, roughness: 0.32 });
        const disc = new THREE.Mesh(discGeometry, discMaterial);
        disc.rotation.x = Math.PI / 2;
        record.add(disc);

        const linePoints: number[] = [];
        for (let groove = 0; groove < 16; groove++) {
          const radius = 0.49 + groove * 0.045;
          for (let step = 0; step < 96; step++) {
            const start = step * Math.PI * 2 / 96;
            const end = (step + 1) * Math.PI * 2 / 96;
            linePoints.push(Math.cos(start) * radius, Math.sin(start) * radius, 0.03);
            linePoints.push(Math.cos(end) * radius, Math.sin(end) * radius, 0.03);
          }
        }
        for (let step = 0; step < 72; step++) {
          const angle = step * Math.PI * 2 / 72;
          const length = 0.03 + ((step * 13) % 7) * 0.012;
          linePoints.push(Math.cos(angle) * 1.34, Math.sin(angle) * 1.34, 0);
          linePoints.push(Math.cos(angle) * (1.34 + length), Math.sin(angle) * (1.34 + length), 0);
        }
        const grooveGeometry = new THREE.BufferGeometry();
        grooveGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePoints, 3));
        const grooveMaterial = new THREE.LineBasicMaterial({ color: 0x73c7d4, transparent: true, opacity: 0.42 });
        record.add(new THREE.LineSegments(grooveGeometry, grooveMaterial));

        const labelGeometry = new THREE.CircleGeometry(0.37, 64);
        const labelMaterial = new THREE.MeshStandardMaterial({ color: 0x00aec7, metalness: 0.25, roughness: 0.55 });
        const label = new THREE.Mesh(labelGeometry, labelMaterial);
        label.position.z = 0.032;
        record.add(label);
        const spindleGeometry = new THREE.CircleGeometry(0.035, 32);
        const spindleMaterial = new THREE.MeshBasicMaterial({ color: 0x071115 });
        const spindle = new THREE.Mesh(spindleGeometry, spindleMaterial);
        spindle.position.z = 0.034;
        record.add(spindle);
        const markerGeometry = new THREE.PlaneGeometry(0.13, 0.025);
        const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xd9fbff });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.set(0.2, 0.1, 0.035);
        record.add(marker);

        scene.add(new THREE.AmbientLight(0xd1f8ff, 1.5));
        const light = new THREE.PointLight(0x00d9ff, 28, 12);
        light.position.set(-2, 3, 4);
        scene.add(light);

        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let frame = 0;
        let previousTime = 0;
        group.rotation.set(0.3, -0.45, -0.15);

        const resize = () => {
          const { width, height } = container.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        };
        const tick = (time: number) => {
          const delta = previousTime ? Math.min(time - previousTime, 50) : 0;
          previousTime = time;
          record.rotation.z += delta * 0.00035;
          renderer.render(scene, camera);
          frame = window.requestAnimationFrame(tick);
        };
        syncScene = () => {
          window.cancelAnimationFrame(frame);
          previousTime = 0;
          if (!visible || document.visibilityState !== "visible") return;
          if (motion.matches) renderer.render(scene, camera);
          else frame = window.requestAnimationFrame(tick);
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        motion.addEventListener("change", syncScene);
        document.addEventListener("visibilitychange", syncScene);
        resize();
        syncScene();
        setReady(true);

        stopScene = () => {
          window.cancelAnimationFrame(frame);
          resizeObserver.disconnect();
          motion.removeEventListener("change", syncScene);
          document.removeEventListener("visibilitychange", syncScene);
          discGeometry.dispose();
          discMaterial.dispose();
          grooveGeometry.dispose();
          grooveMaterial.dispose();
          labelGeometry.dispose();
          labelMaterial.dispose();
          spindleGeometry.dispose();
          spindleMaterial.dispose();
          markerGeometry.dispose();
          markerMaterial.dispose();
          renderer.dispose();
        };
      }).catch((error: unknown) => {
        console.warn("The 3D music visual could not be loaded; showing the static visual instead.", error);
      });
    }, { rootMargin: "200px" });
    observer.observe(container);

    return () => {
      disposed = true;
      observer.disconnect();
      stopScene();
    };
  }, []);

  return (
    <div aria-hidden="true" className="relative aspect-square w-full max-w-[280px] justify-self-center" ref={containerRef}>
      <svg className={`absolute inset-0 size-full text-cyan-300/30 transition-opacity ${ready ? "opacity-0" : "opacity-100"}`} fill="none" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="72" fill="#101819" stroke="currentColor" />
        <circle cx="100" cy="100" r="58" stroke="currentColor" />
        <circle cx="100" cy="100" r="48" stroke="currentColor" />
        <circle cx="100" cy="100" r="38" stroke="currentColor" />
        <circle cx="100" cy="100" r="21" fill="currentColor" />
        <circle cx="100" cy="100" r="3" fill="#071115" />
      </svg>
      <canvas className={`relative size-full transition-opacity ${ready ? "opacity-100" : "opacity-0"}`} ref={canvasRef} />
    </div>
  );
}
