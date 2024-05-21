import { ExpoDto } from '@/api';
import { useState, useRef, useEffect } from 'react';

export default function useExpoMarksAnimation(marks: ExpoDto[]) {
  const [animation, setAnimation] = useState<Record<string, boolean>>({});
  let animationTime = 700;
  let requestRef = useRef(0);

  useEffect(() => {
    const intervalFunc = () => {
      marks.forEach((mark, i) => {
        let delay = 500 * i + animationTime;

        setTimeout(() => {
          setAnimation({
            [mark.id]: true,
          });
        }, delay);

        setTimeout(() => {
          setAnimation({
            [mark.id]: false,
          });

          if (i === marks.length - 1) {
            requestRef.current = requestAnimationFrame(intervalFunc);
          }
        }, delay + animationTime);
      });
    };

    requestRef.current = requestAnimationFrame(intervalFunc);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return animation;
}
