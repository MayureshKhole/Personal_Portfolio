import React from "react";
import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import jsPDF from "jspdf"; // added this library for manipulation
import html2canvas from "html2canvas";

const theme = {
  text_primary: "#333",
  text_secondary: "#666",
  background: "#f9f9f9",
  accent: "#007BFF",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: "#FFC470";
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  z-index: 100;
  position: fixed;
  top: 0;
  background-color: #FFC470;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  background: #FFC470;
  text-align: center;
  margin-top: auto;
`;

const PostContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const PostWrapper = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const PostTitle = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.text_primary};
  text-align: center;
`;

const PostMeta = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.text_secondary};
  margin-bottom: 1rem;
  text-align: center;
`;

const PostContent = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.text_secondary};
  line-height: 1.6;
`;

const PostImg = styled.img`
  width: 23rem;
  height: auto;
  padding: 2rem 0;
  border-radius: 8px;
`;

const DownloadButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.accent};
  }
`;

const blogPosts = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLK4GOkJfK0-ekao6_m3qJCFbjgoE4yYTsrqWbBEnRh9o3vXQiCX70xVU2ivZ0-mOXEU&usqp=CAU",
    title: "Security Best Practices for Web Developers",
    content: "<h2>Introduction:</h2><p>Understand the critical importance of security in web development and the common threats that developers must guard against.</p><h2>Content:</h2><p>Explore best practices for securing web applications, including input validation, authentication and authorization, encryption, secure coding practices, and regular security testing. Discuss how to implement these practices to protect against threats such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).</p><h2>Conclusion:</h2><p>Emphasize the necessity of a proactive and comprehensive approach to web security to safeguard user data and maintain trust in your applications.</p>",
    author: "Mayuresh Khole",
    date: "May 27, 2024",
  },
  {
    id: 2,
    img: "https://novatura.co/_astro/frame-3.R60pp0U9.png",
    title: "Enhancing User Experience with Progressive Web Apps (PWAs)",
    content: "<h2>Introduction:</h2><p>Learn about Progressive Web Apps (PWAs) and their role in delivering high-performance, reliable, and engaging user experiences on the web.</p><h2>Content:</h2><p>Explore the features of PWAs, such as offline capabilities, push notifications, and home screen installation, and how they bridge the gap between web and native apps. Discuss best practices for developing and deploying PWAs to enhance user engagement and satisfaction.</p><h2>Conclusion:</h2><p>Highlight the benefits of adopting PWAs for businesses and developers, including improved performance, reduced development costs, and increased user retention.</p>",
    author: "Mayuresh Khole",
    date: "May 27, 2024",
  },
  {
    id: 3,
    img: "https://i.imghippo.com/files/ZPMDG1717657206.jpg",
    title: "From Non-Tech to Tech: How I Became a MERN Stack Developer",
    content: `
      <h2><strong>Introduction</strong></h2>
      <p>Hello, I'm Mayured Khole, and this is my journey from a non-technical background to becoming a proficient MERN stack developer.</p>
      <p>My journey began with a spark of curiosity about technology, despite never having pursued it professionally. Starting from scratch was daunting, yet it was the beginning of an enlightening path. By setting clear, achievable goals, such as understanding the basics of web development and finding the right resources, I gradually built my foundation.</p>
      <p>Resources like FreeCodeCamp, MDN Web Docs, and various YouTube channels provided the knowledge, while hands-on practice through building projects helped solidify my skills. Engaging with a community of fellow learners and diving deeper into technologies like MongoDB, Express.js, React.js, and Node.js (MERN stack) broadened my expertise and prepared me for professional challenges.</p>
      <h2><strong>Conclusion</strong></h2>
      <p>My transition into the tech industry culminated in securing a job as a MERN stack developer, marking a significant milestone in my career. This journey, filled with continuous learning and real-world application, has been incredibly rewarding.</p>`,
    author: "Mayured Khole",
    date: "May 27, 2024",
  },
  {
    id: 4,
    img: "https://www.urvam.com/storage/blog/829778941702012364.png",
    title: "Optimizing Website Performance: Strategies for Speed and Scalability",
    content: "<h2>Introduction:</h2><p>Understand the importance of website performance and how it impacts user experience, search engine rankings, and overall business success.</p><h2>Content:</h2><p>Explore techniques for optimizing website speed and scalability, including image compression, minification of code, content delivery networks (CDNs), caching strategies, and server-side optimizations.</p><h2>Conclusion:</h2><p>Highlight the significance of ongoing monitoring and optimization efforts to maintain peak website performance and provide a seamless user experience across various devices and network conditions.</p>",
    author: "Mayuresh Khole",
    date: "May 27, 2024",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSSu3uLW0lmdwU0CCudc5Vmz3T1hyH4hkCKn5oiCggA&s",
    title: "Responsive Web Design: Creating Interfaces for All Devices",
    content: "<h2>Responsive Web Design: Creating Interfaces for All Devices</h2><p>Discover the principles and techniques behind responsive web design, including fluid grids, flexible images, and media queries. Learn how to ensure your website looks great and functions seamlessly across various screen sizes and devices.</p><p>With the increasing diversity of devices accessing the web, responsive web design has become essential for delivering optimal user experiences. By leveraging CSS media queries and flexible layouts, developers can adapt their websites to accommodate different viewport sizes, from large desktop screens to small mobile devices.</p><p>Furthermore, responsive images play a crucial role in optimizing performance and bandwidth usage. Through techniques like srcset and sizes attributes, web developers can serve appropriately sized images based on the user's device capabilities, ensuring fast load times and minimal data usage.</p>",
    author: "Mayuresh Khole",
    date: "May 27, 2024",
  },
  {
    id: 6,
    img: "https://iabac.org/blog/uploads/images/202309/image_870x_650ece21df858.jpg",
    title: "The Role of DevOps in Modern Software Engineering: Bridging the Gap Between Development and Operations",
    content: "<h2>Introduction:</h2><p>Examine the principles of DevOps and its significance in streamlining collaboration between development, operations, and quality assurance teams to achieve continuous delivery and deployment.</p><h2>Content:</h2><p>Explore the core concepts of DevOps, including infrastructure as code (IaC), continuous integration/continuous delivery (CI/CD), automated testing, and monitoring. Discuss how DevOps practices facilitate faster development cycles, improved reliability, and enhanced scalability.</p><h2>Conclusion:</h2><p>Emphasize the transformative impact of DevOps on software engineering practices, organizational culture, and business outcomes, as well as the importance of fostering a collaborative and automated approach to software development and delivery.</p>",
    author: "Mayuresh Khole",
    date: "May 27, 2024",
  },
  // Add more posts here
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleDownload = async () => {
    const input = document.getElementById("post-wrapper");
    const downloadButton = document.getElementById("download-button");

    // Temporarily hide the download button
    downloadButton.style.display = 'none';

    // Generate the PDF for the full content 
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    const totalPdfHeight = pdf.internal.pageSize.getHeight();
    let heightLeft = pdfHeight;

    let position = 0;
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= totalPdfHeight;

    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= totalPdfHeight;
    }

    pdf.save(`${post.title}.pdf`);

    // Show the download button again
    downloadButton.style.display = 'block';
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>My Blog</Header>
        <PostContainer>
          <PostWrapper id="post-wrapper">
            <PostImg src={post.img} alt={post.title} />
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              <div>By {post.author}</div>
              <div>{post.date}</div>
            </PostMeta>
            <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
            <DownloadButton id="download-button" onClick={handleDownload}>Download as PDF</DownloadButton>
          </PostWrapper>
        </PostContainer>
        <Footer>© 2024 My Blog. All rights reserved.</Footer>
      </Container>
    </ThemeProvider>
  );
};

export default BlogPost;
