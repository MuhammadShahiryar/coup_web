'use client';

import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  animated = true,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'group relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden',
        {
          'bg-primary text-white': variant === 'primary' && !animated,
          'bg-primary text-white transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-[0_8px_30px_rgba(0,0,0,0.12),0_4px_10px_rgba(0,0,0,0.08)]': variant === 'primary' && animated,
          'bg-secondary text-foreground': variant === 'secondary',
          'border border-foreground text-foreground bg-transparent': variant === 'outline',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-5 py-2.5 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && animated && (
        <span
          className="absolute inset-0 z-0 bg-white origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
