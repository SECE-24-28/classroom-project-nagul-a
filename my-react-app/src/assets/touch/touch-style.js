import styled from "styled-components";

export const TouchStyle = styled.section`
  width: 100%;
  background: #f84b5a; /* coral/red */
  color: #fff;
  padding: 80px 40px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  /* Center container */
  > .container {
    width: 100%;
    max-width: 1300px;
    display: flex;
    align-items: center;
    gap: 60px;
  }

  /* ---------------- LEFT SIDE ---------------- */
  .left {
    flex: 1.1;
    min-width: 320px;

    h1 {
      font-size: 70px;
      font-weight: 800;
      margin: 0 0 20px 0;
    }

    p {
      max-width: 520px;
      font-size: 18px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 30px;
    }

    .cta {
      display: inline-block;
      background: #fff;
      color: #000;
      padding: 12px 22px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      transition: 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
      }
    }
  }

  /* ---------------- RIGHT SIDE ---------------- */
  .right {
    flex: 0 0 420px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 420px;
  }

  /* smaller white circle */
  .art-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    position: relative;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* smaller image size */
  .art-circle img {
    width: 70%; /* reduced from 90% */
    height: auto;
    border-radius: 50%;
  }

  /* Decorative blobs */
  .right::before {
    content: "";
    position: absolute;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    background: #c93b48;
    right: -200px;
    top: -120px;
    opacity: 0.95;
  }

  .right::after {
    content: "";
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: #c93b48;
    right: -80px;
    top: 120px;
    opacity: 0.7;
  }

  /* small white accent circle */
  .accent {
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    top: 10px;
    right: 20px;
    z-index: 20;
  }

  /* ---------------- RESPONSIVE ---------------- */
  @media (max-width: 820px) {
    padding: 50px 20px;

    .container {
      flex-direction: column;
      text-align: center;
    }

    .right {
      order: -1;
      height: auto;
    }

    .art-circle {
      width: 240px;
      height: 240px;
    }

    .art-circle img {
      width: 70%;
    }

    .right::before,
    .right::after {
      width: 500px;
      height: 500px;
      right: -160px;
      top: -60px;
    }
  }

  @media (max-width: 420px) {
    .left h1 {
      font-size: 40px;
    }

    .art-circle {
      width: 210px;
      height: 210px;
    }

    .right::before,
    .right::after {
      display: none; /* hide blobs for small screens */
    }
  }
`;
