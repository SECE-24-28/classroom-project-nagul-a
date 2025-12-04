import React from "react";
import { ImpactStyle } from "./impact-style";
import college from "./college.png";
import bag from "./bag.png";
import book from "./book.png";
import people from "./people.png";

const Impact = () => {
  return (
    <ImpactStyle>
      <div className="impact">
        <p className="para">
          Impact at a <span className="glan">Glance</span>
        </p>
        <div>
          <div className="box">
            <div className="pink">
              <div>
                <p className="head">Colleges</p>
                <p className="val">100+</p>
              </div>
              <img src={college} alt="college" className="image" />
            </div>
            <div className="blue">
              <div>
                <p className="head">Students</p>
                <p className="val">1,00,000</p>
              </div>
              <img src={bag} alt="bag" className="image" />
            </div>
          </div>
        </div>

        <br />
        <br />

        <div>
          <div className="box">
            <div className="green">
              <div>
                <p className="head">Study Materials</p>
                <p className="val">1000+</p>
              </div>
              <img src={book} alt="book" className="image" />
            </div>
            <div className="orange">
              <div>
                <p className="head">Professional Trainers</p>
                <p className="val">150</p>
              </div>
              <img src={people} alt="people" className="image" />
            </div>
          </div>
        </div>
        <br />
      </div>
    </ImpactStyle>
  );
};

export default Impact;
