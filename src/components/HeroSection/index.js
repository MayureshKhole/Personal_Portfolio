import React from "react";
import styled from "styled-components";
import Imgh from "./img.jpeg"

import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  HContainer,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import GitHub from "@mui/icons-material/GitHub";
import "./index.css";
import { ImagesearchRollerOutlined } from "@mui/icons-material";

const HeroSection = () => {
  const SocialMediaIcons = styled.div`
    display: flex;

    align-items: center; // Ensure items are aligned vertically in the center
    justify-content: center; // Center the buttons horizontally
  `;

  const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;

    align-items: center; // Ensure items are aligned vertically in the center
    justify-content: center; // Center the buttons horizontally
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  `;

  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.facebook} target="display">
                <FacebookIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <LinkedInIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.github} target="display">
                <GitHub />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="display">
                <InstagramIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <HContainer>
              <Button
                href={Bio.resume}
                target="display"
                className="button-outline-primary"
                style={{
                  backgroundColor:"#FFC470",}}
              >
                View Resume
              </Button>
              <a href="#contact">
                <button
                  type="button"
                  className="button-outline-success"
                  style={{
                    backgroundColor:"#FFC470",
                    padding: "2px",
                    border: "1px solid white",
                    outline: "1px solid white",
                  }}
                >
                  Hire Me
                </button>
              </a>
            </HContainer>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={Imgh} />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
