'use client';
import { ExpoDto } from '@/api';
import DynamicPosition from '@/components/DynamicPosition/DynamicPosition';
import Image3dCard from '@/components/Image3dCard/Image3dCard';
import { VIDEO_OPTIONS, zoneIds } from '@/constants/options';
import { useAppSelector } from '@/hooks/store';
import { selectContainerData } from '@/store/expoSlice';
import { useState } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

import ExpoBaseView from './ExpoBaseView';

import imageLeft from '@/assets/images/walls-left.jpg';
import imageRight from '@/assets/images/walls-right.jpg';

import './ExpoViewContent.scss';
import ExpoGuide from '../ExpoGuide';
import IconButtonPlay from '@/components/IconButtonPlay/IconButtonPlay';

Modal.setAppElement('#modals');

export default function ExpoViewContent({ expo }: { expo: ExpoDto }) {
  const containerData = useAppSelector(selectContainerData);

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
                <div onClick={() => handleOpenVideo(expo.videoId as string)}>
                  <IconButtonPlay size={96} />
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
      case zoneIds.z_3:
      case zoneIds.z_4:
      case zoneIds.z_5:
      case zoneIds.z_6:
      case zoneIds.z_7:
      case zoneIds.z_8:
      case zoneIds.z_9:
      case zoneIds.z_10:
      case zoneIds.z_11:
      default:
    }
  }

  return (
    <>
      {renderViews()}
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
