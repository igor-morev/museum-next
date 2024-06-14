import Image from 'next/image';
import Link from 'next/link';

import { ExpoDto } from '@/api';

import './ExpoPreviewList.scss';
import Carousel from './Carousel';

export default function ExpoPreviewList({
  expoItems,
  current,
}: {
  expoItems: ExpoDto[];
  current?: ExpoDto;
}) {
  const currentPreviewImage = current ? require(`@/assets/images/${current.id}.png`).default : null;

  return (
    <div className={`previews-container`}>
      {currentPreviewImage && (
        <div className="current-preview">
          <Link href={'/expo'}>
            <Image src={currentPreviewImage} alt="" />
          </Link>
        </div>
      )}
      <Carousel expoItems={expoItems} current={current}></Carousel>
    </div>
  );
}
