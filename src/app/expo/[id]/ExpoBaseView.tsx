import { ExpoDto } from '@/api';

import './ExpoBaseView.scss';
import GoButton from './GoButton';

export default function ExpoBaseView({
  expo,
  link,
  topRight,
  video,
  center,
  audioGuide,
  bottomRight,
}: {
  expo: ExpoDto;
  link?: string;
  video?: React.ReactNode;
  topRight?: React.ReactNode;
  center?: React.ReactNode;
  audioGuide: React.ReactNode;
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
          {audioGuide}
          {video}
        </div>
        {bottomRight}
      </div>
      <GoButton prevId={prevId} nextId={nextId} />
    </div>
  );
}
