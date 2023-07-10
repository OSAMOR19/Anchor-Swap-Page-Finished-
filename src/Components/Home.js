import React from "react";
import BannerBackground from "../Assets/Anchor_banner_logo-removebg-preview.png";
// import BannerImage from "../Assets/home-banner-image.png";
import AnchorSwapIcon from "../Assets/anchorswaplogo.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Best Defi Platform</h1>
          <p className="primary-text">
            <b>AnchorSwap</b> is a decentralized exchange built on the Arbitrum
            Chain that allows users to trade cryptocurrencies in a trustless and
            decentralized manner.
          </p>

          <a href="/swap">
            <button className="secondary-button">
              Trade Now <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section box-shadow animate">
          <img src={AnchorSwapIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
