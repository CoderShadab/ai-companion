// CursorEffect.tsx
'use client';
import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById('star-container');
      if (!container) return;

      const star = document.createElement('div');
      star.className = 'star';
      container.appendChild(star);

      // Set the initial position of the star
      star.style.left = `${e.pageX}px`;
      star.style.top = `${e.pageY}px`;

      // Set the animation for the star
      setTimeout(() => {
        star.style.transform = 'translate(-50%, -50%) scale(2)'; // Moves and grows
        star.style.opacity = '0'; // Fades out
      }, 50);

      // Remove the star after the animation
      setTimeout(() => {
        container.removeChild(star);
      }, 600); // Should match the longest transition time
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="star-container" style={{ width: '100vw', height: '100vh' }} />
  );
}
