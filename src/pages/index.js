import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/common/Layout";
import useWindowSize from "../utility/index";
import DateBar from "../components/DateBar";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "../assets/svg";
import FastImage from "../components/common/FastImage";
import Carousel from "../components/common/Carousel";
import GhostCarousel from '../components/common/GhostCarouesl';

const navItems = [
  { title: "Home", to: "/" },
  { title: "About", to: "/About" },
  { title: "Places", to: "/Places" },
  { title: "Careers", to: "/Careers" },
  { title: "Blog", to: "/Blog" },
];

var startItems = [
  {
    id: 1,
    title: "Get Best Prices ",
    desc: "Pay through our application and save thousands and get amazing rewards ",
    icon: "Price",
  },
  {
    id: 2,
    title: "Covid Safe",
    desc: "We have all the curated hotels that have all the precaution for a corvid safe environment ",
    icon: "Safe",
  },
  {
    id: 3,
    title: "Flexible Payment",
    desc: "Enjoy the flexible payment through our app and get rewards on every payment ",
    icon: "Payment",
  },
  {
    id: 4,
    title: "Find The Best Near You",
    desc: "PFind the best hotels and places to visit near you in a single click ",
    icon: "Human",
  },
];

const Card = () => (
  <div className="card">
    <Image src={require("../../public/Singapore.png")} alt="banner" />
    <div className="content p">
      <div className="title">Singapore</div>
      <p>
        Singapore, officially the Republic of Singapore, is a sovereign island
        city-state in maritime Southeast Asia.
      </p>
      <div className="info">
        <div className="left-side">
          <div className="icons">
            <Icon className="pr-0" name="Location" width={20} height={20} />
            <Icon className="pr-0" name="Location" width={20} height={20} />
            <Icon className="pr-0" name="Location" width={20} height={20} />
          </div>
          <b>1000 Km</b>
        </div>
        <div className="right-side">
          <div className="price">₹ 38,800</div>
          <div className=" ">Approx 2 night trip </div>
        </div>
      </div>
    </div>
  </div>
);

const destinationsNavItems = [
  { id: 1, title: "The Weekend Break" },
  { id: 2, title: "The Package Holiday" },
  { id: 3, title: "The Group Tour" },
  { id: 4, title: "Long Term Slow Travel" },
];

export default function Home() {
  const size = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(1);

  const setting = {
    dragSpeed: 1.25,
    itemWidth: size.width < 400 ? size.width - 50 : size.width * 0.4,
    itemSideOffsets: 15,
  };

  const itemStyle = {
    ...setting,
    width: `${setting.itemWidth}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Travel Page</title>
        </Head>
        {/* HEADER */}
        <nav>
          <span className="logo">
            <Image
              src={require("../../public/logo.png")}
              alt="logo"
              width={61}
              height={20}
            />
          </span>

          aşlsdkfjasşlkjfaşlsj

          {size.width > 480 && (
            <>
              <ul>
                {navItems.map((el, i) => (
                  <li key={i}>
                    <a href={el.to}>{el.title}</a>
                  </li>
                ))}
              </ul>
              <button className="connect-btn">Connect</button>
            </>
          )}
        </nav>

        {/* BANNER */}
        <div className="banner blur">
          <div className="content">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultricies mi eget mauris
            </p>
            <DateBar />
          </div>
        </div>

        {/* START CARDS */}
        <section className="start-cards">
          {startItems.map((el, index) => (
            <div key={index} className="card">
              <div className="icon-card">
                <Icon name={el.icon} width={35} height={35} />
              </div>
              <h4>{el.title}</h4>
              <p>{el.desc}</p>
            </div>
          ))}
        </section>
      </div>

      {/* RECOMENDED DESTINATIONS */}
      <section className="destinations">
        <div className="dots left">
          <Icon name="Dots" width={100} height={100} />
        </div>
        <div className="container">
          <h3>Recommended destination</h3>
          <nav>
            <ul>
              {destinationsNavItems.map((el) => (
                <li
                  onClick={() => setActiveIndex(el.id)}
                  key={el.id}
                  className={el.id === activeIndex ? "active" : ""}
                >
                  {el.title}
                </li>
              ))}
            </ul>
          </nav>
          <div className="cards">
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <Card key={el} />
            ))}
          </div>
        </div>
        <div className="dots right">
          <Icon name="Dots" width={100} height={100} />
        </div>
      </section>

      <div className="container">
        <section className="blogs">
          <h2 className="t-center">Blogs</h2>

          <div className="row blog-container">
            <div className="w-70 mr-2">
              <FastImage
                width="100%"
                height="100%"
                className="s-image center"
                image="/mountain.jpeg"
              >
                <div className="w-30">
                  <h1 className="t-center f-30">
                    The Ultimate Guide to Climbing Mount Kilimanjaro
                  </h1>
                </div>
              </FastImage>
            </div>
            <div className="column w-30">
              <FastImage
                className="s-image mb-2 center"
                width="100%"
                height="100%"
                image="/traveler.jpeg"
              >
                <div className="w-70">
                  <h1 className="t-center f-25">
                    12 Things I’d Tell Any New Traveler
                  </h1>
                </div>
              </FastImage>
              <FastImage
                width="100%"
                className="center"
                height="100%"
                image="/singapore.jpeg"
              >
                <div className="w-70">
                  <h1 className="t-center f-25">
                    The Ultimate Packing List for Female Travelers{" "}
                  </h1>
                </div>
              </FastImage>
            </div>
          </div>
        </section>
        <section className="commends">
          <h2 className="t-center">Happy Customers</h2>

          <Carousel setting={setting} dataLength={10}>
            {[...Array(10)].map((el, index) => (
              <div
                className="commend-card"
                key={index}
                style={{ ...itemStyle }}
              >
                <Icon
                  className="pr-3 pt-2"
                  name="Quote"
                  width={150}
                  height={150}
                />

                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam
                    eget felis eget nunc lobortis. Purus in massa tempor nec.
                    Porta nibh venenatis cras sed. Viverra ipsum nunc aliquet
                    bibendum enim. Risus pretium quam
                  </p>
                  <div className="user row pt-3">
                    <FastImage
                      className="circle"
                      width={50}
                      height={50}
                      image="/singapore.jpeg"
                    />
                    <div className="column j-center pl-1">
                      <div className="name">Malik KORUCU</div>
                      <div className="desc">Project Manger flyhigh</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        {/* <GhostCarousel/> */}

        <footer className="row j-between a-center p-3">
          <div>Copyright © 2020 Malik KORUCU. All rights reserved</div>
          <ul className="d-flex row">
            {navItems.map((el, i) => (
              <li className="pr-2" key={i}>
                <a href={el.to}>{el.title}</a>
              </li>
            ))}
          </ul>
          <div className="social-icons">
            <Icon name="Facebook" width={30} height={30} />
            <Icon className="mx-2" name="Instagram" width={30} height={30} />
            <Icon name="Linkedin" width={30} height={30} />
          </div>
        </footer>
      </div>
    </Layout>
  );
}
