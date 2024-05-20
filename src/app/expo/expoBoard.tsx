'use client';
import ExpoListImage from './expoListImage';
import ExpoMarks from './expoMarks';

import './expoBoard.scss';
import { useAppSelector } from '@/hooks/store';
import { selectContainerData } from '@/store/expoSlice';
import StartButton from '@/components/StartButton/StartButton';
import DynamicPosition from '@/components/DynamicPosition/DynamicPosition';
import { ExpoDto } from '@/api/types/expo';

export default function ExpoBoard({ expoItems }: { expoItems: ExpoDto[] }) {
  const bg = useAppSelector(selectContainerData);

  return (
    <div className="expo-bg">
      <ExpoListImage></ExpoListImage>
      <div className="expo-marks">
        <ExpoMarks marks={expoItems}></ExpoMarks>
      </div>

      {/* <ExpoTooltip id={'mark'} name={name} heading={heading} description={description}/> */}
      <DynamicPosition top={2400} left={2300} context={bg}>
        <StartButton url="/expo/welcome_area" />
      </DynamicPosition>
    </div>
  );
}
