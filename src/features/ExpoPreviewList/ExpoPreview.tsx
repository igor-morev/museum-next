import { ExpoDto } from '@/api';
import Link from 'next/link';
import Image from 'next/image';

import './ExpoPreview.scss';

export default function ExpoPreview({ expo, active }: { expo: ExpoDto; active: boolean }) {
  const { id, heading, number } = expo;
  const url = require(`@/assets/images/${id}-prew.png`).default;

  return (
    <Link className={'expo-preview ' + (active ? 'active' : '')} href={'/expo/' + id}>
      <div>
        <Image src={url} draggable={false} alt="" />
      </div>
      <div className="expo-preview-overlay">
        <div className="preview-number">{number}</div>
        <div className="preview-name">{heading}</div>
      </div>
    </Link>
  );
}
