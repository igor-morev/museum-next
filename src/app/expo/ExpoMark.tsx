'use client';
import './ExpoMark.scss';
import Link from 'next/link';
import { ExpoDto } from '@/api';

export function ExpoMark({
  mark,
  top,
  left,
  isAnimating,
}: {
  mark: ExpoDto;
  top: number;
  left: number;
  isAnimating?: boolean;
}) {
  const { id } = mark;
  const url = require(`@/assets/images/icons-sprites/${id}.png`).default.src;

  function afterHoverEnter() {}

  function afterHoverLeave() {}

  return (
    <Link
      href={`/expo/${mark.id}`}
      className={`expo-mark ${isAnimating ? 'slideUp' : ''}`}
      onMouseEnter={afterHoverEnter}
      onMouseLeave={afterHoverLeave}
      style={{
        top,
        left,
        backgroundImage: `url(${url})`,
      }}
    />
  );
}
