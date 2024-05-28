'use client';
import { ExpoDto } from '@/api';
import DynamicPosition from '@/components/DynamicPosition/DynamicPosition';
import Image3dCard from '@/components/Image3dCard/Image3dCard';
import { zoneIds } from '@/constants/options';
import { useAppSelector } from '@/hooks/store';
import { selectContainerData } from '@/store/expoSlice';
import { useState } from 'react';
import ExpoBaseView from './ExpoBaseView';

import imageLeft from '@/assets/images/walls-left.jpg';
import imageRight from '@/assets/images/walls-right.jpg';

import './ExpoViewContent.scss';
import ExpoGuide from '../ExpoGuide';
import IconButtonPlay from '@/components/IconButtonPlay/IconButtonPlay';

export default function ExpoViewContent({ expo }: { expo: ExpoDto }) {
  const containerData = useAppSelector(selectContainerData);

  const [isShowedImageModal, setIsShowedImageModal] = useState(false);
  const [isShowedVideo, setIsShowedVideo] = useState(false);

  const [image, setImage] = useState<string | null>(null);

  function openImage(image: string) {
    setIsShowedImageModal(true);
    setImage(image);
  }

  function handleCloseModal() {
    setIsShowedImageModal(false);
  }

  function handleOpenVideo() {
    setIsShowedVideo(!!expo.videoId);
  }

  return (
    <>
      <ExpoBaseView
        expo={expo}
        audioGuide={<ExpoGuide src={`/audio/${expo.id}.mp3`} isStopping={isShowedImageModal} />}
        video={
          <DynamicPosition top={630} left={730} context={containerData}>
            <div onClick={handleOpenVideo}>
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
      {/* <ReactModal
          isOpen={this.state.isShowedVideoModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-close" onClick={this.handleCloseModal}/>

          <div className="video-frame-container">
            <YouTube video={this.state.videoId || this.state.data.videoId}
                     autoplay
                     opts={VIDEO_OPTIONS}
                     onEnd={this.handleCloseModal}
                     className={'video-frame'} />
          </div>
        </ReactModal> */}
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
