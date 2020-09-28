export interface IImagePixelData {
  x: number;
  y: number;
  color: string;
}

export interface IImageData {
  colorId: string;
  data: IImagePixelData[];
}
