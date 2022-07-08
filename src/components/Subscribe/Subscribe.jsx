import React from "react";
import css from "./subscribe.css";
import Button from "../Button";
import InputEmail from "../InputEmail";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-text">
        <h1 className="subcribe-text__heading">Get early access today</h1>
        <p className="subcribe-text__sub">
          It takes a minute to sign up and our free starter tier is extremely
          generous. If you have any questions, our support team would be happy
          to help you.
        </p>
      </div>
      <div className="subscribe-input">
        <InputEmail
          placeholder={"Enter your Email"}
          padding={"0.7rem 1rem"}
          width={"450px"}
        />
        <Button
          name={"Get Started For Free"}
          width={"40%"}
          padding={"0.9rem 1rem"}
          cursor={"pointer"}
          border={"none"}
          bgColor={"rgb(39, 162, 167)"}
          color={"#fff"}
          br={"3px"}
        />
      </div>
    </section>
  );
};

export default Subscribe;
