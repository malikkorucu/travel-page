import Image from "next/image";
import { useEffect } from "react";

const FastImage = ({ image, alt, width, height, className }) => {
  return (
    <div
      className={`img ${className}`}
      style={{ width, height, position: "relative" }}
    >
      <Image src={image} layout="fill" alt={alt} />
    </div>
  );
};

export default FastImage;
