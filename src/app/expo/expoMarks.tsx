'use client';

import { ExpoDto } from '@/api/types/index';
import { ExpoMark } from '@/components/ExpoMark/ExpoMark';
import useExpoMarksAnimation from '@/hooks/expoMarksAnimation';
import { useAppSelector } from '@/hooks/store';
import { selectContainerData } from '@/store/expoSlice';
import { getInterpolatedValue } from '@/utils/utils';

export default function ExpoMarks({ marks }: { marks: ExpoDto[] }) {
  const bg = useAppSelector(selectContainerData);

  const animation = useExpoMarksAnimation(marks);

  return marks.map((mark) => {
    const { top, left } = mark.position;
    return (
      <ExpoMark
        key={mark.id}
        mark={mark}
        isAnimating={animation[mark.id]}
        top={getInterpolatedValue(top, bg.nHeight!, bg.height!)}
        left={getInterpolatedValue(left, bg.nWidth!, bg.width!)}
      />
    );
  });
}
