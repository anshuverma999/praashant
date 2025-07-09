import { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D-like objects representing PMS tools
    const objects = [
      // Kanban boards
      { x: 100, y: 200, z: 0, width: 60, height: 40, type: 'kanban', speed: 0.5, rotation: 0 },
      { x: window.innerWidth - 200, y: 300, z: 0, width: 80, height: 50, type: 'kanban', speed: 0.3, rotation: 45 },
      
      // Chart elements
      { x: 300, y: 100, z: 0, width: 40, height: 40, type: 'chart', speed: 0.4, rotation: 0 },
      { x: window.innerWidth - 300, y: 150, z: 0, width: 50, height: 50, type: 'chart', speed: 0.6, rotation: 90 },
      
      // Task cards
      { x: 150, y: window.innerHeight - 200, z: 0, width: 45, height: 30, type: 'task', speed: 0.35, rotation: 15 },
      { x: window.innerWidth - 150, y: window.innerHeight - 250, z: 0, width: 55, height: 35, type: 'task', speed: 0.45, rotation: -15 },
      
      // Calendar blocks
      { x: 80, y: window.innerHeight / 2, z: 0, width: 35, height: 35, type: 'calendar', speed: 0.25, rotation: 0 },
      { x: window.innerWidth - 120, y: window.innerHeight / 2 + 100, z: 0, width: 45, height: 45, type: 'calendar', speed: 0.55, rotation: 30 },
    ];

    let time = 0;

    const drawKanbanBoard = (obj: any) => {
      ctx.save();
      ctx.translate(obj.x + obj.width / 2, obj.y + obj.height / 2);
      ctx.rotate((obj.rotation + time * obj.speed) * Math.PI / 180);
      
      // Main board
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.fillRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      ctx.strokeRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      
      // Column dividers
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 0.5;
      for (let i = 1; i < 3; i++) {
        const x = -obj.width / 2 + (obj.width / 3) * i;
        ctx.beginPath();
        ctx.moveTo(x, -obj.height / 2);
        ctx.lineTo(x, obj.height / 2);
        ctx.stroke();
      }
      
      // Small cards
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      for (let i = 0; i < 6; i++) {
        const cardX = -obj.width / 2 + 5 + (i % 3) * (obj.width / 3);
        const cardY = -obj.height / 2 + 5 + Math.floor(i / 3) * 12;
        ctx.fillRect(cardX, cardY, obj.width / 3 - 8, 8);
      }
      
      ctx.restore();
    };

    const drawChart = (obj: any) => {
      ctx.save();
      ctx.translate(obj.x + obj.width / 2, obj.y + obj.height / 2);
      ctx.rotate((obj.rotation + time * obj.speed) * Math.PI / 180);
      
      // Chart background
      ctx.fillStyle = 'rgba(34, 197, 94, 0.1)';
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
      ctx.lineWidth = 1;
      ctx.fillRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      ctx.strokeRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      
      // Chart bars
      ctx.fillStyle = 'rgba(34, 197, 94, 0.4)';
      const barWidth = obj.width / 6;
      const heights = [0.3, 0.6, 0.4, 0.8, 0.5];
      
      for (let i = 0; i < heights.length; i++) {
        const barHeight = obj.height * heights[i] * 0.7;
        const x = -obj.width / 2 + 5 + i * (barWidth + 2);
        const y = obj.height / 2 - barHeight - 5;
        ctx.fillRect(x, y, barWidth - 2, barHeight);
      }
      
      ctx.restore();
    };

    const drawTask = (obj: any) => {
      ctx.save();
      ctx.translate(obj.x + obj.width / 2, obj.y + obj.height / 2);
      ctx.rotate((obj.rotation + time * obj.speed) * Math.PI / 180);
      
      // Task card
      ctx.fillStyle = 'rgba(245, 158, 11, 0.1)';
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
      ctx.lineWidth = 1;
      ctx.fillRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      ctx.strokeRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      
      // Task lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 3; i++) {
        const y = -obj.height / 2 + 5 + i * 8;
        ctx.beginPath();
        ctx.moveTo(-obj.width / 2 + 5, y);
        ctx.lineTo(obj.width / 2 - 5, y);
        ctx.stroke();
      }
      
      // Checkbox
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 1;
      ctx.strokeRect(-obj.width / 2 + 3, -obj.height / 2 + 3, 6, 6);
      
      ctx.restore();
    };

    const drawCalendar = (obj: any) => {
      ctx.save();
      ctx.translate(obj.x + obj.width / 2, obj.y + obj.height / 2);
      ctx.rotate((obj.rotation + time * obj.speed) * Math.PI / 180);
      
      // Calendar background
      ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.fillRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      ctx.strokeRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
      
      // Calendar grid
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let i = 1; i < 7; i++) {
        const x = -obj.width / 2 + (obj.width / 7) * i;
        ctx.beginPath();
        ctx.moveTo(x, -obj.height / 2 + 8);
        ctx.lineTo(x, obj.height / 2);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let i = 1; i < 6; i++) {
        const y = -obj.height / 2 + 8 + (obj.height - 8) / 5 * i;
        ctx.beginPath();
        ctx.moveTo(-obj.width / 2, y);
        ctx.lineTo(obj.width / 2, y);
        ctx.stroke();
      }
      
      // Header
      ctx.fillStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.fillRect(-obj.width / 2, -obj.height / 2, obj.width, 8);
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.5;
      
      // Update object positions with floating animation
      objects.forEach((obj, index) => {
        const floatOffset = Math.sin((time + index * 50) * 0.01) * 20;
        obj.y = obj.y + floatOffset * 0.1;
        
        // Keep objects within bounds
        if (obj.y < -100) obj.y = canvas.height + 50;
        if (obj.y > canvas.height + 100) obj.y = -50;
        if (obj.x < -100) obj.x = canvas.width + 50;
        if (obj.x > canvas.width + 100) obj.x = -50;
      });
      
      // Draw objects
      objects.forEach(obj => {
        switch (obj.type) {
          case 'kanban':
            drawKanbanBoard(obj);
            break;
          case 'chart':
            drawChart(obj);
            break;
          case 'task':
            drawTask(obj);
            break;
          case 'calendar':
            drawCalendar(obj);
            break;
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{ background: 'transparent' }}
    />
  );
};

export default Background3D;
