import { useState } from 'react';

import './IconButton.scss';

export default function IconButton({ icon, size = 80 }: { icon: string; size?: number }) {
  const [hovered, setHovered] = useState(false);

  function onMouseEnter() {
    setHovered(true);
  }

  function onMouseLeave() {
    setHovered(false);
  }

  return (
    <div
      className="icon-button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: size,
        minWidth: size,
        height: size,
        backgroundImage: `url(${icon})`,
        backgroundPositionY: hovered ? -size : 0,
      }}
    />
  );
}
