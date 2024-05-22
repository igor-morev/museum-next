import React from 'react';
import Image from 'next/image';
import BaseHeader from '@/components/BaseHeader/BaseHeader';
import icSmile from '@/assets/images/icons/ic-smile.png';

import './Expo.scss';
import { fetchExpoList } from '@/api/fetchExpoList';

import patternLeft from '@/assets/images/pattern2.png';
import patternRight from '@/assets/images/pattern1.png';
import ExpoBoard from './ExpoBoard';
import StartButton from '@/components/StartButton/StartButton';
import ExpoGuide from './ExpoGuide';

export default async function Expo() {
  const expoItems = await fetchExpoList();

  return (
    <div className={'expo expo-container'}>
      <BaseHeader logoUrl={'/'}>
        <div className="expo-info-align">
          <div className="expo-info">
            <div className="expo-info-image">
              <Image src={icSmile} alt="" />
            </div>
            <div>
              Начните знакомство с нашим Мультимедийным центром активировав аудиогида, затем нажмите
              &apos;Начать экскурсию&apos;.
            </div>
          </div>
        </div>
      </BaseHeader>
      <div className="expo-info-wrapper">
        <ExpoGuide src={'/audio/z0.mp3'} />
      </div>
      <div className="expo-content">
        <div
          className="expo-pattern pattern-left"
          style={{
            backgroundImage: 'url(' + patternLeft.src + ')',
          }}
        />
        <ExpoBoard expoItems={expoItems}></ExpoBoard>
        <div
          className="expo-pattern pattern-right"
          style={{
            backgroundImage: 'url(' + patternRight.src + ')',
          }}
        />
      </div>
      {/* <div className="expo-info-align-mobile">
        <div className="expo-guide-mobile">{<ExpoGuide url={audio}/>}</div>
        <div className="expo-info">
          <div className="expo-info-image">
            <Image src={icSmile} alt="" />
          </div>
          <div>
            Начните знакомство с нашим Мультимедийным центром активировав аудиогида, затем нажмите
            &apos;Начать экскурсию&apos;.
          </div>
        </div>
      </div> */}
      <div className="expo-info-mobile">
        <StartButton url="/expo/welcome_area" />
      </div>
    </div>
  );
}
