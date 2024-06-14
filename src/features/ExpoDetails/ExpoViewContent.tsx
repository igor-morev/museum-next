'use client';
import { ExpoDto } from '@/api';
import DynamicPosition from '@/ui/DynamicPosition/DynamicPosition';
import Image3dCard from '@/ui/Image3dCard/Image3dCard';
import { VIDEO_OPTIONS, zoneIds } from '@/constants/options';
import { useAppSelector } from '@/hooks/store';
import { selectContainerData, selectLoading } from '@/store/expoSlice';
import { useState } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

import ExpoBaseView from './ExpoBaseView';

import imageLeft from '@/assets/images/walls-left.jpg';
import imageRight from '@/assets/images/walls-right.jpg';
import imageHotLost from '@/assets/images/hot-lost.jpg';

import './ExpoViewContent.scss';
import IconButtonPlay from '@/ui/IconButtonPlay/IconButtonPlay';
import IconButtonLink from '@/ui/IconButtonLink/IconButtonLink';
import Link from 'next/link';
import ExpoGuide from '../ExpoGuide/ExpoGuide';

Modal.setAppElement('#modals');

export default function ExpoViewContent({ expo }: { expo: ExpoDto }) {
  const containerData = useAppSelector(selectContainerData);
  const loading = useAppSelector(selectLoading);

  const [isShowedImageModal, setIsShowedImageModal] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  const [image, setImage] = useState<string | null>(null);

  function openImage(image: string) {
    setIsShowedImageModal(true);
    setImage(image);
  }

  function handleCloseModal() {
    setIsShowedImageModal(false);
    setVideoId(null);
  }

  function handleOpenVideo(videoId: string) {
    setVideoId(videoId);
  }

  function isAudioPaused() {
    return isShowedImageModal || !!videoId;
  }

  function renderViews() {
    switch (expo.id) {
      case zoneIds.z_1:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            video={
              <DynamicPosition top={630} left={730} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
            center={
              <div>
                <DynamicPosition top={400} left={300} context={containerData}>
                  <div onClick={() => openImage(imageLeft.src)}>
                    <Image3dCard
                      perspective={500}
                      yAngle={40}
                      top={-200}
                      left={-180}
                      width={350}
                      height={300}
                      context={containerData}
                    />
                  </div>
                </DynamicPosition>
                <DynamicPosition top={400} left={1250} context={containerData}>
                  <div onClick={() => openImage(imageRight.src)}>
                    <Image3dCard
                      top={-150}
                      left={-160}
                      width={320}
                      height={280}
                      context={containerData}
                    />
                  </div>
                </DynamicPosition>
              </div>
            }
          />
        );
      case zoneIds.z_2:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            video={
              <DynamicPosition top={340} left={750} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
          />
        );

      case zoneIds.z_3:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            video={
              <DynamicPosition top={530} left={800} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
          />
        );
      case zoneIds.z_4:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            video={
              <DynamicPosition top={520} left={680} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
          />
        );
      case zoneIds.z_5:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            topRight={
              <div>
                <DynamicPosition top={350} left={1050} context={containerData}>
                  <div className="expo-description-extra expo-description-fixed">
                    <div>
                      <b>Что делать при аварии?</b>
                    </div>
                    <ul>
                      <li>
                        Покиньте опасную зону. Если это невозможно, поднимитесь на возвышенность
                      </li>
                      <li>Предупредите об опасности окружающих</li>
                      <li>Не пытайтесь справиться с утечкой самостоятельно</li>
                      <li>Позвоните в экстренную службу 112</li>
                    </ul>
                    <br />
                    <div>
                      В постоянной готовности находится <b>35 аварийных бригад</b> ПАО «Т Плюс»
                    </div>
                  </div>
                </DynamicPosition>
              </div>
            }
            video={
              <DynamicPosition top={650} left={770} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
          />
        );
      case zoneIds.z_6:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            video={
              <DynamicPosition top={530} left={650} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
          />
        );
      case zoneIds.z_7:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            center={
              <DynamicPosition top={450} left={720} context={containerData}>
                <div onClick={() => openImage(imageHotLost.src)}>
                  <Image3dCard
                    top={-35}
                    left={-40}
                    width={160}
                    height={144}
                    context={containerData}
                    yAngle={5}
                  />
                </div>
              </DynamicPosition>
            }
            video={
              <DynamicPosition top={450} left={1330} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
          />
        );
      case zoneIds.z_8:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            video={
              <DynamicPosition top={570} left={760} context={containerData}>
                <div onClick={() => handleOpenVideo(expo.videoId!)}>
                  <IconButtonPlay />
                </div>
              </DynamicPosition>
            }
          />
        );
      case zoneIds.z_9:
        return (
          <ExpoBaseView expo={expo} audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} />} />
        );
      case zoneIds.z_10:
        return (
          <ExpoBaseView
            expo={expo}
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isAudioPaused()} />}
            bottomRight={
              <div className="expo-row expo-bottom-right">
                <DynamicPosition top={500} left={300} context={containerData}>
                  <div className="video-item video-item-sm">
                    <div onClick={() => handleOpenVideo(expo.videoIds![0])}>
                      <IconButtonPlay size={96} />
                    </div>
                    <div>Почему происходят аварии на теплотрассах? Основные причины. </div>
                  </div>
                </DynamicPosition>

                <DynamicPosition top={500} left={570} context={containerData}>
                  <div className="video-item">
                    <div onClick={() => handleOpenVideo(expo.videoIds![1])}>
                      <IconButtonPlay size={96} />
                    </div>
                    <div>
                      Летние отключения горячей воды. Все, что вы хотели узнать, но боялись
                      спросить.{' '}
                    </div>
                  </div>
                </DynamicPosition>

                <DynamicPosition top={500} left={950} context={containerData}>
                  <div className="video-item">
                    <div onClick={() => handleOpenVideo(expo.videoIds![2])}>
                      <IconButtonPlay size={96} />
                    </div>
                    <div>Куда «идут» деньги за отопление? Давайте разберемся!</div>
                  </div>
                </DynamicPosition>

                <DynamicPosition top={500} left={1250} context={containerData}>
                  <div className="video-item">
                    <div onClick={() => handleOpenVideo(expo.videoIds![3])}>
                      <IconButtonPlay size={96} />
                    </div>
                    <div>Сколько платят за отопление в Европе и России? </div>
                  </div>
                </DynamicPosition>
              </div>
            }
          />
        );
      case zoneIds.z_11:
        return (
          <ExpoBaseView
            audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} />}
            expo={expo}
            link={
              <DynamicPosition top={260} left={770} context={containerData}>
                <Link href={expo.link!} target="_blank" rel="noreferrer noopener">
                  <IconButtonLink />
                </Link>
              </DynamicPosition>
            }
          />
        );
      default:
    }
  }

  return (
    <>
      <div className={'h-100 ' + (loading ? 'loading' : '')}>{renderViews()}</div>
      <Modal
        isOpen={!!videoId}
        contentLabel="Expo video"
        onRequestClose={handleCloseModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-close" onClick={handleCloseModal} />

        {videoId && (
          <div className="video-frame-container">
            <YouTube
              videoId={videoId}
              opts={VIDEO_OPTIONS}
              onEnd={handleCloseModal}
              iframeClassName={'video-frame'}
            />
          </div>
        )}
      </Modal>
      <div className={`image-curtain ${isShowedImageModal ? 'showed' : ''}`}>
        <div className="modal-close" onClick={handleCloseModal} />

        {image && (
          <div
            className="image-curtain-content image-modal-content"
            style={{
              background: 'black url(' + image + ') no-repeat center center',
            }}
          />
        )}
      </div>
    </>
  );
}
