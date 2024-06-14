import React from 'react';
import Image from 'next/image';
import BaseHeader from '@/ui/BaseHeader/BaseHeader';
import icSmile from '@/assets/images/icons/ic-smile.png';

import './Expo.scss';
import { fetchExpoList } from '@/api/fetchExpoList';

import patternLeft from '@/assets/images/pattern2.png';
import patternRight from '@/assets/images/pattern1.png';
import ExpoBoard from './ExpoBoard';
import StartButton from '@/ui/StartButton/StartButton';
import ExpoGuide from '../ExpoGuide/ExpoGuide';
import ExpoPreviewList from '../ExpoPreviewList/ExpoPreviewList';

export default async function Expo() {
  const expoItems = await fetchExpoList();

  return (
    <>
      <div className="main-content">
        <div className={'expo expo-container'}>
          <BaseHeader logoUrl={'/'}>
            <div className="expo-info-align">
              <div className="expo-info">
                <div className="expo-info-image">
                  <Image src={icSmile} alt="" />
                </div>
                <div>
                  Начните знакомство с нашим Мультимедийным центром активировав аудиогида, затем
                  нажмите &apos;Начать экскурсию&apos;.
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
            ></div>
            <ExpoBoard expoItems={expoItems}></ExpoBoard>
            <div
              className="expo-pattern pattern-right"
              style={{
                backgroundImage: 'url(' + patternRight.src + ')',
              }}
            ></div>
          </div>
          <div className="expo-info-align-mobile">
            <div className="expo-guide-mobile">{<ExpoGuide src={'/audio/z0.mp3'} />}</div>
            <div className="expo-info">
              <div className="expo-info-image">
                <Image src={icSmile} alt="" />
              </div>
              <div>
                Начните знакомство с нашим Мультимедийным центром активировав аудиогида, затем
                нажмите &apos;Начать экскурсию&apos;.
              </div>
            </div>
          </div>
          <div className="expo-info-mobile">
            <StartButton url="/expo/welcome_area" />
          </div>
        </div>
      </div>
      <div className="expo-footer expo-container">
        <ExpoPreviewList expoItems={expoItems}></ExpoPreviewList>
      </div>
    </>
  );
}
