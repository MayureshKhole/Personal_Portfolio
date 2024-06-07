import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs/Blogs';
import BlogPost from './components/Blogs/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Import the ScrollToTop component
import styled from 'styled-components';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Body>
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
              <Blogs />
              <Contact />
            </Wrapper>
            <Footer />
          </>} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
          <ScrollToTop /> {/* Add the ScrollToTop component here */}
  
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;


// firebase deploy --only hosting:mayuresh-khole-profile