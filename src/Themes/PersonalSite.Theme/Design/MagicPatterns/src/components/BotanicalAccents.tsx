import React from 'react';
/* ── Diamond ornament ── */
export function Diamond({
  className = '',
  size = 6,
  variant = 'default'




}: {className?: string;size?: number;variant?: 'default' | 'light';}) {
  const strokeColor =
  variant === 'light' ? 'rgba(212,196,148,0.8)' : 'rgba(180,155,87,0.5)';
  const fillColor =
  variant === 'light' ? 'rgba(212,196,148,0.5)' : 'rgba(180,155,87,0.35)';
  const half = size / 2;
  const path = `M ${half} 0 L ${size} ${half} L ${half} ${size} L 0 ${half} Z`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true">

      <path d={path} fill={fillColor} stroke={strokeColor} strokeWidth={0.8} />
    </svg>);

}
/* ── Horizontal rule ── */
export function Rule({
  className = '',
  width = 32,
  variant = 'default'




}: {className?: string;width?: number;variant?: 'default' | 'light';}) {
  const color =
  variant === 'light' ? 'rgba(212,196,148,0.7)' : 'rgba(180,155,87,0.3)';
  return (
    <svg
      width={width}
      height={2}
      viewBox={`0 0 ${width} 2`}
      className={className}
      aria-hidden="true">

      <line x1={0} y1={1} x2={width} y2={1} stroke={color} strokeWidth={1} />
    </svg>);

}
/* ── Branch line with triple-diamond center ── */
export function BranchLine({
  className = '',
  variant = 'default'



}: {className?: string;variant?: 'default' | 'light';}) {
  const goldStroke =
  variant === 'light' ? 'rgba(212,196,148,0.7)' : 'rgba(180,155,87,0.4)';
  const goldFill =
  variant === 'light' ? 'rgba(212,196,148,0.45)' : 'rgba(180,155,87,0.25)';
  const centerStroke =
  variant === 'light' ? 'rgba(212,196,148,0.9)' : 'rgba(180,155,87,0.6)';
  const centerFill =
  variant === 'light' ? 'rgba(212,196,148,0.6)' : 'rgba(180,155,87,0.4)';
  const w = 300;
  const h = 10;
  const cy = h / 2;
  const diamondSize = 4;
  const diamondLargeSize = 5;
  const gap = 10;
  function diamondPath(cx: number, s: number) {
    return `M ${cx} ${cy - s / 2} L ${cx + s / 2} ${cy} L ${cx} ${cy + s / 2} L ${cx - s / 2} ${cy} Z`;
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`w-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet">

      <line
        x1={w / 2 - gap - diamondLargeSize}
        y1={cy}
        x2={0}
        y2={cy}
        stroke={goldStroke}
        strokeWidth={0.6} />

      <line
        x1={w / 2 + gap + diamondLargeSize}
        y1={cy}
        x2={w}
        y2={cy}
        stroke={goldStroke}
        strokeWidth={0.6} />

      <path
        d={diamondPath(w / 2 - gap, diamondSize)}
        fill={goldFill}
        stroke={goldStroke}
        strokeWidth={0.6} />

      <path
        d={diamondPath(w / 2, diamondLargeSize)}
        fill={centerFill}
        stroke={centerStroke}
        strokeWidth={0.7} />

      <path
        d={diamondPath(w / 2 + gap, diamondSize)}
        fill={goldFill}
        stroke={goldStroke}
        strokeWidth={0.6} />

    </svg>);

}