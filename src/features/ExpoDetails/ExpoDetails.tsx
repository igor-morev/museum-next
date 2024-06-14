import { fetchExpoList } from '@/api/fetchExpoList';
import BaseHeader from '@/ui/BaseHeader/BaseHeader';
import Image from 'next/image';
import ExpoPreviewList from '../ExpoPreviewList/ExpoPreviewList';

import './ExpoDetails.scss';
import ExpoDetailsImage from './ExpoDetailsImage';
import ExpoViewContent from './ExpoViewContent';

export default async function ExpoDetails({ params }: { params: { id: string } }) {
  const id = params.id;

  const expoItems = await fetchExpoList();
  const expo = expoItems.find((item) => item.id === id)!;

  const miniExpoIcon = require(`@/assets/images/icons/mini-expo-icons/${id}.png`).default;
  const bg = require(`@/assets/images/zones/${id}.jpg`).default;

  return (
    <>
      <div className="main-content">
        <div className={`expo-details expo-0`}>
          <div className={'expo-details-inner'}>
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
      </div>
      <div className="expo-footer expo-container">
        <ExpoPreviewList expoItems={expoItems} current={expo}></ExpoPreviewList>
      </div>
    </>
  );
}
