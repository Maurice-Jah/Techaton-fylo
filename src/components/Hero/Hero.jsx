import React from "react";
import hero__image from "../../images/illustration-1.svg";
import css from "./hero.css";
import Button from "../Button";
import InputEmail from "../InputEmail";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__side1">
        <h1>All your files in secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them whenever you need, share and collaborate with friends, family and
          co-workers.
        </p>
        <div className="hero__inputs">
          <InputEmail
            placeholder="Enter your Email"
            padding="0.7rem 1rem"
            width="300px"
          />
          <Button
            name="Get Started"
            width="100%"
            padding="0.9rem 3rem"
            cursor="pointer"
            border="none"
            bgColor="#2F65F9"
            color="#fff"
            br="3px"
          />
        </div>
      </div>
      <div className="hero__side2">
        <img src={hero__image} alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
