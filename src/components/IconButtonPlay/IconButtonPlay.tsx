import React from 'react';

import icPlay from '@/assets/images/btns-sprite/video-play.png';
import IconButton from '@/components/IconButton/IconButton';

export default function IconButtonPlay({ size }: { size: number }) {
  return <IconButton icon={icPlay.src} size={size} />;
}
