export interface ExpoDto {
  id: string;
  previewHeading: string;
  heading: string;
  description: string;
  videoId: string | string[];
  animationDelay: number;
  link?: string;
  position: {
    top: number;
    left: number;
  };
}
