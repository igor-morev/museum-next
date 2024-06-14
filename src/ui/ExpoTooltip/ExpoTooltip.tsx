import { Tooltip } from 'react-tooltip';
import React from 'react';

import './ExpoTooltip.scss';

export default function ExpoTooltip(props: any) {
  const { id, name, heading, description, place } = props;
  return (
    <Tooltip place={place || 'top'} className="expo-tooltip" id={id}>
      {name && <div className="expo-tooltip-name">{name}</div>}
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
