import React from "react";
import { logo } from "../assets/";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="tldrifyy logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("#");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        <span className="blue_gradient">TL;DR? </span>
        <br className="max-md: hidden" />
        We got you covered.
      </h1>
      <h2 className="desc">
        Don't Fear the Deep Dive: We'll Hold Your Hand Through the TL;DR Sea.
      </h2>
    </header>
  );
};

export default Hero;
