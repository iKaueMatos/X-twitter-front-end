import { StaticImageData } from "next/image";

export interface ISingleNews {
  title: string;
  date: number;
  text: string;
  mainTag: string;
  newsImg: string | StaticImageData;
  newsAlt: string;
}