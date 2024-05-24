import { ExpoDto } from '@/api';
import ExpoGuide from '../ExpoGuide';

import './ExpoBaseView.scss';
import GoButton from './GoButton';

export default function ExpoBaseView({
  expo,
  link,
  topRight,
  center,
  bottomRight,
}: {
  expo: ExpoDto;
  link?: string;
  topRight?: React.ReactNode;
  center?: React.ReactNode;
  bottomRight?: React.ReactNode;
}) {
  const { heading, description, prevId, nextId } = expo;

  return (
    <div className={`expo-details-content`}>
      <div className={`d-flex expo-top`}>
        <div className="expo-top-left">
          <h1>{heading}</h1>
          <p className="expo-description">{description}</p>
        </div>
        <div className="expo-top-right">
          {link}
          {topRight}
        </div>
      </div>
      {center}
      <div className="expo-bottom">
        <div className="expo-bottom-left">
          <ExpoGuide src={`/audio/${expo.id}.mp3`} />
          {/* {this.props.video} */}
        </div>
        {bottomRight}
      </div>
      <GoButton prevId={prevId} nextId={nextId} />
    </div>
  );
}
