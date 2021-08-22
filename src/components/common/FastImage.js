import Image from "next/image";
import { useEffect } from "react";

const FastImage = ({ image, alt, width, height, className }) => {
  return (
    <div
      className={`img ${className}`}
      style={{ width, height, position: "relative" }}
    >
      <img src={image} alt={alt} width="100%" height="100%" />
    </div>
  );
};

export default FastImage;
