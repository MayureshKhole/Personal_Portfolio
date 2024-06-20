import React from "react";
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
  SocialMediaIcons,
  SocialMediaIcon,
  CustomButton
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHub from "@mui/icons-material/GitHub";
import HeroBgAnimation from "../HeroBgAnimation";
import Imgh from "./img.jpeg";

const HeroSection = () => {
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
              <SocialMediaIcon href={Bio.facebook} target="_blank">
                <FacebookIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="_blank">
                <LinkedInIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.github} target="_blank">
                <GitHub />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="_blank">
                <InstagramIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <HContainer>
              <CustomButton
                href={Bio.resume}
                target="_blank"
                className="primary"
              >
                View Resume
              </CustomButton>
              <CustomButton as="button" onClick={scrollToContact} className="secondary">
                Hire Me
              </CustomButton>
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
