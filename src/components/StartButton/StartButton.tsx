import React from 'react';
import Link from 'next/link';

import './StartButton.scss';

export default function StartButton({ url }: { url: string }) {
  return (
    <Link className="start-button" href={url}>
      <div className="start-button-link-wrapper">
        <span>Начать экскурсию</span>
      </div>
      <div>
        <div className="start-button-icon" />
      </div>
    </Link>
  );
}
