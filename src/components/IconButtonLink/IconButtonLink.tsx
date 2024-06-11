import React from 'react';

import icLink from '@/assets/images/btns-sprite/out.png';
import IconButton from '@/components/IconButton/IconButton';

export default function IconButtonLink({ size = 96 }: { size?: number }) {
  return <IconButton icon={icLink.src} size={size} />;
}
