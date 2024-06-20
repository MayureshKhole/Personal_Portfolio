import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa'; // Import an icon for the button

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #FFBB70; // Adjust the background color as needed
  color: ${({ theme }) => theme.text}; // Adjust the text color as needed
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark}; // Adjust the hover background color as needed
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && 
        <BackToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </BackToTopButton>
      }
    </>
  );
};

export default ScrollToTop;
