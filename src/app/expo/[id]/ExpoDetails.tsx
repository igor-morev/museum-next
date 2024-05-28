import { fetchExpoById } from '@/api/fetchExpoList';
import BaseHeader from '@/components/BaseHeader/BaseHeader';
import Image from 'next/image';

import './ExpoDetails.scss';
import ExpoDetailsImage from './ExpoDetailsImage';
import ExpoViewContent from './ExpoViewContent';

export default async function ExpoDetails({ params }: { params: { id: string } }) {
  const id = params.id;
  const expo = await fetchExpoById(id);

  const miniExpoIcon = require(`@/assets/images/icons/mini-expo-icons/${id}.png`).default;
  const bg = require(`@/assets/images/zones/${id}.jpg`).default;

  return (
    <div className={`expo-details expo-0`}>
      <div
        className={'expo-details-inner'}
        style={{
          background: 'black url(' + bg.src + ') no-repeat center center',
        }}
      >
        <ExpoDetailsImage bg={bg}></ExpoDetailsImage>
        <div className="expo-overlay" />
        <div className="expo-container">
          <div className="expo-header-wrapper">
            <BaseHeader logoUrl={'/expo'} />
            <div className="expo-icon">
              <Image src={miniExpoIcon} alt="" unoptimized />
            </div>
          </div>

          <ExpoViewContent expo={expo}></ExpoViewContent>
        </div>
      </div>
    </div>
  );
}
