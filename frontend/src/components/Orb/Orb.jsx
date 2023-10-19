import React from "react";
import styled, { keyframes } from "styled-components";
import useWindow from "../../utils/useWindow.jsx";

// Define your animation keyframes if needed
//


const moveOrb = keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
      transform: translate(500px, 600px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(250px);
    animation: ${moveOrb} 8s alternate linear infinite;
  `;

const Orb = () => {
  const { width, height } = useWindow();
  console.log(width, height);
  return <OrbStyled width={width} height={height} />;
};

export default Orb;
