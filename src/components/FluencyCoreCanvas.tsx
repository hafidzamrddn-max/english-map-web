"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface FluencyCoreCanvasProps {
  progress: MotionValue<number>;
}

export default function FluencyCoreCanvas({ progress }: FluencyCoreCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setLoadingPercentage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [useProceduralFallback, setUseProceduralFallback] = useState(false);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 100; // Expected number of frames

  // Procedural fallback state
  const particlesRef = useRef<{ baseX: number; baseY: number; baseZ: number; color: string; size: number }[]>([]);
  const currentProgress = useRef(0);

  useMotionValueEvent(progress, "change", (latest) => {
    currentProgress.current = latest;
  });

  function initProceduralParticles() {
    const particles = [];
    for (let i = 0; i < 500; i++) {
      particles.push({
        baseX: (Math.random() - 0.5) * 200,
        baseY: (Math.random() - 0.5) * 200,
        baseZ: (Math.random() - 0.5) * 200,
        color: Math.random() > 0.5 ? "#FF6B6B" : "#003851",
        size: Math.random() * 3 + 1
      });
    }
    particlesRef.current = particles;
  }

  useEffect(() => {
    // Attempt to preload image sequence
    let loadedCount = 0;
    let failedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(4, "0");
      img.src = `/fluency-core/frame_${frameNum}.jpg`; // Expected path
      
      img.onload = () => {
        loadedCount++;
        setLoadingPercentage(Math.round(((loadedCount + failedCount) / totalFrames) * 100));
        if (loadedCount + failedCount === totalFrames) {
          finishLoading(loadedCount);
        }
      };

      img.onerror = () => {
        failedCount++;
        setLoadingPercentage(Math.round(((loadedCount + failedCount) / totalFrames) * 100));
        if (loadedCount + failedCount === totalFrames) {
          finishLoading(loadedCount);
        }
      };

      tempImages.push(img);
    }
    
    imagesRef.current = tempImages;

    function finishLoading(loaded: number) {
      if (loaded === 0) {
        // Fallback if no images found
        setUseProceduralFallback(true);
        initProceduralParticles();
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const p = currentProgress.current;
      
      // Resize to container
      const parent = canvas.parentElement;
      if (parent) {
        if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!useProceduralFallback && imagesRef.current.length > 0) {
        // Draw image sequence
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(p * totalFrames))
        );
        const img = imagesRef.current[frameIndex];
        
        if (img && img.complete && img.naturalWidth > 0) {
          // Contain fit
          const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
          const x = (canvas.width / 2) - (img.width / 2) * scale;
          const y = (canvas.height / 2) - (img.height / 2) * scale;
          
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
      } else {
        // Draw procedural fallback (Exploding Core)
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Progress defines explosion state. 
        // 0-0.2: Solid core
        // 0.2-0.5: Exploding
        // 0.5-0.8: Exploded
        // 0.8-1.0: Reforming
        
        let explosionMultiplier = 1;
        if (p < 0.2) explosionMultiplier = 1;
        else if (p < 0.5) explosionMultiplier = 1 + (p - 0.2) * 20; // 1 to 7
        else if (p < 0.8) explosionMultiplier = 7;
        else explosionMultiplier = 7 - (p - 0.8) * 30; // 7 to 1
        
        explosionMultiplier = Math.max(1, explosionMultiplier);
        
        const rotation = p * Math.PI * 4;

        particlesRef.current.forEach(particle => {
          // Rotate around Y and Z
          const cosR = Math.cos(rotation);
          const sinR = Math.sin(rotation);
          
          // Explode outwards based on multiplier
          const x = particle.baseX * explosionMultiplier;
          const y = particle.baseY * explosionMultiplier;
          const z = particle.baseZ * explosionMultiplier;
          
          // Apply rotation
          const rx = x * cosR - z * sinR;
          const rz = x * sinR + z * cosR;
          
          const ry = y * cosR - rz * sinR;
          
          // Perspective projection
          const perspective = 400 / (400 + rz);
          const screenX = centerX + rx * perspective;
          const screenY = centerY + ry * perspective;
          const scale = Math.max(0.1, particle.size * perspective);

          ctx.beginPath();
          ctx.arc(screenX, screenY, scale, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = Math.min(1, Math.max(0.1, perspective));
          ctx.fill();
        });
        ctx.globalAlpha = 1;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, useProceduralFallback]);

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}
