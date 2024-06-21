import React from "react";
import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social media icons
import image from "./image.png";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpeg";
import image4 from "./image4.png";
import image5 from "./image5.jpg";


const theme = {
  text_primary: "#333",
  text_secondary: "#666",
  background: "#F4F4F4",
  accent: "#007BFF",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${theme.background};
`;

const Header = styled.header`
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  height: 4rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  box-sizing: border-box;
  padding: 0 11rem; /* Adjust the padding as needed */
  @media (max-width: 786px) {
    padding: 0;
  }
`;

const HeaderLeft = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const HeaderRight = styled.div`
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 786px) {
    display: none;
  }
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const PostContainer = styled.div`
  width: 100%;
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
`;

const PostTitle = styled.h1`
  font-size: 32px;
  font-weight: bold; // or 700
  color: black; // or #000
  text-align: center;
`;

const PostMeta = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.text_secondary};
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  gap: 0.8rem;

  & > div:not(:last-child)::after {
    content: "·";
    margin-left: 0.8rem;
  }
`;

const PostContent = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.text_secondary};
  line-height: 1.6;
`;

const PostImg = styled.img`
  border-radius: 2px;
  border-color: #ffffff;
  width: 150%;
  @media (max-width: 786px) {
    width: 20rem;
  }
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

const Sidebar = styled.div`
  position: fixed;
  top: 15rem; /* below the header */
  left: 0;
  width: 3rem;
  height: 100%;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  @media (max-width: 786px) {
    padding-left: 10px;
    width: 1rem;
  }
`;

const SocialIcon = styled.a`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text_primary};
  &:hover {
    color: #ffc470;
  }
`;

const blogPosts = [
  {
    id: 1,
    img: image1,
    title: "Learning in public",
    content:
      "<h2>Introduction:</h2><p>In a world driven by innovation and technological advancement, the pursuit of knowledge has become essential. Traditional learning methods, which often confine us to learning in isolation, can limit our potential and restrict opportunities for collaboration, feedback, and community engagement. In contrast, learning in public offers a valuable alternative. This newsletter explores the concept of learning in public.</p><h2>Content:</h2><p>Learning in public involves creating content, making it accessible to others, and sharing your learning journey with the community. It's not just about acquiring knowledge for yourself but also about contributing to a community that might find your insights helpful.</p><p>Why Should We Practice Learning in Public?</p><ul><li><strong>Knowledge Sharing:</strong> By sharing your journey, you can provide valuable insights and resources to the community. Your experiences might help someone overcome a challenge they are facing.</li><li><strong>Feedback and Growth:</strong> Posting about your projects and learnings can help you receive feedback from experts and peers. This feedback is invaluable and can further develop your skills and improve your work.</li><li><strong>Building Credibility:</strong> Consistently sharing your work demonstrates your dedication and expertise. Over time, this builds credibility and can open doors to new opportunities.</li><li><strong>Networking:</strong> Learning in public helps you connect with experienced individuals in your field. These connections can lead to collaborations, mentorships, and career opportunities.</li></ul><p>How to Practice Learning in Public?<p><ul><li><strong>Active on Social Media:</strong> ngage with communities on different platforms such as Twitter and LinkedIn. Share your learnings, projects, and resources.</li><li><strong>Create Content:</strong> Experiment with different formats like blogs, videos, live streams, or code repositories. Choose the medium that suits you best.</li><li><strong>Document Your Journey:</strong> Keep a record of your progress, challenges, and achievements. This not only helps you track your growth but also serves as inspiration for others.</li></ul><p>Remember, sharing your work is not about bragging; it's about contributing to the collective knowledge and inspiring others on their own learning journeys.</p><h2>Embrace the Power of Learning in Public</h2><p>As you embark on your journey of learning in public, embrace the opportunities it brings for growth, connection, and impact. By sharing your knowledge and experiences, you will grow and empower others to do the same.</p><h2>What's New</h2><p><strong>Container Runtime Interface streaming explained:</strong> Sascha Grunert delves into the intricacies of the Kubernetes Container Runtime Interface (CRI), focusing on the functionality and history of three key Remote Procedure Calls (RPCs).</p><p><strong>Apple signs deal with OpenAI:</strong> An interesting read about Apple's decision to partner with OpenAI for AI functionality in iOS 18, after earlier discussions with Google and OpenAI.</p><p><strong>Google scrambles to manually remove weird AI answers in search:</strong> This blog discusses the rollout of Google's new AI product, which has generated attention for producing unusual and sometimes concerning responses to user queries.</p><h2>",
    author: "Mayuresh Khole",
    date: "Jan 3, 2024",
  },
  {
    id: 2,
    img: image2,
    title: "Mongodb VS Firebase",
    content:
      "<h2>Introduction:</h2><p>Choosing the right database is crucial for the success of any application. With numerous options available, two popular choices stand out: MongoDB and Firebase. Each has its strengths and weaknesses, making the decision challenging. This blog compares MongoDB and Firebase to help you make an informed choice.</p><h2>Content:</h2><p>MongoDB and Firebase serve different purposes and offer unique features. Understanding their differences is essential for selecting the right database for your project.</p><p>Why Consider MongoDB?</p><ul><li><strong>Flexibility:</strong> MongoDB is a NoSQL database that allows for flexible schema design. This flexibility is ideal for applications that require frequent changes to data structure.</li><li><strong>Scalability:</strong> MongoDB supports horizontal scaling, making it suitable for applications with large datasets and high traffic.</li><li><strong>Rich Query Language:</strong> MongoDB offers a powerful query language that supports complex queries and aggregations, providing deep insights into your data.</li><li><strong>Open Source:</strong> As an open-source database, MongoDB has a strong community and extensive documentation, which can be a valuable resource for developers.</li></ul><p>Why Consider Firebase?</p><ul><li><strong>Real-time Data:</strong> Firebase is designed for real-time data synchronization, making it perfect for applications like chat apps and live updates.</li><li><strong>Backend-as-a-Service:</strong> Firebase offers a comprehensive suite of backend services, including authentication, hosting, and cloud functions, which can accelerate development time.</li><li><strong>Integration with Google Services:</strong> As a Google product, Firebase integrates seamlessly with other Google services, such as Google Analytics and AdMob.</li><li><strong>Serverless Architecture:</strong> Firebase's serverless architecture allows developers to focus on building features without managing server infrastructure.</li></ul><p>How to Choose the Right Database?</p><ul><li><strong>Project Requirements:</strong> Assess the specific needs of your project. If you need real-time updates and a comprehensive backend solution, Firebase might be the better choice. If you require flexible schema design and complex queries, MongoDB could be more suitable.</li><li><strong>Development Speed:</strong> Consider the development speed and resources available. Firebase's ready-to-use services can significantly reduce development time, while MongoDB may require more setup but offers greater flexibility.</li><li><strong>Scalability:</strong> Evaluate the scalability needs of your application. Both databases are scalable, but MongoDB's horizontal scaling might be more appropriate for very large datasets.</li><li><strong>Community and Support:</strong> Look at the community and support available for each database. MongoDB's open-source nature means a vast amount of resources and community support, whereas Firebase benefits from Google's robust infrastructure and services.</li></ul><p>Remember, the choice between MongoDB and Firebase depends on your project's unique requirements and goals.</p><h2>Conclusion</h2><p>In conclusion, both MongoDB and Firebase offer powerful features that cater to different needs. By carefully evaluating your project requirements and the strengths of each database, you can choose the right one for your application. Whether you prioritize flexibility, real-time data, scalability, or development speed, understanding these factors will guide you to the best decision.</p><h2>What's New</h2><p><strong>MongoDB 5.0 Release:</strong> The latest release of MongoDB introduces new features such as native time series support, enhanced aggregation capabilities, and live resharding.</p><p><strong>Firebase Introduces Machine Learning Kit:</strong> Google Firebase now offers a machine learning kit, allowing developers to integrate machine learning features into their apps with ease.</p><p><strong>Comparison of NoSQL Databases:</strong> A detailed analysis of various NoSQL databases, including MongoDB, Firebase, Cassandra, and Couchbase, highlighting their pros and cons.</p><h2>",
    author: "Mayuresh Khole",
    date: "March 15, 2024",
  },
  {
    id: 3,
    img:image3,
    title: "From Non-Tech to Tech: How I Became a MERN Stack Developer",
    content: "<h2><strong>Introduction</strong></h2><p>Hello, I'm Mayuresh Khole, and this is my journey from a non-technical background to becoming a proficient MERN stack developer.</p><p>My journey began with a spark of curiosity about technology, despite never having pursued it professionally. Starting from scratch was daunting, yet it was the beginning of an enlightening path. By setting clear, achievable goals, such as understanding the basics of web development and finding the right resources, I gradually built my foundation.</p><p>Resources like FreeCodeCamp, MDN Web Docs, and various YouTube channels provided the knowledge, while hands-on practice through building projects helped solidify my skills. Engaging with a community of fellow learners and diving deeper into technologies like MongoDB, Express.js, React.js, and Node.js (MERN stack) broadened my expertise and prepared me for professional challenges.</p><h2><strong>Conclusion</strong></h2><p>My transition into the tech industry culminated in securing a job as a MERN stack developer, marking a significant milestone in my career. This journey, filled with continuous learning and real-world application, has been incredibly rewarding.</p>",
    author: "Mayuresh Khole",
    date: "May 2, 2024",
  },
  
  {
    id: 4,
    img: image4,
    title: "React vs. Angular: Which JavaScript Framework Should You Choose?",
    content:
      "<h2>Introduction:</h2><p>JavaScript frameworks are essential tools for modern web development, helping developers create dynamic and interactive user interfaces. React and Angular are two of the most popular frameworks in this space. This blog compares React and Angular to help you determine which framework is best suited for your project.</p><h2>Content:</h2><p>React and Angular have distinct philosophies and feature sets. Understanding these differences can help you make an informed choice.</p><p>Why Consider React?</p><ul><li><strong>Component-Based Architecture:</strong> React uses a component-based architecture, allowing developers to build reusable UI components.</li><li><strong>Virtual DOM:</strong> React's Virtual DOM enhances performance by minimizing direct DOM manipulations.</li><li><strong>Flexibility:</strong> React provides flexibility and freedom in choosing libraries and tools, making it easy to integrate with other technologies.</li><li><strong>Strong Community:</strong> React has a large and active community, providing ample resources, tutorials, and third-party libraries.</li></ul><p>Why Consider Angular?</p><ul><li><strong>Full-Featured Framework:</strong> Angular is a full-featured framework that provides everything needed for large-scale applications out of the box.</li><li><strong>Two-Way Data Binding:</strong> Angular's two-way data binding simplifies synchronization between the model and the view.</li><li><strong>Dependency Injection:</strong> Angular's dependency injection system enhances modularity and testability.</li><li><strong>Comprehensive Documentation:</strong> Angular offers comprehensive documentation and a wide range of built-in tools and features.</li></ul><p>How to Choose the Right JavaScript Framework?</p><ul><li><strong>Project Scope:</strong> Consider the scope and complexity of your project. React is suitable for applications requiring high flexibility and custom solutions, while Angular is ideal for large-scale enterprise applications with standardized practices.</li><li><strong>Learning Curve:</strong> Evaluate the learning curve of each framework. React's simplicity and focus on JavaScript make it easier for developers to pick up, while Angular's comprehensive nature might require more time to master.</li><li><strong>Performance Requirements:</strong> Assess the performance requirements of your application. React's Virtual DOM can offer performance benefits for dynamic applications, while Angular's optimizations are beneficial for complex, large-scale projects.</li><li><strong>Community and Ecosystem:</strong> Both frameworks have strong communities, but React's larger ecosystem provides a broader range of third-party libraries and tools.</li></ul><p>Remember, the choice between React and Angular depends on your project's specific needs and goals.</p><h2>Conclusion</h2><p>In conclusion, both React and Angular are powerful JavaScript frameworks that cater to different needs. By carefully evaluating your project requirements and the strengths of each framework, you can make an informed decision. Whether you prioritize flexibility, ease of learning, or a comprehensive out-of-the-box solution, understanding these factors will guide you to the best choice for your application.</p><h2>What's New</h2><p><strong>React 18 Release:</strong> The latest version of React introduces concurrent mode, automatic batching, and new hooks for improved performance and developer experience.</p><p><strong>Angular 13 Updates:</strong> Angular 13 includes improved performance, streamlined build processes, and enhanced testing capabilities.</p><p><strong>Modern JavaScript Frameworks:</strong> An overview of modern JavaScript frameworks, including React, Angular, Vue.js, and Svelte, comparing their features and use cases.</p><h2>",
    author: "Mayuresh Khole",
    date: "May 16, 2024",
  },
  {
    id: 5,
    img: image5,
    title: "Tailwind CSS vs. Bootstrap: Which CSS Framework is Right for You?",
    content:
      "<h2>Introduction:</h2><p>CSS frameworks simplify the process of building responsive and aesthetically pleasing websites. Tailwind CSS and Bootstrap are two of the most popular frameworks available. This blog compares Tailwind CSS and Bootstrap to help you decide which framework is best for your project.</p><h2>Content:</h2><p>Tailwind CSS and Bootstrap have different philosophies and feature sets. Understanding these differences can guide you in making the right choice.</p><p>Why Consider Tailwind CSS?</p><ul><li><strong>Utility-First Approach:</strong> Tailwind CSS uses a utility-first approach, providing low-level utility classes that can be composed to build custom designs without writing custom CSS.</li><li><strong>Customization:</strong> Tailwind CSS is highly customizable, allowing developers to create unique designs that match their brand's identity.</li><li><strong>Performance:</strong> Tailwind CSS generates minimal CSS, reducing file size and improving load times.</li><li><strong>Responsive Design:</strong> Tailwind CSS makes it easy to create responsive designs with its intuitive class naming convention.</li></ul><p>Why Consider Bootstrap?</p><ul><li><strong>Component-Based:</strong> Bootstrap offers a component-based approach with pre-designed components, making it easy to build responsive websites quickly.</li><li><strong>Consistency:</strong> Bootstrap ensures a consistent look and feel across all browsers and devices, reducing cross-browser compatibility issues.</li><li><strong>Documentation:</strong> Bootstrap has comprehensive documentation, providing clear guidelines and examples for developers.</li><li><strong>Community Support:</strong> Bootstrap has a large community and a vast number of third-party themes and plugins available.</li></ul><p>How to Choose the Right CSS Framework?</p><ul><li><strong>Project Requirements:</strong> Consider the specific needs of your project. If you need a highly customizable and lightweight framework, Tailwind CSS might be the better choice. For quick development with pre-designed components, Bootstrap could be more suitable.</li><li><strong>Design Flexibility:</strong> Evaluate the design flexibility required for your project. Tailwind CSS offers more flexibility for custom designs, while Bootstrap provides a consistent design out-of-the-box.</li><li><strong>Learning Curve:</strong> Consider the learning curve of each framework. Tailwind CSS's utility-first approach may require some adjustment, while Bootstrap's component-based approach is straightforward and beginner-friendly.</li><li><strong>Community and Support:</strong> Both frameworks have strong communities, but Bootstrap's larger user base might offer more resources and third-party integrations.</li></ul><p>Remember, the choice between Tailwind CSS and Bootstrap depends on your project's unique requirements and goals.</p><h2>Conclusion</h2><p>In conclusion, both Tailwind CSS and Bootstrap offer powerful features that cater to different needs. By carefully evaluating your project requirements and the strengths of each framework, you can choose the right one for your application. Whether you prioritize customization, quick development, or design consistency, understanding these factors will guide you to the best decision.</p><h2>What's New</h2><p><strong>Tailwind CSS 3.0 Release:</strong> The latest release of Tailwind CSS introduces Just-in-Time mode, improved performance, and new utilities.</p><p><strong>Bootstrap 5 Updates:</strong> Bootstrap 5 removes jQuery dependency, introduces new components, and offers enhanced customization options.</p><p><strong>Modern CSS Frameworks:</strong> An overview of modern CSS frameworks, including Tailwind CSS, Bootstrap, Bulma, and Foundation, comparing their features and use cases.</p><h2>",
    author: "Mayuresh Khole",
    date: "May 26, 2024",
  },
  {
    id: 6,
    img: image,
    title: "Mastering CSS Grid and Flexbox for Responsive Web Design",
    content:
      "<h2>Introduction:</h2><p>Creating responsive web designs is essential in today's multi-device world. CSS Grid and Flexbox are powerful layout systems that enable developers to build flexible and adaptive layouts. Understanding and mastering these tools is key to modern web development.</p><h2>Content:</h2><p>CSS Grid and Flexbox serve different purposes and can be used together to create complex, responsive layouts.</p><p>Using CSS Grid:</p><ul><li><strong>Definition:</strong> CSS Grid is a two-dimensional layout system that allows for the creation of complex grid-based designs.</li><li><strong>Example:</strong> <code>display: grid;</code> is used to define a grid container, and <code>grid-template-columns</code> and <code>grid-template-rows</code> specify the columns and rows.</li><li><strong>Benefits:</strong> CSS Grid is ideal for creating complex layouts with precise control over rows and columns.</li></ul><p>Using Flexbox:</p><ul><li><strong>Definition:</strong> Flexbox is a one-dimensional layout system used to distribute space along a single axis, either horizontally or vertically.</li><li><strong>Example:</strong> <code>display: flex;</code> is used to define a flex container, and <code>justify-content</code> and <code>align-items</code> manage the alignment and distribution of flex items.</li><li><strong>Benefits:</strong> Flexbox is perfect for creating simple layouts and aligning items within a container.</li></ul><p>Combining CSS Grid and Flexbox:</p><ul><li><strong>Complementary Use:</strong> Use CSS Grid for the overall layout structure and Flexbox for aligning items within grid cells.</li><li><strong>Example:</strong> A layout with a CSS Grid for the main structure and Flexbox for item alignment within individual grid areas.</li><li><strong>Benefits:</strong> Combining both systems provides greater flexibility and control over complex designs.</li></ul><p>Responsive Design with Grid and Flexbox:</p><ul><li><strong>Media Queries:</strong> Use media queries to adjust grid and flexbox properties for different screen sizes.</li><li><strong>Auto Layout:</strong> CSS Grid's auto-fill and auto-fit properties help create responsive layouts without specifying exact sizes.</li><li><strong>Flexibility:</strong> Flexbox's ability to grow and shrink items ensures elements adjust to varying screen sizes seamlessly.</li></ul><p>Remember, mastering both CSS Grid and Flexbox is essential for creating modern, responsive web designs that work across all devices.</p><h2>Conclusion</h2><p>In conclusion, understanding and mastering CSS Grid and Flexbox is crucial for building responsive and adaptable web designs. By leveraging the strengths of both layout systems, developers can create complex, flexible, and visually appealing layouts that enhance user experience.</p><h2>What's New</h2><p><strong>CSS Grid Level 2:</strong> The latest specification introduces subgrid, allowing for more nested and complex layouts.</p><p><strong>Flexbox Best Practices:</strong> A comprehensive guide on best practices for using Flexbox in modern web development.</p><p><strong>Responsive Design Techniques:</strong> An in-depth look at advanced techniques for creating responsive designs with CSS Grid and Flexbox.</p><h2>",
    author: "Mayuresh Khole",
    date: "June 13, 2024",
  },
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

    // Ensure all images are loaded before generating the canvas
    const images = Array.from(input.querySelectorAll('img'));
    await Promise.all(images.map(img => {
      if (!img.complete) {
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      }
    }));

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
        <Header>
          <HeaderLeft>Mayuresh Khole</HeaderLeft>
          <HeaderRight>Blogs</HeaderRight>
        </Header>
        <Sidebar>
          <SocialIcon href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/mayuresh-khole/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/MayureshKhole" target="_blank">
            <FaGithub />
          </SocialIcon>
        </Sidebar>
        <PostContainer>
          <PostWrapper id="post-wrapper">
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              <div>By {post.author}</div>
              <div>{post.date}</div>
              
            </PostMeta>
            <PostImg src={post.img} alt={post.title} />
            <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
            <DownloadButton id="download-button" onClick={handleDownload}>
              Download as PDF
            </DownloadButton>
          </PostWrapper>
        </PostContainer>
        <Footer>© 2024 My Blog. All rights reserved.</Footer>
      </Container>
    </ThemeProvider>
  );
};

export default BlogPost;
