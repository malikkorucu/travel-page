import Image from "next/image";

const FastImage = ({ children, ...props }) => {
  const { image, alt, width, height, className } = props;

  return (
    <div
      className={`img ${className}`}
      style={{ width, height, position: "relative" }}
    >
      <div className="image-content">{children}</div>

      <Image src={image} layout="fill" alt={alt} />
    </div>
  );
};

export default FastImage;
