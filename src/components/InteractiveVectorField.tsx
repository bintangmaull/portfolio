import React, { useEffect, useRef } from 'react';

export default function InteractiveVectorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const spacing = 35; // Grid spacing
    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      ctx.lineWidth = 1.5;
      
      const mouseRadius = 250;
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Ambient vector field movement (fluid-like)
          let angle = Math.sin(time * 0.0005 + x * 0.005) * Math.cos(time * 0.0005 + y * 0.005) * Math.PI;
          
          let alpha = isDark ? 0.15 : 0.15;
          let color = isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
          
          if (dist < mouseRadius) {
            const influence = 1 - Math.pow(dist / mouseRadius, 2); // Smoother falloff
            
            // Target angle points towards mouse
            const targetAngle = Math.atan2(dy, dx);
            
            // Shortest path interpolation for angles
            let angleDiff = targetAngle - angle;
            // Normalize difference to -PI to PI
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            
            angle = angle + angleDiff * influence;
            
            // Color interpolation towards brand blue (#2563EB)
            alpha = isDark ? 0.15 + influence * 0.6 : 0.15 + influence * 0.6;
            color = `rgba(37, 99, 235, ${alpha})`; // brand-blue
          }

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);
          
          ctx.strokeStyle = color;

          // Draw a short line
          const size = 6;
          ctx.beginPath();
          ctx.moveTo(-size, 0);
          ctx.lineTo(size, 0);
          ctx.stroke();

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
