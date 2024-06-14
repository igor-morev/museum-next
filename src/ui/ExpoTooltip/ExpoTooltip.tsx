import { Tooltip } from 'react-tooltip';
import React from 'react';

import './ExpoTooltip.scss';
import { ExpoDto } from '@/api';

export default function ExpoTooltip({ expo }: { expo: ExpoDto }) {
  const { id, heading, description, number } = expo;
  return (
    <Tooltip place={'top'} className="expo-tooltip" id={id}>
      <div className="expo-tooltip-name">Зона {number}</div>
      {heading && <div className="expo-tooltip-heading">{heading}</div>}
      {description && (
        <div
          className="expo-tooltip-text"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      )}
    </Tooltip>
  );
}
