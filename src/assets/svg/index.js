import React from "react";
import Image from "next/image";
import Search from "./search.svg";

const icons = {
  Search,
};

const Icon = ({ name, width, height }) => {
  return <Image src={icons[name]} width={width} height={height} />;
};

export default Icon;
