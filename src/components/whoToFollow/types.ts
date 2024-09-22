import { StaticImageData } from "next/image";

export interface IWhoToFollow {
  name: string
  tag: string
  avatarUrl: string | StaticImageData;
  altImg: string
  url: string
  followURL: string
}