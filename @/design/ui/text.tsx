import React from 'react';

type TypographyToken =
  | 'body'
  | 'headline'
  | 'label'
  | 'title'

const typographyClasses = {
  body: 'text-base',
  headline: 'text-2xl',
  label: 'text-sm font-bold',
  title: 'text-xl font-bold',
} as const

interface TextProps {
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode;
  variant?: TypographyToken;
}

export function Text ({
  as: Tag = 'div',
  children,
  variant = 'body',
}: TextProps) {
  return (
    <Tag className={typographyClasses[variant]}>
      {children}
    </Tag>
  )
}
