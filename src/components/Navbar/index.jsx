import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ToggleButton, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, ToggleSwitch, ToggleCircle, Icon } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import './index.css'

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = () => {
    toggleTheme(); 
  };

  function MayureshKhole() {
    return <div>Mayuresh Khole</div>;
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <Span><MayureshKhole /></Span>
          </a>
        </NavLogo>
        <MobileIcon>
          {/* Hamburger menu */}
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#blogs'>Blogs</NavLink>
        </NavItems>
        <ButtonContainer>
          <ToggleSwitch onClick={toggleTheme} darkMode={darkMode}>
            <ToggleCircle darkMode={!darkMode} />
            <Icon position="4px" active={!darkMode}><FaMoon /></Icon>
            <Icon position="calc(100% - 20px)" active={darkMode}><FaSun /></Icon>
          </ToggleSwitch>

        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            {/* <MobileLink href='#blogs' onClick={() => setIsOpen(!isOpen)}>Blogs</MobileLink> */}
            {/* <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;