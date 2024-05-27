import { fetchExpoById } from '@/api/fetchExpoList';
import BaseHeader from '@/components/BaseHeader/BaseHeader';
import Image from 'next/image';
import ExpoBaseView from './ExpoBaseView';

import './ExpoDetails.scss';
import ExpoDetailsImage from './ExpoDetailsImage';

export default async function ExpoDetails({ params }: { params: { id: string } }) {
  const id = params.id;
  const expo = await fetchExpoById(id);

  const miniExpoIcon = require(`@/assets/images/icons/mini-expo-icons/${id}.png`).default;
  const bg = require(`@/assets/images/zones/${id}.jpg`).default;

  function renderViews() {
    return (
      <ExpoBaseView
        expo={expo}
        // isAudioPlaying={this.state.canAudioPlay}
        // video={
        //   <DynamicPosition
        //     top={630}
        //     left={730}
        //     context={this.state.bg}>
        //     <div onClick={this.handleOpenVideo}>
        //       <IconButtonPlay size={96}/>
        //     </div>
        //   </DynamicPosition>

        // }
        center={
          <div>
            {/* <DynamicPosition
          top={400}
          left={300}
          context={this.state.bg}>
          <div onClick={this.openImage.bind(me, imageLeft)}>
            <Image3dCard
              perspective={500}
              yAngle={40}
              top={-200} left={-180} width={350} height={300} context={this.state.bg}
            />
          </div>
        </DynamicPosition> */}
            {/* <DynamicPosition
          top={400}
          left={730}
          context={this.state.bg}>
          <Link to={`/expo/${id}/game/pipes`}>
            <div data-tip
                 data-for={'pipes'}>
              <IconButtonGame size={96}/>
            </div>
            <ExpoTooltip id={'pipes'}
                         place={'right'}
                         description={'Игра <b>Поверни трубу.</b> Это увлекательная игра. Соедините трубы, чтобы горячая вода не «ушла» под землю, а попала в систему отопления микрорайона. Торопитесь – время ограниченно.'}
            />
          </Link>
        </DynamicPosition> */}
            {/* <DynamicPosition
          top={400}
          left={1250}
          context={this.state.bg}
        >
          <div onClick={this.openImage.bind(me, imageRight)}>
            <Image3dCard top={-150} left={-160} width={320} height={280} context={this.state.bg}
            />
          </div>
        </DynamicPosition> */}
          </div>
        }
        // onAudioFinished={this.handleOpenVideo}
      />
    );
  }

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

          {renderViews()}
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
        </div>
      </div>

      {/* <div className={`image-curtain ${this.state.isShowedImageModal ? 'showed' : ''}`}>
      <div className="modal-close" onClick={this.handleCloseModal}/>

      <div className="image-curtain-content image-modal-content" style={{
        background: 'black url(' + this.state.image + ') no-repeat center center'
      }}/>
    </div> */}
    </div>
  );
}
