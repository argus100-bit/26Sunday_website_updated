'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * BinaryBrainSphere
 * 
 * An ultra-refined 3D mathematical visualization:
 * - Real 3D dual-hemisphere brain geometry + spherical latitude binary orbit rings
 * - Volumetric depth with realistic perspective scaling
 * - 3D proximity neural synapse vectors connecting adjacent nodes
 * - Dynamic binary digit computing stream (0 and 1)
 * - Traveling neural thought wave pulsing through 3D space
 * - Interactive mouse parallax and inertia rotation
 */
export default function BinaryBrainSphere({ size = 480, className = '' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const W = size;
    const H = size;

    // High-DPI support
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const CX = W / 2;
    const CY = H / 2;
    const BASE_RADIUS = Math.min(W, H) * 0.38;

    // ─── Mathematical 3D Particle Cloud Generation ───
    const particles = [];
    const NUM_BRAIN_POINTS = 380;
    const NUM_ORBIT_POINTS = 140;

    // 1. Dual-Hemisphere 3D Anatomical Brain Structure
    for (let i = 0; i < NUM_BRAIN_POINTS; i++) {
      const isLeft = i % 2 === 0;

      // Fibonacci / Spherical distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI; // azimuthal angle
      const phi = Math.acos(2.0 * v - 1.0); // polar angle (0 to PI)

      // Anatomical Gyri / Sulci harmonic perturbation
      const gyri = 1.0
        + 0.14 * Math.sin(5 * theta) * Math.cos(4 * phi)
        + 0.08 * Math.sin(9 * phi)
        + 0.06 * Math.cos(3 * theta);

      // Anatomical brain dimensions (elongated anterior-posterior, flattened bottom)
      const r = BASE_RADIUS * 0.85 * gyri * (0.88 + Math.random() * 0.24);

      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta) * 0.88; // slight vertical compression
      let z = r * Math.cos(phi) * 1.18; // elongated front-to-back

      // Anatomical hemisphere separation (longitudinal cerebral fissure)
      const fissureGap = 16;
      x = isLeft ? -(Math.abs(x) * 0.88 + fissureGap) : (Math.abs(x) * 0.88 + fissureGap);

      // Temporal lobe lateral downward shift
      if (phi > Math.PI * 0.55 && Math.abs(x) > 35) {
        y += 12;
      }

      particles.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        char: Math.random() > 0.5 ? '1' : '0',
        switchTimer: Math.floor(Math.random() * 120),
        switchInterval: 60 + Math.floor(Math.random() * 120),
        size: 11 + Math.random() * 4,
        isBrain: true,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    // 2. Spherical Orbit Latitude / Meridian Binary Rings (wrapping the sphere)
    for (let i = 0; i < NUM_ORBIT_POINTS; i++) {
      const ring = i % 3;
      const angle = (i / (NUM_ORBIT_POINTS / 3)) * Math.PI * 2;
      const r = BASE_RADIUS * 1.12 + (Math.random() * 14 - 7);

      let x = 0, y = 0, z = 0;
      if (ring === 0) {
        // Equator ring
        x = r * Math.cos(angle);
        y = (Math.random() * 18 - 9);
        z = r * Math.sin(angle);
      } else if (ring === 1) {
        // Tilted orbit 1
        x = r * Math.cos(angle);
        y = r * Math.sin(angle) * 0.75;
        z = r * Math.sin(angle) * 0.65;
      } else {
        // Tilted orbit 2
        x = r * Math.cos(angle) * 0.70;
        y = r * Math.sin(angle);
        z = r * Math.cos(angle) * 0.70;
      }

      particles.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        char: Math.random() > 0.5 ? '1' : '0',
        switchTimer: Math.floor(Math.random() * 80),
        switchInterval: 50 + Math.floor(Math.random() * 80),
        size: 10 + Math.random() * 3,
        isBrain: false,
        pulseOffset: Math.random() * Math.PI,
        pulseSpeed: 0.03,
      });
    }

    // ─── 3D Space Proximity Graph (Neural Synapses) ───
    // Pre-calculate 3D neighbor pairs based on true Euclidean distance
    const synapseEdges = [];
    const MAX_SYNAPSE_DIST_SQ = 42 * 42;

    for (let i = 0; i < NUM_BRAIN_POINTS; i++) {
      let connections = 0;
      for (let j = i + 1; j < NUM_BRAIN_POINTS; j++) {
        if (connections >= 3) break;
        const dx = particles[i].baseX - particles[j].baseX;
        const dy = particles[i].baseY - particles[j].baseY;
        const dz = particles[i].baseZ - particles[j].baseZ;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < MAX_SYNAPSE_DIST_SQ && distSq > 15 * 15) {
          synapseEdges.push({ i, j, dist: Math.sqrt(distSq) });
          connections++;
        }
      }
    }

    // Mouse Tracking for Smooth 3D Inertia Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetMouseX = ((e.clientX - cx) / (rect.width / 2)) * 0.5;
      targetMouseY = ((e.clientY - cy) / (rect.height / 2)) * 0.5;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ─── High-Performance Render Loop ───
    let frame = 0;
    let angleY = 0;
    let angleX = 0.18;

    const render = () => {
      frame++;

      // Mouse smoothing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotation angles
      angleY += 0.007 + mouseX * 0.006;
      angleX = 0.18 + mouseY * 0.35;

      ctx.clearRect(0, 0, W, H);

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const FOV = 440;
      const projected = [];

      // Traveling Thought Wave (a spherical pulse traveling through 3D space)
      const wavePhase = (frame * 0.02) % (Math.PI * 2);

      // Transform all particles in 3D
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Dynamic binary computing bit-flip
        p.switchTimer++;
        if (p.switchTimer > p.switchInterval) {
          p.char = p.char === '1' ? '0' : '1';
          p.switchTimer = 0;
        }

        // Gentle breathing pulse
        const breath = 1.0 + 0.02 * Math.sin(frame * p.pulseSpeed + p.pulseOffset);
        const bx = p.baseX * breath;
        const by = p.baseY * breath;
        const bz = p.baseZ * breath;

        // 3D Rotation Matrix (Yaw & Pitch)
        // 1. Rotate around Y axis
        const x1 = bx * cosY - bz * sinY;
        const z1 = bx * sinY + bz * cosY;

        // 2. Rotate around X axis
        const y1 = by * cosX - z1 * sinX;
        const z2 = by * sinX + z1 * cosX;

        // Perspective Projection
        const depthScale = FOV / (FOV + z2 + 220);
        const px = CX + x1 * depthScale;
        const py = CY + y1 * depthScale;

        // Calculate wave illumination on this particle
        const particlePosAngle = Math.atan2(y1, x1) + z2 * 0.005;
        const waveDist = Math.abs(Math.sin(particlePosAngle - wavePhase));
        const isWaveActive = waveDist < 0.25;

        projected.push({
          index: i,
          px,
          py,
          x3d: x1,
          y3d: y1,
          z3d: z2,
          scale: depthScale,
          char: p.char,
          size: p.size * depthScale,
          isBrain: p.isBrain,
          isWaveActive,
        });
      }

      // Sort particles by Z depth for accurate rendering (Painter's algorithm)
      projected.sort((a, b) => a.z3d - b.z3d);

      // Create lookup map from original particle index to projected state
      const projMap = new Array(particles.length);
      for (let i = 0; i < projected.length; i++) {
        projMap[projected[i].index] = projected[i];
      }

      // ─── 1. Draw 3D Neural Synapse Axon Vectors ───
      ctx.lineCap = 'round';
      for (let k = 0; k < synapseEdges.length; k++) {
        const edge = synapseEdges[k];
        const p1 = projMap[edge.i];
        const p2 = projMap[edge.j];
        if (!p1 || !p2) continue;

        // Only draw if not entirely on the back side
        const avgZ = (p1.z3d + p2.z3d) / 2;
        if (avgZ < -80) continue;

        const depthNorm = Math.max(0, Math.min(1, (avgZ + 180) / 360));
        const alpha = (0.10 + depthNorm * 0.40) * (p1.scale);

        // Gradient or glowing line
        ctx.lineWidth = 0.8 * p1.scale;
        if (p1.isWaveActive || p2.isWaveActive) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 1.5})`;
        } else {
          ctx.strokeStyle = `rgba(186, 230, 253, ${alpha * 0.85})`; // Subtle ice cyan
        }

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }

      // ─── 2. Draw 3D Binary Digits (0 and 1) ───
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Depth normalization: -180 (back) to +180 (front)
        const depthNorm = Math.max(0, Math.min(1, (p.z3d + 180) / 360));
        const fs = Math.max(7.5, p.size);

        ctx.font = `700 ${fs}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace`;

        if (p.isWaveActive) {
          // Thought wave activation: glowing neon white
          ctx.shadowColor = '#38BDF8';
          ctx.shadowBlur = 8;
          ctx.fillStyle = '#FFFFFF';
        } else if (depthNorm > 0.65) {
          // Foreground: crisp radiant white with soft halo
          const glow = (depthNorm - 0.65) / 0.35;
          ctx.shadowColor = '#FFFFFF';
          ctx.shadowBlur = 4 + glow * 5;
          ctx.fillStyle = '#FFFFFF';
        } else if (depthNorm > 0.30) {
          // Mid-ground: crisp ice-white
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(226, 232, 240, ${0.45 + depthNorm * 0.45})`;
        } else {
          // Background: subtle dim slate-gray (gives deep volumetric depth)
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(148, 163, 184, ${0.15 + depthNorm * 0.25})`;
        }

        ctx.fillText(p.char, p.px, p.py);
      }

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="block cursor-grab active:cursor-grabbing relative z-10"
      />
    </div>
  );
}
