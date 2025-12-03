import React from "react";
import { LeadersTomorrowStyle } from "./boxstyle";
// import styled from "styled-components";
// const HelloWorldStyle = styled.div`
// display: flex;
// justify-content: center;
// marigin :0 auto;

//    .capsule {
//     background-color: rgb(252, 41, 71);
//     border-radius: 200px;
//     width: 1400px;
//     padding: 2rem;
//     //align-item:center;

//   }
//   .heading {
//     color: white;
//     font-size: 32px;
//     font-weight: 600;
//     text-align: center;
//   }
//   .sub__heading {
//     color: white;
//     font-weight: 500;
//     font-size: 20px;
//     text-align: center;
//   }
// `;
const Box = () => {
  return (
    <LeadersTomorrowStyle>
      <div className="capsule">
        <h1 className="heading">Learners Today, Leaders Tomorrow</h1>
        <p className="sub-heading">
          With our continuous research and development, we provide you with an
          excellent Aptitude training.
        </p>
      </div>
    </LeadersTomorrowStyle>
  );
};

export default Box;
