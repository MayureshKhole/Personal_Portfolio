import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 120%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 1000px;
  padding-left:3rem;
  border-radius: 1%;
  // border: 2px solid ${({ theme }) => theme.primary};

  /* Add transition for smooth animation */
  transition: transform 0.3s ease;

  /* Add hover effect */
  &:hover {
    transform: scale(1.05); /* Scale the image slightly on hover */
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;


export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;


export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  text-align: justify; /* Add this line for text alignment */

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    display:none;
  }  
    
  @media (max-width: 640px) {
   &::before {
      content: "I am a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack developer";
      font-size: 16px;
      line-height: 32px;
      color: ${({ theme }) => theme.text_primary + 95}; /* Text color */
      text-align: center; /* Center alignment for mobile */
      display: block;
      z-index:-100;
  }
`;

export const HContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center; // Ensure items are aligned vertically in the center
  justify-content: center; // Center the buttons horizontally

  @media (max-width: 640px) {
  padding-top:2rem;
    flex-direction: column; // Stack buttons vertically
    gap: 2rem; // Adjust gap between buttons
  }

`;

export const ResumeButton = styled.a`
  display: inline-block;
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, background-color 0.4s ease-in-out, color 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: "#AD88C6";
    background-color: #ED9455;
   
    font-size: 18px;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

