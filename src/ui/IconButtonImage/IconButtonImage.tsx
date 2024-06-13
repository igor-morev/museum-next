import IconButton from '@/ui/IconButton/IconButton';
import icZoom from '@/assets/images/btns-sprite/ic-zoom.png';

export default function IconButtonImage({ size }: { size?: number }) {
  return <IconButton icon={icZoom.src} size={size} />;
}
