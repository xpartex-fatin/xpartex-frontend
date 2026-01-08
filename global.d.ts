declare module "*.css";
declare module "*.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";

declare module "next/image" {
  import * as React from "react";
  interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    width?: number | string;
    height?: number | string;
    layout?: "fill" | "fixed" | "intrinsic" | "responsive";
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    quality?: number | string;
    priority?: boolean;
    loading?: "lazy" | "eager";
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    unoptimized?: boolean;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}
