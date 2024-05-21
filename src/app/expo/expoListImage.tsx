'use client';
import Image from 'next/image';

import renderBg from '@/assets/images/z00.jpg';
import { useRef } from 'react';
import { calculateAspectRatioFit } from '@/utils/utils';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { selectContainerData, setContainerData } from '@/store/expoSlice';

export default function ExpoListImage() {
  const imageRef = useRef<null | HTMLImageElement>(null);

  const dispatch = useAppDispatch();
  const bg = useAppSelector(selectContainerData);

  function saveImageData() {
    const image = imageRef.current!;

    const sizeData = calculateAspectRatioFit(
      image.clientWidth,
      image.clientHeight,
      window.innerWidth,
      window.innerHeight,
    );

    dispatch(
      setContainerData({
        nWidth: image.naturalWidth,
        nHeight: image.naturalHeight,
        width: sizeData.width,
        height: sizeData.height,
      }),
    );
  }

  return (
    <Image
      unoptimized
      priority
      ref={imageRef}
      src={renderBg}
      alt="expo"
      style={{ width: bg.width!, height: bg.height! }}
      onLoad={saveImageData}
    />
  );
}