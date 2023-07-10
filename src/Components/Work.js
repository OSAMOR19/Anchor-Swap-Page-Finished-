import React from "react";
// import PickMeals from "../Assets/pick-meals-image.png";
import Bitcoin  from "../Assets/Bitcoin-Logo.png";
import Litecoin_Logo  from "../Assets/Litecoin_Logo.jpg";
import ethereum  from "../Assets/ethereum.png";

const Work = () => {
  const workInfoData = [
    {
      image: ethereum,
      title: "$ETH",
      text: "$1,857.26",
    },
    {
      image: Bitcoin,
      title: "BTC",
      text: "$30,223 ",
    },
    {
      image: Litecoin_Logo,
      title: "Ltc",
      text: "$98.17",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Assets</h1>
        <p className="primary-text">
          Trade, stake and farm your crypto assets seamlesly using Anchor swap .
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
