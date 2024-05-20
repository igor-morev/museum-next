'use client';

import { getInterpolatedValue, rInterval } from '@/utils/utils';
import './ExpoMark.scss';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ExpoDto } from '@/api';

export function ExpoMark({ mark, top, left }: { mark: ExpoDto; top: number; left: number }) {
  const [active, setActive] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  // const [intervalRef, setIntervalRef] = useRef<any>(null);

  // const {width, height, nHeight, nWidth} = me.props.containerData;

  const { id, position } = mark;
  // const { top, left } = position;

  const url = require(`@/assets/images/icons-sprites/${id}.png`).default.src;

  function startAnimTimer() {
    // this.interval = rInterval(this.animate.bind(this), this.props.data.animationDelay);
    // setIntervalRef()
  }

  function afterHoverEnter() {
    setActive(true);
  }

  function afterHoverLeave() {
    setActive(false);
  }

  // componentWillReceiveProps(nextProps, nextContext) {
  //   if (nextProps.isAnimationFinished) {
  //     this.interval.clear();
  //     this.interval = rInterval(this.animate.bind(this), this.props.data.animationDelay);
  //   }
  // }

  function animate() {
    // intervalRef.clear();

    setIsAnimating(true);

    // const {id} = this.props.data;

    // this.props.markAnimation({
    //   [id]: this.state.isAnimating
    // });

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  }

  return (
    <Link
      href={`/expo/${mark.id}`}
      className={`expo-mark ${isAnimating ? 'slideUp' : ''}`}
      onMouseEnter={afterHoverEnter}
      onMouseLeave={afterHoverLeave}
      style={{
        top,
        left,
        backgroundImage: `url(${url})`,
      }}
    />
  );
}
