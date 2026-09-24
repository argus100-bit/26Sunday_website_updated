'use client';

import { useState, useEffect } from 'react';

/**
 * RotatingWord — Fixed 134px x 30px Neumorphic (Soft UI) Badge with Brand Navy Text (#0B1F3A).
 * Features dual soft light/dark ambient shadows for a tactile extruded Soft UI appearance.
 */
export default function RotatingWord({
  words = ['Sales', 'Compliance', 'Security', 'Legal', 'Procurement', 'Vendor Risk'],
  interval = 2800,
  externalWordIndex = 0,
  className = '',
}) {
  const [index, setIndex] = useState(0);
  const [revolverState, setRevolverState] = useState('idle'); // 'idle' | 'roll-out' | 'roll-in'

  const wordsLength = words.length;

  useEffect(() => {
    const targetIndex = externalWordIndex % wordsLength;
    if (targetIndex === index) return;

    let t2;
    const t0 = setTimeout(() => {
      setRevolverState('roll-out');
    }, 0);

    const t1 = setTimeout(() => {
      setIndex(targetIndex);
      setRevolverState('roll-in');

      t2 = setTimeout(() => {
        setRevolverState('idle');
      }, 220);
    }, 220);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, [externalWordIndex, wordsLength, index]);

  // Dynamic font scaling per word length
  const getWordStyle = (word) => {
    const len = word.length;
    if (len <= 5) {
      return { fontSize: '0.92rem', letterSpacing: '0.04em', fontWeight: 800 }; // Sales, Legal
    }
    if (len <= 8) {
      return { fontSize: '0.86rem', letterSpacing: '0.01em', fontWeight: 700 }; // Security
    }
    return { fontSize: '0.8rem', letterSpacing: '-0.02em', fontWeight: 700 };    // Procurement, Vendor Risk
  };

  const currentWord = words[index];
  const wordStyle = getWordStyle(currentWord);

  return (
    <span 
      className={`inline-inline-block align-middle select-none mx-1.5 ${className}`}
    >
      {/* Neumorphic Soft UI Badge Box (Fixed 134px x 30px) */}
      <span
        className="inline-flex items-center justify-center font-bold whitespace-nowrap rounded-lg overflow-hidden relative"
        style={{
          width: '134px',
          height: '30px',
          backgroundColor: '#F5F1EA',
          border: '1px solid rgba(255, 255, 255, 0.85)',
          boxShadow: '4px 4px 10px rgba(11, 31, 58, 0.09), -4px -4px 10px rgba(255, 255, 255, 0.95), inset 1px 1px 1px rgba(255, 255, 255, 0.9), inset -1px -1px 1px rgba(11, 31, 58, 0.05)',
          color: '#0B1F3A',
          perspective: '350px',
        }}
      >
        {/* 3D Revolver Word Layer */}
        <span
          className={`inline-block revolver-word relative z-10 ${revolverState}`}
          style={{
            ...wordStyle,
            color: '#0B1F3A',
          }}
        >
          {currentWord}
        </span>

        <style jsx>{`
          .revolver-word {
            will-change: transform, opacity;
            transform-style: preserve-3d;
            backface-visibility: hidden;
            color: #0B1F3A;
          }

          .revolver-word.roll-out {
            animation: revolverRollOut 0.22s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .revolver-word.roll-in {
            animation: revolverRollIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes revolverRollOut {
            0% {
              opacity: 1;
              transform: rotateX(0deg) translate3d(0, 0, 0);
            }
            100% {
              opacity: 0;
              transform: rotateX(-65deg) translate3d(0, -8px, -10px);
            }
          }

          @keyframes revolverRollIn {
            0% {
              opacity: 0;
              transform: rotateX(65deg) translate3d(0, 8px, -10px);
            }
            100% {
              opacity: 1;
              transform: rotateX(0deg) translate3d(0, 0, 0);
            }
          }
        `}</style>
      </span>
    </span>
  );
}
