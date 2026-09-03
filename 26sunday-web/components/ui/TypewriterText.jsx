'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * TypewriterText — Character-by-character typing followed by synchronized word rotation
 */
export default function TypewriterText({
  text = 'We steady the bridge.',
  prefix = 'We steady the ',
  words = ['bridge.', 'trust.', 'foundation.', 'course.'],
  speed = 55,
  delay = 400,
  rotateInterval = 2800,
  externalWordIndex = 0,
  enableTyping = true,
  onTypingComplete,
}) {
  const activeWords = words && words.length > 0 ? words : [text.replace(prefix, '') || text];
  const initialWord = activeWords[0];

  const prefixTrimmed = prefix.trim();
  const totalInitialChars = prefixTrimmed.length + 1 + initialWord.length;

  const [typedCharCount, setTypedCharCount] = useState(enableTyping ? 0 : totalInitialChars);
  const [isTypingDone, setIsTypingDone] = useState(!enableTyping);
  const [showCursor, setShowCursor] = useState(enableTyping);
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onTypingCompleteRef = useRef(onTypingComplete);
  useEffect(() => {
    onTypingCompleteRef.current = onTypingComplete;
  }, [onTypingComplete]);

  // 1. Initial character typing effect
  useEffect(() => {
    if (!enableTyping) {
      if (onTypingCompleteRef.current) onTypingCompleteRef.current();
      return;
    }

    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTypedCharCount(i);
        if (i >= totalInitialChars) {
          clearInterval(interval);
          setIsTypingDone(true);
          if (onTypingCompleteRef.current) onTypingCompleteRef.current();
          setTimeout(() => setShowCursor(false), 1200);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [totalInitialChars, speed, delay, enableTyping]);

  // 2. Synchronized word rotation
  const activeWordsLength = activeWords.length;
  useEffect(() => {
    if (!isTypingDone || activeWordsLength <= 1) return;

    const targetIndex = externalWordIndex % activeWordsLength;
    if (targetIndex === wordIndex) return;

    setAnimating(true);
    const t = setTimeout(() => {
      setWordIndex(targetIndex);
      setAnimating(false);
    }, 200);
    return () => clearTimeout(t);
  }, [isTypingDone, activeWordsLength, externalWordIndex, wordIndex]);

  // Longest word for height reservation
  const longestWord = activeWords.reduce((a, b) => (a.length > b.length ? a : b), activeWords[0]);

  const cursorSpan = (
    <span
      className="inline-block ml-[2px] align-baseline"
      style={{
        width: '3px',
        height: '0.85em',
        backgroundColor: 'var(--color-accent)',
        opacity: showCursor ? 1 : 0,
        animation: showCursor ? 'cursorBlink 0.7s step-end infinite' : 'none',
        transition: 'opacity 0.3s ease',
        verticalAlign: 'baseline',
        marginBottom: '-0.05em',
      }}
      aria-hidden="true"
    />
  );

  const line1TypedLength = Math.min(typedCharCount, prefixTrimmed.length);
  const line1Text = prefixTrimmed.slice(0, line1TypedLength);
  const line1Done = typedCharCount >= prefixTrimmed.length;

  const line2TypedLength = Math.max(0, typedCharCount - (prefixTrimmed.length + 1));
  const line2Text = initialWord.slice(0, line2TypedLength);

  return (
    <span className="relative inline-block w-full">
      {/* Ghost text for layout reservation */}
      <span className="invisible select-none block" aria-hidden="true">
        <span className="block">{prefixTrimmed}</span>
        <span className="block">{longestWord}</span>
      </span>

      {/* Visible content overlay */}
      <span className="absolute top-0 left-0 right-0 block">
        {!isTypingDone ? (
          <>
            <span className="block">
              {line1Text}
              {!line1Done && cursorSpan}
            </span>
            <span className="block text-[var(--color-accent)]">
              {line1Done && (
                <>
                  {line2Text}
                  {cursorSpan}
                </>
              )}
            </span>
          </>
        ) : (
          <>
            <span className="block">{prefixTrimmed}</span>
            <span className="block relative overflow-hidden py-0.5">
              <span
                className="inline-block transition-all duration-300 ease-out transform"
                style={{
                  color: 'var(--color-accent)',
                  opacity: animating ? 0 : 1,
                  transform: animating ? 'translateY(-100%) scale(0.95)' : 'translateY(0) scale(1)',
                }}
              >
                {activeWords[wordIndex]}
              </span>
            </span>
          </>
        )}
      </span>
    </span>
  );
}
