'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { selectContainerData, selectLoading, setContainerData } from '@/store/expoSlice';
import { useRef, useEffect } from 'react';

import resizeToFit from 'intrinsic-scale';

import Image from 'next/image';

import './ExpoDetailsImage.scss';

export default function ExpoDetailsImage({ bg }: { bg: string }) {
  const imageRef = useRef<null | HTMLImageElement>(null);

  const dispatch = useAppDispatch();
  const bgState = useAppSelector(selectContainerData);
  const loading = useAppSelector(selectLoading);

  function saveImageData() {
    const image = imageRef.current!;
    const parent = image.parentElement!;

    const result = resizeToFit(
      'cover',
      {
        width: image.clientWidth,
        height: image.clientHeight,
      },
      {
        width: parent.clientWidth,
        height: parent.clientHeight,
      },
    );

    dispatch(
      setContainerData({
        nWidth: image.naturalWidth,
        nHeight: image.naturalHeight,
        width: result.width,
        height: result.height,
        left: result.x,
      }),
    );
  }

  useEffect(() => {
    window.addEventListener('resize', saveImageData);

    return () => {
      window.removeEventListener('resize', saveImageData);
    };
  }, []);

  return (
    <Image
      unoptimized
      priority
      ref={imageRef}
      src={bg}
      alt="expo"
      className={'expo-details-bg ' + (loading ? 'loading' : '')}
      style={{ width: bgState.width!, height: bgState.height!, left: bgState.left! }}
      onLoad={saveImageData}
    />
  );
}
