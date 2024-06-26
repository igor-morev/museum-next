export function calculateAspectRatioFit(
  srcWidth: number,
  srcHeight: number,
  maxWidth: number,
  maxHeight: number,
) {
  const minViewportWidth = 950;
  const minViewportHeight = 800;

  const _maxWidth = maxWidth < minViewportWidth ? minViewportWidth : maxWidth;
  const _maxHeight = maxHeight < minViewportHeight ? minViewportHeight : maxHeight;
  const ratio = Math.min(_maxWidth / srcWidth, _maxHeight / srcHeight);
  const result = { width: srcWidth * ratio, height: srcHeight * ratio };

  const minImageWidth = 900;
  const minImageHeight = 676;

  if (result.width <= minImageWidth) {
    result.width = minImageWidth;
  }

  if (result.height <= minImageHeight) {
    result.height = minImageHeight;
  }

  return result;
}

export function getExpoIdParam(pathname: string) {
  const urlArray = pathname.split('/');

  return urlArray[2];
}

export function getGameIdParam(pathname: string) {
  const urlArray = pathname.split('/');

  return urlArray[4];
}

export function getInterpolatedValue(value: number, natural: number, current: number) {
  if (!value || !current || !natural) {
    return 0;
  }
  return Math.round((value * current) / natural);
}

export function isMobile() {
  return window.innerWidth <= 768;
}
