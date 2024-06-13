'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import './ExpoGuide.scss';

import soundWaveIcon from '@/assets/images/soundwave.gif';
import soundPicture from '@/assets/images/guide-thumb.png';

export default function ExpoGuide({
  src,
  isStopping,
  onFinished,
}: {
  src: string;
  isStopping?: boolean;
  onFinished?: () => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<null | HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isStopping) {
      setIsPlaying(false);
    }
  }, [isStopping]);

  function toggleAudio() {
    setIsPlaying(!isPlaying);
  }

  function onEnded() {
    setIsPlaying(false);

    if (onFinished) {
      onFinished();
    }
  }

  return (
    <div className="expo-guide-wrapper">
      <Image src={soundPicture} className="expo-guide-picture" alt="" />
      <div className={`expo-guide ${isPlaying ? 'active' : ''}`} onClick={toggleAudio}>
        <div className="soundwave-container">
          <Image className="soundwave" src={soundWaveIcon || ''} alt="" unoptimized />
          <audio src={src} ref={ref} onEnded={onEnded} />
        </div>
      </div>
    </div>
  );
}
