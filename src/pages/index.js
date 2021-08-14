import { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/common/Layout";
import useWindowSize from "../utility/index";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCoffee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import "react-datepicker/dist/react-datepicker.css";
import Icon from "../assets/svg";
const navItems = [
  { title: "Home", to: "/Home" },
  { title: "About", to: "/About" },
  { title: "Places", to: "/Places" },
  { title: "Careers", to: "/Careers" },
  { title: "Blog", to: "/Blog" },
];

export default function Home() {
  const size = useWindowSize();
  const date_1 = useRef(null);
  const date_2 = useRef(null);
  const [dateOpen, setDateOpen] = useState(false);
  const [dateOpen_2, setDateOpen_2] = useState(false);

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Travel Page</title>
        </Head>

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
        <div className="banner blur">
          <div className="content">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultricies mi eget mauris
            </p>

            <div className="date-bar">
              <span className="field">
                <label className="label">Where you want to go</label>
                <div className="input a-center">
                  <Icon name="Search" width={15} height={15} />
                  <input type="text" placeholder="Search your location" />
                </div>
              </span>
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <span
                className="field"
                onClick={() => {
                  setDateOpen_2(true);
                }}
              >
                <label className="label">Check-in</label>
                <span className="input">
                  <DatePicker
                    onClickOutside={() => setDateOpen_2(false)}
                    open={dateOpen_2}
                    ref={date_2}
                    popperProps={{
                      positionFixed: true,
                    }}
                    customInput={<small>Add Date</small>}
                  />
                </span>
              </span>
              <span className="field flex">
                <div
                  onClick={() => {
                    setDateOpen(true);
                  }}
                >
                  <label className="label">Check-out</label>
                  <span className="input">
                    <DatePicker
                      onClickOutside={() => setDateOpen(false)}
                      open={dateOpen}
                      ref={date_2}
                      display={true}
                      popperProps={{
                        positionFixed: true,
                      }}
                      customInput={<small>Add Date</small>}
                    />
                  </span>
                </div>

                <button className="explore-btn">Eplore Now</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
