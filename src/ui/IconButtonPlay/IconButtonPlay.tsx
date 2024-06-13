import React from 'react';

import icPlay from '@/assets/images/btns-sprite/video-play.png';
import IconButton from '@/ui/IconButton/IconButton';

export default function IconButtonPlay({ size = 96 }: { size?: number }) {
  return <IconButton icon={icPlay.src} size={size} />;
}
