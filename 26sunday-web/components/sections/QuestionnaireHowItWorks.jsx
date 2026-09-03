'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function QuestionnaireHowItWorks({ data }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = data?.steps || [];
  const eyebrow = data?.eyebrow || 'How it works';
  const headline = data?.headline || 'From inbox to deals in four steps';
  const subtext = data?.subtext || 'A continuous, intelligent pipeline that transforms unstructured security reviews into audit-grade deliverables in record time.';

  return (
    <section 
      className="section-pad relative bg-[#FAF7F2] border-t border-neutral-200/70" 
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A]"
          >
            {headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            {subtext}
          </p>

          {/* Clean & Minimal Sequential Flow Navigation Bar */}
          <div className="mt-8 hidden md:flex items-center justify-center gap-5 text-sm font-mono">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div key={step.title} className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer transition-colors duration-200 pb-1 ${
                      isActive
                        ? 'text-[#0B1F3A] font-bold border-b-2 border-[#FF5757]'
                        : 'text-neutral-400 hover:text-neutral-700 font-medium'
                    }`}
                  >
                    <span>{step.title}</span>
                  </button>

                  {idx < steps.length - 1 && (
                    <span className="text-neutral-300 font-light select-none">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Clean & Minimal Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-200 bg-white flex flex-col justify-between border ${
                  isSelected
                    ? 'border-[#0B1F3A] shadow-lg -translate-y-1'
                    : 'border-neutral-200/80 hover:border-neutral-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#0B1F3A] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Features List */}
                {step.features && step.features.length > 0 && (
                  <ul className="mt-6 pt-5 border-t border-neutral-100 space-y-2">
                    {step.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-600 leading-normal">
                        <Check size={14} className="text-[#FF5757] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom CTA Link */}
        <div className="mt-12 text-center">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] hover:text-[#FF5757] transition-colors group"
          >
            <span>Start automating your questionnaires</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
