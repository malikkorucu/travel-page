import React from "react";
import Image from "next/image";
import Search from "./search.svg";
import Price from "./madal.svg";
import Safe from "./safe.svg";
import Payment from "./payment.svg";
import Human from "./human.svg";
import Location from "./location.svg";
import Meal from "./meal.svg";
import Fly from "./fly.svg";
import Quote from "./quote.svg";
import Dots from './dots.svg';
import Facebook from './facebook.svg';
import Linkedin from './linkedin.svg';
import Instagram from './instagram.svg';

const icons = {
  Fly,
  Meal,
  Location,
  Search,
  Safe,
  Payment,
  Human,
  Price,
  Quote,
  Dots,
  Facebook,
  Linkedin,
  Instagram
};

const Icon = ({ name, width, height, className }) => {
  return (
    <span className={className}>
      <Image src={icons[name]} width={width} height={height} alt="icon" />
    </span>
  );
};

export default Icon;
