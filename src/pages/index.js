import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/common/Layout";
import useWindowSize from "../utility/index";
import DateBar from "../components/DateBar";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "../assets/svg";

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
    <Image src={require("../public/Singapore.png")} />
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

export default function Home() {
  const size = useWindowSize();

  useEffect(() => {}, []);

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Travel Page</title>
        </Head>
        {/* HEADER */}
        <nav>
          <span className="logo">
            <Image src={require("../public/logo.png")} width={61} height={20} />
          </span>
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

        {/* RECOMENDED DESTINATIONS */}
        <section className="destinations">
          <h3>Recommended destination</h3>
          <nav>
            <ul>
              <li className="active">The Weekend Break</li>
              <li>The Package Holiday</li>
              <li>The Group Tour</li>
              <li>Long Term Slow Travel</li>
            </ul>
          </nav>
          <div className="cards">
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <Card />
            ))}
          </div>
        </section>
 
      </div>
    </Layout>
  );
}
