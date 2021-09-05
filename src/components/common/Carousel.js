import { useEffect, useRef, useState } from "react";

const Carousel = ({ children, ...props }) => {
  const { setting, dataLength } = props;

  const [speed, setSpeed] = useState(1.25);
  const [isClicked, setIsClicked] = useState(false);
  const [startX, setStartX] = useState(null);
  const [offsetLeft, setOffsetLeft] = useState(null);
  const cRef = useRef();

  const cWrapperStyle = {
    width: `${
      dataLength * ((setting.itemWidth + 2) * setting.itemSideOffsets)
    }px`,
    height: `${setting.itemHeight}px`,
  };

  const convertInteger = (el) => {
    // extracting 20 from translateX(20px) and converting it to integer with parsInt
    return parseInt(el.replace("translateX(", "").replace("px)", ""), 10);
  };

  const handleMouseDown = (e) => {
    const carousel = cRef.current;
    e.persist();

    //mouse ' un sol tarafa olan uzaklığı
    const _startX = e.pageX - carousel.offsetLeft;
    const _offsetLeft = convertInteger(carousel.firstChild.style.transform);

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - _startX) * setting.dragSpeed;

    setIsClicked(true);
    setStartX(_startX);
    setOffsetLeft(_offsetLeft);

    carousel.firstChild.style.cssText = `
    transform: translateX(${_offsetLeft + walk}px);
    transition: transform 0.0s ease-in-out;
  `;
  };

  const handleMouseLeave = () => {
    handleSnap();
  };

  const handleMouseUp = () => {
    handleSnap();
  };

  const handleMouseMove = (e) => {
    const carousel = cRef.current;

    if (!isClicked) return;
    e.preventDefault();

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * setting.dragSpeed;
    carousel.firstChild.style.transform = `translateX(${offsetLeft + walk}px)`;
  };

  const handleSnap = () => {
    const { _data, itemWidth, itemSideOffsets } = setting;
    const carousel = cRef.current;

    setIsClicked(false);
    carousel.classList.remove("active");

    const tempThresholdOffset = convertInteger(
      carousel.firstChild.style.transform
    );

    const end =
      dataLength * (itemWidth + 2 * itemSideOffsets) -
      30 -
      carousel.offsetWidth;

    if (Math.abs(tempThresholdOffset) > end || tempThresholdOffset > 0) {
      setIsClicked(false);
      carousel.firstChild.style.cssText = `
        transform: translateX(${tempThresholdOffset > 0 ? 0 : -end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
      return false;
    }
    return true;
  };

  const next = (e) => {
    const carousel = cRef.current;

    carousel.firstChild.style.cssText = `
      transform: translateX(${offsetLeft - setting.itemWidth}px);
      transition: transform 0.5s ease-in-out;
    `;

    setOffsetLeft(offsetLeft - setting.itemWidth);
  };

  const pre = (e) => {
    const carousel = cRef.current;

    carousel.firstChild.style.cssText = `
    transform: translateX(${offsetLeft + setting.itemWidth}px);
    transition: transform 0.5s ease-in-out;
  `;
    setOffsetLeft(offsetLeft + setting.itemWidth);
  };

  return (
    <>
      {/* <button onClick={() => pre()}>geri</button> */}
      <div
        ref={cRef}
        className="carousel"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          className="wrapper"
          style={{ transform: "translateX(0px)", ...cWrapperStyle }}
        >
          {children}
        </div>
      </div>
      {/* <button onClick={() => next()}>ileri</button> */}
    </>
  );
};

export default Carousel;
