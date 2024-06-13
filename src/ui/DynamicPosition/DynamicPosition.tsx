import { ExpoListImage } from '@/store/expo-list-image';
import { getInterpolatedValue } from '@/utils/utils';
import React from 'react';

import './DynamicPosition.scss';

export default function DynamicPosition({
  children,
  left,
  top,
  context,
}: {
  children: React.ReactNode;
  left: number;
  top: number;
  context: ExpoListImage;
}) {
  function getLeft() {
    const iValue = getInterpolatedValue(left, context.nWidth!, context.width!);
    if (iValue) {
      // if (!context.left) {
      //   return iValue;
      // } else {
      //   return iValue + context.left;
      // }
      return iValue;
    }

    return 'auto';
  }

  return (
    <div
      className={'dynamic-position'}
      style={{
        top: getInterpolatedValue(top, context.nHeight!, context.height!),
        left: getLeft(),
      }}
    >
      {children}
    </div>
  );
}
