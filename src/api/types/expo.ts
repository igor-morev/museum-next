export interface ExpoDto {
  id: string;
  number: string;
  prevId: null | string;
  nextId: null | string;
  heading: string;
  description: string;
  videoId?: string;
  videoIds?: string[];
  link?: string;
  position: {
    top: number;
    left: number;
  };
}
