import React, { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface StarkStatProps {
  number: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  context: string;
  citation?: string;
  citationUrl?: string;
  accentColor?: 'cyan' | 'purple' | 'orange' | 'pink' | 'green';
  className?: string;
  animationDuration?: number;
}

export default function StarkStat({
  number,
  prefix = '',
  suffix = '',
  decimals = 0,
  context,
  citation,
  citationUrl,
  accentColor = 'purple',
  className = '',
  animationDuration = 2500,
}: StarkStatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  const colorClasses = {
    cyan: {
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/50',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-cyan-600',
      border: 'border-cyan-500/30',
    },
    purple: {
      text: 'text-purple-400',
      glow: 'shadow-purple-500/50',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-purple-600',
      border: 'border-purple-500/30',
    },
    orange: {
      text: 'text-orange-400',
      glow: 'shadow-orange-500/50',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-orange-600',
      border: 'border-orange-500/30',
    },
    pink: {
      text: 'text-pink-400',
      glow: 'shadow-pink-500/50',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-pink-600',
      border: 'border-pink-500/30',
    },
    green: {
      text: 'text-green-400',
      glow: 'shadow-green-500/50',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-green-600',
      border: 'border-green-500/30',
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <div
      ref={containerRef}
      className={`stark-stat relative py-12 md:py-16 ${className}`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className={`w-96 h-96 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} blur-3xl rounded-full animate-pulse`}></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* The dramatic number */}
        <div
          className={`stat-number mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            textShadow: `0 0 40px rgba(167, 139, 250, 0.4), 0 0 80px rgba(167, 139, 250, 0.2)`,
          }}
        >
          {isVisible ? (
            <AnimatedCounter
              target={number}
              prefix={prefix}
              suffix={suffix}
              decimals={decimals}
              duration={animationDuration}
              className={`font-black text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}
            />
          ) : (
            <span className={`font-black text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}>
              {prefix}0{suffix}
            </span>
          )}
        </div>

        {/* Context text */}
        <div
          className={`stat-context max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-neutral-300 dark:text-neutral-400 leading-relaxed">
            {context}
          </p>
        </div>

        {/* Citation if provided */}
        {citation && (
          <div
            className={`stat-citation mt-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {citationUrl ? (
              <a
                href={citationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${colors.border} bg-neutral-900/50 dark:bg-neutral-950/50 backdrop-blur-sm text-sm ${colors.text} hover:bg-neutral-800/50 dark:hover:bg-neutral-900/50 transition-all duration-300`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{citation}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${colors.border} bg-neutral-900/50 dark:bg-neutral-950/50 backdrop-blur-sm text-sm ${colors.text}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{citation}</span>
              </div>
            )}
          </div>
        )}

        {/* Decorative line */}
        <div
          className={`stat-divider mt-12 flex justify-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        >
          <div className={`h-1 w-32 rounded-full bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} ${colors.glow} shadow-lg`}></div>
        </div>
      </div>
    </div>
  );
}
