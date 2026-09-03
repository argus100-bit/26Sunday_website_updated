'use client';

import { useState, useEffect } from 'react';

/**
 * MovingFeaturePill — Clean, open animated feature ticker with 3 horizontal indicator lines.
 * Smoothly transitions through highlights with slide-up/fade motion.
 *
 * @param {Array<{icon?: string, text: string}>} items - List of features to cycle through
 * @param {number} [interval=2600] - Duration in ms between transitions
 * @param {string} [className='']
 */
export default function MovingFeaturePill({
  items = [
    { icon: '◆', text: '4 Connected Solutions' },
    { icon: '⚡', text: '26Sunday AI Engine' },
    { icon: '→', text: 'Fully Self-Serve Platform' },
  ],
  interval = 2600,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState('enter'); // 'enter' | 'exit'
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const timer = setInterval(() => {
      setAnimationState('exit');
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % items.length);
        setAnimationState('enter');
      }, 250);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, isPaused]);

  const currentItem = items[currentIndex];

  return (
    <div
      className={`inline-flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Moving Text Container (Clean & Open, Fixed Width so Indicator Lines Stay Stationary) */}
      <div className="relative overflow-hidden h-6 flex items-center w-[270px] sm:w-[310px] shrink-0">
        <span
          key={currentIndex}
          className={`text-sm sm:text-base font-medium tracking-wide text-white/90 whitespace-nowrap transition-all duration-300 ease-out transform ${
            animationState === 'enter'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-3'
          }`}
        >
          {typeof currentItem === 'string' ? currentItem : currentItem.text}
        </span>
      </div>

      {/* 3 Horizontal Indicator Lines */}
      <div className="flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimationState('exit');
              setTimeout(() => {
                setCurrentIndex(i);
                setAnimationState('enter');
              }, 200);
            }}
            aria-label={`Show feature ${i + 1}`}
            className="h-1 rounded-full transition-all duration-300 cursor-pointer hover:opacity-100"
            style={{
              width: currentIndex === i ? '32px' : '14px',
              backgroundColor:
                currentIndex === i ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.25)',
              boxShadow:
                currentIndex === i ? '0 0 12px rgba(255, 87, 87, 0.5)' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}
