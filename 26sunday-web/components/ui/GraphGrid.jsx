/**
 * GraphGrid — Minimal background engineering graph / grid pattern
 * Uses pure CSS linear gradients with dual-scale (major and minor) grid lines.
 * 
 * @param {'dark'|'light'|'blue'} [variant='dark'] — Color scheme
 * @param {number} [gridSize=32] — Minor grid cell size in px
 * @param {number} [majorRatio=4] — Ratio for major grid lines (e.g. 4 = every 4th line)
 * @param {number} [opacity=1] — Overall opacity multiplier
 * @param {'full'|'top-fade'|'bottom-fade'|'center-fade'} [fade='bottom-fade'] — Mask fade direction
 * @param {string} [className] — Additional CSS classes
 */
export default function GraphGrid({
  variant = 'dark',
  gridSize = 32,
  majorRatio = 4,
  opacity = 1,
  fade = 'bottom-fade',
  className = '',
}) {
  const majorSize = gridSize * majorRatio;

  // Presets for line colors
  const lineColors = {
    // Dark background (white lines with clean subtle contrast)
    dark: {
      minor: `rgba(255, 255, 255, ${0.035 * opacity})`,
      major: `rgba(255, 255, 255, ${0.08 * opacity})`,
    },
    // Light background (navy lines)
    light: {
      minor: `rgba(11, 31, 58, ${0.04 * opacity})`,
      major: `rgba(11, 31, 58, ${0.09 * opacity})`,
    },
    // Blue tint on dark background
    blue: {
      minor: `rgba(96, 165, 250, ${0.04 * opacity})`,
      major: `rgba(96, 165, 250, ${0.09 * opacity})`,
    },
  };

  const colors = lineColors[variant] || lineColors.dark;

  // Gradient mask for fading edges
  const fadeMasks = {
    full: 'none',
    'top-fade': 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
    'bottom-fade': 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
    'center-fade': 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  };

  const maskImage = fadeMasks[fade] || fadeMasks.full;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${colors.major} 1px, transparent 1px),
          linear-gradient(to bottom, ${colors.major} 1px, transparent 1px),
          linear-gradient(to right, ${colors.minor} 1px, transparent 1px),
          linear-gradient(to bottom, ${colors.minor} 1px, transparent 1px)
        `,
        backgroundSize: `${majorSize}px ${majorSize}px, ${majorSize}px ${majorSize}px, ${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px`,
        ...(maskImage !== 'none' && {
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }),
      }}
    />
  );
}
