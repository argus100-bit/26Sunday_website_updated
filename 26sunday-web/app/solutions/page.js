import ProductCardRow from '@/components/sections/ProductCardRow';
import { homeContent } from '@/content/home';

export const metadata = {
  title: 'Solutions',
  description:
    'Explore the 26Sunday solutions suite: Trust Center, Questionnaire automation, Status Page, and Readiness Assessment — designed to make trust the easiest thing for your business to prove.',
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-labelledby="solutions-heading"
      >
        <div className="container-wide text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Solutions
          </span>
          <h1
            id="solutions-heading"
            className="font-bold"
            style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            One platform. Four solutions.
          </h1>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Trust Center, Questionnaire, Status Page, and Readiness Assessment — purpose-built to work together or independently.
          </p>
        </div>
      </section>

      {/* Product cards — reuse from home content */}
      <ProductCardRow cards={homeContent.productCards} />
    </>
  );
}
