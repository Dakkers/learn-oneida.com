import React from 'react';
import { Intent } from './types';
import { cn } from '@/lib/utils';

type Contrast =
  | 'high'
  | 'mid'
  | 'low'

type TypographyToken =
  | 'body'
  | 'headline'
  | 'footnote'
  | 'label'
  | 'title'

const typographyClasses = {
  body: 'text-base',
  footnote: 'text-xs',
  headline: 'text-2xl',
  label: 'text-sm font-bold',
  title: 'text-xl font-bold',
} as const

interface TextProps {
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode;
  contrast?: Contrast
  intent?: Intent;
  variant?: TypographyToken;
}

export function Text ({
  as: Tag = 'div',
  children,
  contrast = 'high',
  intent = 'secondary',
  variant = 'body',
}: TextProps) {
  return (
    <Tag
      className={cn(
        textColorMap[contrast][intent],
        typographyClasses[variant]
      )}
    >
      {children}
    </Tag>
  )
}

const textColorMap: Record<
  Contrast,
  Record<Intent,string>
> = {
  'high': {
    'magic': 'text-violet-700',
    'negative': 'text-red-700',
    'positive': 'text-green-700',
    'primary': 'text-blue-700',
    'secondary': 'text-gray-700',
    'warning': 'text-amber-700',
  },
  'mid': {
    'magic': 'text-violet-500',
    'negative': 'text-red-500',
    'positive': 'text-green-500',
    'primary': 'text-blue-500',
    'secondary': 'text-gray-500',
    'warning': 'text-amber-500',
  },
  'low': {
    'magic': 'text-violet-300',
    'negative': 'text-red-300',
    'positive': 'text-green-300',
    'primary': 'text-blue-300',
    'secondary': 'text-gray-300',
    'warning': 'text-amber-300',
  },
} as const
