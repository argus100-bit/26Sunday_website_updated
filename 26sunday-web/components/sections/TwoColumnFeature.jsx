import Image from 'next/image';

/**
 * TwoColumnFeature — alternating text/image feature blocks (used on Solution pages)
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.body
 * @param {string} [props.image]
 * @param {string} [props.imageAlt]
 * @param {'left'|'right'} [props.imagePosition] - Which side the image goes on (default: right)
 * @param {string} [props.eyebrow]
 * @param {string[]} [props.bulletPoints]
 */
export default function TwoColumnFeature({
  title,
  body,
  image,
  imageAlt,
  imagePosition = 'right',
  eyebrow,
  bulletPoints,
}) {
  const imageFirst = imagePosition === 'left';

  const textBlock = (
    <div className="flex flex-col justify-center">
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: 'var(--color-accent)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-bold leading-snug"
        style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
      >
        {title}
      </h2>
      <p className="mt-4 leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
        {body}
      </p>
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {bulletPoints.map(point => (
            <li key={point} className="flex items-start gap-3">
              <span
                className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
                style={{ backgroundColor: 'var(--color-accent)' }}
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--color-neutral-700)' }}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex items-center justify-center">
      {image ? (
        <div className="rounded-2xl overflow-hidden shadow-xl w-full">
          <Image
            src={image}
            alt={imageAlt || title}
            width={600}
            height={400}
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div
          className="rounded-2xl w-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent-soft) 0%, #ffe0e0 100%)',
            aspectRatio: '4/3',
            minHeight: '280px',
            border: '1px solid var(--color-neutral-200)',
          }}
          role="img"
          aria-label={`${title} feature illustration — image coming soon`}
        >
          <div className="text-center p-8 opacity-60">
            <div className="space-y-2">
              <div className="h-3 rounded-full bg-[var(--color-accent)] w-3/4 mx-auto opacity-40" />
              <div className="h-3 rounded-full bg-[var(--color-accent)] w-1/2 mx-auto opacity-30" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 rounded-lg bg-[var(--color-accent)] opacity-20" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="section-pad" aria-labelledby={`feature-${title.slice(0, 20).replace(/\s/g, '-').toLowerCase()}`}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {imageFirst ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
