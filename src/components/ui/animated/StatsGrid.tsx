import React, { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface StatItem {
  number: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description?: string;
  accentColor?: 'cyan' | 'purple' | 'orange' | 'pink' | 'green';
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

export default function StatsGrid({
  stats,
  columns = 3,
  className = '',
  animationDuration = 2000,
  staggerDelay = 150,
}: StatsGridProps) {
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
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
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
      border: 'border-cyan-500/30',
      hover: 'hover:border-cyan-500/60',
      glow: 'group-hover:shadow-cyan-500/20',
      bg: 'from-cyan-500/10 to-cyan-600/10',
    },
    purple: {
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-500/60',
      glow: 'group-hover:shadow-purple-500/20',
      bg: 'from-purple-500/10 to-purple-600/10',
    },
    orange: {
      text: 'text-orange-400',
      border: 'border-orange-500/30',
      hover: 'hover:border-orange-500/60',
      glow: 'group-hover:shadow-orange-500/20',
      bg: 'from-orange-500/10 to-orange-600/10',
    },
    pink: {
      text: 'text-pink-400',
      border: 'border-pink-500/30',
      hover: 'hover:border-pink-500/60',
      glow: 'group-hover:shadow-pink-500/20',
      bg: 'from-pink-500/10 to-pink-600/10',
    },
    green: {
      text: 'text-green-400',
      border: 'border-green-500/30',
      hover: 'hover:border-green-500/60',
      glow: 'group-hover:shadow-green-500/20',
      bg: 'from-green-500/10 to-green-600/10',
    },
  };

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      ref={containerRef}
      className={`stats-grid grid ${gridCols[columns]} gap-6 ${className}`}
    >
      {stats.map((stat, index) => {
        const colors = colorClasses[stat.accentColor || 'purple'];
        const delay = index * staggerDelay;

        return (
          <div
            key={index}
            className={`group relative bg-neutral-900 dark:bg-neutral-950 rounded-xl border ${colors.border} ${colors.hover} p-6 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl ${colors.glow} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${delay}ms`,
            }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Number */}
              <div className={`text-4xl md:text-5xl font-black mb-3 ${colors.text}`}>
                {isVisible ? (
                  <AnimatedCounter
                    target={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={animationDuration}
                  />
                ) : (
                  <span>
                    {stat.prefix || ''}0{stat.suffix || ''}
                  </span>
                )}
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold text-neutral-200 dark:text-neutral-300 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              {stat.description && (
                <p className="text-sm text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  {stat.description}
                </p>
              )}

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${colors.bg} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
