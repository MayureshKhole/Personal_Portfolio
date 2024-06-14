import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.footer_bg}; /* Customize background color */
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Reduced gap between elements */
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 24px; /* Increased font size for logo */
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0; /* Remove margin to make it closer to nav */
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  gap: 1rem;
  justify-content: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem; /* Adjusted font size */
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex; /* Ensures icons are aligned vertically */
  align-items: center; /* Center icon vertically */
  justify-content: center; /* Center icon horizontally */
  margin: 0 12px; /* Increased margin for spacing */
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.2); /* Scale up on hover */
  }
`;

const Copyright = styled.p`
  margin-top: 1rem; /* Adjusted margin */
  font-size: 0.8rem; /* Smaller font size */
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Mayuresh Khole</Logo>
        <Nav>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="_blank"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank"><GitHubIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          #Let's Connect
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
