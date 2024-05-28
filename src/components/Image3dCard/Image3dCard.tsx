import { ExpoListImage } from '@/store/expo-list-image';
import { getInterpolatedValue } from '@/utils/utils';
import IconButtonImage from '@/components/IconButtonImage/IconButtonImage';

import './Image3dCard.scss';

export default function Image3dCard({
  perspective = 300,
  openImage,
  top,
  left,
  yAngle = -30,
  width,
  height,
  context,
}: {
  perspective?: number;
  openImage?: () => void;
  top: number;
  left: number;
  yAngle?: number;
  width: number;
  height: number;
  context: ExpoListImage;
}) {
  return (
    <div className="image-card">
      <div
        className="border-image-perspective-wrapper"
        style={{
          perspective,
        }}
      >
        <div
          className="border-image-perspective draw"
          onClick={openImage}
          style={{
            transform: `rotateY(${yAngle}deg)`,
            top: getInterpolatedValue(top, context.nHeight!, context.height!),
            left: getInterpolatedValue(left, context.nHeight!, context.height!),
            width: getInterpolatedValue(width, context.nHeight!, context.height!),
            height: getInterpolatedValue(height, context.nHeight!, context.height!),
          }}
        />
      </div>
      <div>
        <IconButtonImage />
      </div>
    </div>
  );
}
