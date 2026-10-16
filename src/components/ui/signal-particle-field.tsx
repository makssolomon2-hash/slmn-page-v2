"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  spreadX: number;
  spreadY: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  ambient: boolean;
  pale: boolean;
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export default function SignalParticleField({
  intro = false,
}: {
  intro?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1;
    let height = 1;
    let particles: Particle[] = [];
    let animationFrame = 0;
    let lastTime = performance.now();
    const startedAt = lastTime;
    let pointerX = -1000;
    let pointerY = -1000;
    let pixelRatio = 1;

    const createParticles = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const glyphCanvas = document.createElement("canvas");
      glyphCanvas.width = Math.ceil(width);
      glyphCanvas.height = Math.ceil(height);
      const glyphContext = glyphCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      const glyphPoints: { x: number; y: number }[] = [];

      if (intro && glyphContext) {
        const fontSize = Math.min(width * 0.6, height * 0.82, 600);
        glyphContext.clearRect(0, 0, width, height);
        glyphContext.font = `900 ${fontSize}px Arial, sans-serif`;
        glyphContext.textAlign = "center";
        glyphContext.textBaseline = "middle";
        glyphContext.fillStyle = "#fff";
        glyphContext.fillText("SLMN", width / 2, height / 2, width * 0.96);

        const pixels = glyphContext.getImageData(
          0,
          0,
          glyphCanvas.width,
          glyphCanvas.height,
        ).data;
        for (let y = 0; y < height; y += 2) {
          for (let x = 0; x < width; x += 2) {
            if (pixels[(y * glyphCanvas.width + x) * 4 + 3] > 80) {
              glyphPoints.push({ x, y });
            }
          }
        }
      }

      for (let index = glyphPoints.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [glyphPoints[index], glyphPoints[swapIndex]] = [
          glyphPoints[swapIndex],
          glyphPoints[index],
        ];
      }

      const glyphCount = Math.min(glyphPoints.length, 4200);
      particles = glyphPoints.slice(0, glyphCount).map(({ x, y }) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        startX: Math.random() * width,
        startY: Math.random() * height,
        targetX: x,
        targetY: y,
        spreadX: Math.random() * width,
        spreadY: Math.random() * height,
        vx: 0,
        vy: 0,
        size: 0.65 + Math.random() * 1.25,
        phase: Math.random() * Math.PI * 2,
        ambient: false,
        pale: Math.random() > 0.72,
      }));

      const ambientCount = Math.min(
        4200,
        Math.max(1500, Math.ceil((width * height) / 260)),
      );
      for (let index = 0; index < ambientCount; index++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 90 + Math.random() * 390;
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          startX: x,
          startY: y,
          targetX: x,
          targetY: y,
          spreadX: x,
          spreadY: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 0.55 + Math.random() * 1.4,
          phase: Math.random() * Math.PI * 2,
          ambient: true,
          pale: Math.random() > 0.74,
        });
      }
    };

    const draw = (now: number) => {
      const elapsed = now - startedAt;
      const formation = reducedMotion.matches
        ? 1
        : clamp(elapsed / 1800, 0, 1);
      const settle = 1 - (1 - formation) ** 3;
      const dissolve = intro
        ? clamp(window.scrollY / Math.max(window.innerHeight * 0.68, 1), 0, 1)
        : 1;
      const ambientAlpha = reducedMotion.matches
        ? 0.38
        : intro
          ? clamp((elapsed - 1650) / 900, 0, 1)
          : 1;
      const dt = Math.min((now - lastTime) / 1000, 0.035);
      lastTime = now;

      context.clearRect(0, 0, width, height);

      if (ambientAlpha > 0.05 && !reducedMotion.matches) {
        context.beginPath();
        for (const particle of particles) {
          if (!particle.ambient) continue;
          const nextX = particle.x + particle.vx * dt;
          const nextY = particle.y + particle.vy * dt;
          context.moveTo(particle.x, particle.y);
          context.lineTo(nextX, nextY);

          particle.x = ((nextX % width) + width) % width;
          particle.y = ((nextY % height) + height) % height;

          const dx = particle.x - pointerX;
          const dy = particle.y - pointerY;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < 150) {
            const force = (1 - distance / 150) * 190 * dt;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
          const speed = Math.hypot(particle.vx, particle.vy);
          if (speed > 520) {
            particle.vx = (particle.vx / speed) * 520;
            particle.vy = (particle.vy / speed) * 520;
          }
        }
        context.globalAlpha = ambientAlpha * 0.28;
        context.strokeStyle = "#42dff7";
        context.lineWidth = 0.65;
        context.stroke();
      }

      context.globalAlpha = 1;
      for (const pale of [false, true]) {
        context.beginPath();
        for (const particle of particles) {
          if (particle.ambient || particle.pale !== pale) continue;
          const targetX =
            particle.targetX +
            (particle.spreadX - particle.targetX) * dissolve;
          const targetY =
            particle.targetY +
            (particle.spreadY - particle.targetY) * dissolve;
          particle.x =
            particle.startX +
            (targetX - particle.startX) * settle +
            Math.sin(
              elapsed * 0.0018 +
                particle.phase +
                particle.targetY * 0.025,
            ) *
              (2.4 + dissolve * 4);
          particle.y =
            particle.startY +
            (targetY - particle.startY) * settle +
            Math.cos(
              elapsed * 0.0016 +
                particle.phase +
                particle.targetX * 0.014,
            ) *
              (1.8 + dissolve * 4);

          const dx = particle.x - pointerX;
          const dy = particle.y - pointerY;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < 125) {
            const force = (1 - distance / 125) * 28;
            particle.x += (dx / distance) * force;
            particle.y += (dy / distance) * force;
          }
          context.rect(
            particle.x - particle.size,
            particle.y - particle.size,
            particle.size * 2,
            particle.size * 2,
          );
        }
        context.globalAlpha = Math.max(0.82, ambientAlpha);
        context.fillStyle = pale ? "#dcfaff" : "#00c8e8";
        context.shadowColor = pale
          ? "rgba(220, 250, 255, 0.72)"
          : "rgba(0, 200, 232, 0.9)";
        context.shadowBlur = 5;
        context.fill();
      }

      for (const pale of [false, true]) {
        context.beginPath();
        for (const particle of particles) {
          if (!particle.ambient || particle.pale !== pale) continue;
          context.rect(
            particle.x - particle.size,
            particle.y - particle.size,
            particle.size * 2,
            particle.size * 2,
          );
        }
        context.globalAlpha = ambientAlpha * 0.86;
        context.fillStyle = pale ? "#d7f7fb" : "#00c8e8";
        context.shadowColor = "rgba(0, 200, 232, 0.9)";
        context.shadowBlur = 4;
        context.fill();
      }
      context.shadowBlur = 0;
      context.globalAlpha = 1;
    };

    const tick = (now: number) => {
      draw(now);
      animationFrame = window.requestAnimationFrame(tick);
    };

    const syncMotion = () => {
      window.cancelAnimationFrame(animationFrame);
      lastTime = performance.now();
      if (document.visibilityState === "visible" && !reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(tick);
      } else {
        draw(performance.now());
      }
    };

    const trackPointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY - bounds.top;
    };

    createParticles();
    syncMotion();

    const resizeObserver = new ResizeObserver(() => {
      createParticles();
      if (reducedMotion.matches) draw(performance.now());
    });
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", trackPointer, { passive: true });
    document.addEventListener("visibilitychange", syncMotion);
    reducedMotion.addEventListener("change", syncMotion);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", trackPointer);
      document.removeEventListener("visibilitychange", syncMotion);
      reducedMotion.removeEventListener("change", syncMotion);
    };
  }, [intro]);

  return (
    <canvas
      ref={canvasRef}
      className="signal-particle-canvas"
      aria-hidden="true"
    />
  );
}
