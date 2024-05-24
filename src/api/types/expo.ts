export interface ExpoDto {
  id: string;
  prevId: null | string;
  nextId: null | string;
  previewHeading: string;
  heading: string;
  description: string;
  videoId: string | string[];
  link?: string;
  position: {
    top: number;
    left: number;
  };
}
