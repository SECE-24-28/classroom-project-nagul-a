import React from "react";
import { TouchStyle } from "./touch-style";
import image from "./image.png"; // Image in same folder

const Touch = () => (
  <TouchStyle>
    <div className="container">
      <div className="left">
        <h1>GET IN TOUCH</h1>
        <p>
          Have questions or feedback? We're here to help. Send us a message and
          we'll respond soon.
        </p>
        <a className="cta">Contact Us</a>
      </div>

      <div className="right">
        <div className="accent" />
        <div className="art-circle">
          <img src={image} alt="Get in touch" />
        </div>
      </div>
    </div>
  </TouchStyle>
);

export default Touch;
