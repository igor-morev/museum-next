'use client';
import Image from 'next/image';

import arrowLeft from '@/assets/images/arrow-left.png';
import arrowRight from '@/assets/images/arrow-right.png';
import ExpoPreview from './ExpoPreview';
import { ExpoDto } from '@/api';

import './Carousel.scss';
import { useEffect, useRef, useState } from 'react';

const PREVIEW_WIDTH = 120;
const PREVIEW_OFFSET = 24;
const STEP = 100;
const PADDING = 10;
const START_X = PADDING;

export default function Carousel({
  expoItems,
  current,
}: {
  expoItems: ExpoDto[];
  current?: ExpoDto;
}) {
  const viewportRef = useRef<null | HTMLDivElement>(null);
  const carouselRef = useRef<null | HTMLDivElement>(null);

  const [x, setX] = useState(START_X);
  const [maxX, setMaxX] = useState(0);

  function moveRight() {
    if (isRightFinished()) {
      return;
    }

    let newX = x - STEP;

    if (Math.abs(newX) > maxX) {
      newX = -maxX;
    }

    setX(newX);
  }

  function moveLeft() {
    if (isLeftFinished()) {
      return;
    }
    let newX = x + STEP;

    if (newX > START_X) {
      newX = START_X;
    }

    setX(newX);
  }

  function updateMax() {
    setMaxX(carouselRef.current!.offsetWidth - viewportRef.current!.offsetWidth + START_X);
  }

  function isLeftFinished() {
    return x === START_X;
  }

  function isRightFinished() {
    return x === -maxX;
  }

  function moveToActive() {
    if (current) {
      const index = expoItems.findIndex((expo) => expo.id === current.id);
      const expoWidthWithOffset = PREVIEW_WIDTH + PREVIEW_OFFSET;
      let position = -(index * expoWidthWithOffset - viewportRef.current!.offsetWidth / 2);

      if (position > START_X) {
        position = START_X;
      }

      if (Math.abs(position) > maxX) {
        position = -maxX;
      }

      setX(position);
    }
  }

  useEffect(() => {
    moveToActive();
  }, [maxX]);

  useEffect(() => {
    updateMax();

    window.addEventListener('resize', updateMax);

    return () => {
      window.removeEventListener('resize', updateMax);
    };
  }, []);

  return (
    <div className="preview-carousel-wrapper">
      <div
        className={'preview-arrow preview-arrow-left' + (isLeftFinished() ? ' disabled' : '')}
        onClick={moveLeft}
      >
        <Image src={arrowLeft} alt="" />
      </div>
      <div className="preview-carousel-inner">
        <div
          className={
            'preview-carousel' +
            (!isLeftFinished() ? ' not-full-left' : '') +
            (!isRightFinished() ? ' not-full-right' : '')
          }
          ref={viewportRef}
        >
          <div
            className="expo-previews"
            ref={carouselRef}
            style={{
              transform: `translateX(${x}px)`,
            }}
          >
            {expoItems.map((expo, index) => (
              <ExpoPreview
                key={expo.id}
                expo={expo}
                index={index}
                active={current ? current.id === expo.id : false}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={'preview-arrow preview-arrow-right' + (isRightFinished() ? ' disabled' : '')}
        onClick={moveRight}
      >
        <Image src={arrowRight} alt="" />
      </div>
    </div>
  );
}
