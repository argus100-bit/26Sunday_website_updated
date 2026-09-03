/**
 * DotMatrix — Subtle background dot grid pattern
 * Uses CSS radial-gradient for performance (no SVG bloat).
 * 
 * @param {'light'|'dark'|'accent'} [variant='light'] — Color scheme
 * @param {number} [spacing=24] — Grid spacing in px
 * @param {number} [dotSize=1.2] — Dot radius in px
 * @param {number} [opacity=0.35] — Overall opacity (keep low for subtlety)
 * @param {'full'|'top-fade'|'bottom-fade'|'center-fade'} [fade='full'] — Fade direction
 * @param {string} [className] — Additional CSS classes
 */
export default function DotMatrix({
  variant = 'light',
  spacing = 24,
  dotSize = 1.2,
  opacity = 0.35,
  fade = 'full',
  className = '',
}) {
  // Color presets for different backgrounds
  const dotColors = {
    light: 'rgba(11, 31, 58, VAR_OPACITY)',    // dark dots on light bg
    dark: 'rgba(255, 255, 255, VAR_OPACITY)',    // white dots on dark bg
    accent: 'rgba(255, 87, 87, VAR_OPACITY)',    // brand accent dots
  };

  const dotColor = (dotColors[variant] || dotColors.light).replace('VAR_OPACITY', opacity);

  // Gradient mask for fading edges
  const fadeMasks = {
    full: 'none',
    'top-fade': 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
    'bottom-fade': 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
    'center-fade': 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
  };

  const maskImage = fadeMasks[fade] || fadeMasks.full;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(circle at ${dotSize}px ${dotSize}px, ${dotColor} ${dotSize}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        ...(maskImage !== 'none' && {
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }),
      }}
    />
  );
}
