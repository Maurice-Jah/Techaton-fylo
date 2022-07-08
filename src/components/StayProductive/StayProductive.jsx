import React from "react";
import css from "./stayProductive.css";
import avatar from "../../images/avatar-testimonial.jpg";
import productive_img from "../../images/illustration-2.svg";

const StayProductive = () => {
  return (
    <section className="stayProductive">
      <div className="stayProductive-text">
        <h1>Stay Productive Wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your storage needs
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collavoration. No email attachments required!
        </p>

        <a href="">See how Fylo works</a>
        <article className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </p>
          <div className="testimonial-1">
            <img src={avatar} alt="" />
            <div className="portfolio">
              <p>
                <strong>Kyle Burton</strong>
              </p>
              <p>Founder & CEO Huddle</p>
            </div>
          </div>
        </article>
      </div>
      <div className="stayProductive-img">
        <img src={productive_img} alt="productive-image" />
      </div>
    </section>
  );
};

export default StayProductive;
