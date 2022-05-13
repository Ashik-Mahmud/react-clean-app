import React from "react";
import bucketGirl from "../../../Assets/image/bucketgirl.png";
const HeroBanner = () => {
  return (
    <div className="hero bg-accent pt-28 overflow-hidden">
      <div className="hero-content justify-between flex-col lg:flex-row-reverse">
        <img
          src={bucketGirl}
          className="max-w-xl rounded-lg mb-[-1rem]"
          alt=""
        />
        <div className="lg:w-2/4">
          <h3 className="text-lg">Best Quality</h3>
          <h1 className="text-5xl mt-3 text-slate-700 font-bold">
            Professional Cleaning Service
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;