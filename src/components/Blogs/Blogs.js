import styled from "styled-components";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { CardContainer } from "../Projects/ProjectsStyle";
import image from "./image.png";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpeg";
import image4 from "./image4.png";
import image5 from "./image5.jpg";


const BlogContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`;

const BlogWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1rem;
`;

const BlogTitle = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const BlogCard = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostImg = styled.img`
  max-width: 20rem;
  height: 18rem;
  padding: 2rem;
`;

const PostTitle = styled.h2`
  font-size: 20px;
  color: black;
`;

const PostSummary = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function Blogs() {
  const posts = [
    {
      id: 1,
      img: image1,
      title: "Learning in public",
      summary:
        "Explore the concept of learning in public, sharing your knowledge, receiving feedback, and building a community.",
    },
    {
      id: 2,
      img: image2,
      title: "Mongodb VS Firebase",
      summary:
        "A comparison between MongoDB and Firebase to help you choose the right database for your application.",
    },
    {
      id: 3,
      img:image3,
      title: "My Journey from Non-tech to Tech",
      summary:
        "This journey, filled with continuous learning and real-world application, has been incredibly rewarding.",
    },
    {
      id: 4,
      img: image4,
      title: "React Vs Angular",
      summary:
        "A detailed comparision between React and Angular to help you take the right choice for your application. ",
    },
    {
      id: 5,
      img: image5,
      title: "Tailwind CSS vs. Bootstrap: Which CSS Framework is Right for You?",
      summary:
        "A detailed comparison of Tailwind CSS and Bootstrap to help you decide which CSS framework best suits your project.",
    },
    {
      id: 6,
      img: image,
      title: "Mastering CSS Grid and Flexbox for Responsive Web Design",
      summary:
        "Understanding and mastering CSS Grid and Flexbox to create flexible and responsive web designs.",
    },
  ];

  return (
    <BlogContainer id="blogs">
      <BlogWrapper>
        <BlogTitle>Blogs</BlogTitle>
        <Desc>
          Feel free to checkout my blogs! Browse through for interesting reads.
          Stay updated with the latest insights!
        </Desc>
        <CardContainer>
          {posts.map((post) => (
            <BlogCard key={post.id}>
              <PostImg src={post.img} alt="Blog Post Image" />
              <PostTitle>{post.title}</PostTitle>
              <PostSummary>{post.summary}</PostSummary>
              <ReadMoreLink to={`/blog/${post.id}`}>Read More</ReadMoreLink>
            </BlogCard>
          ))}
        </CardContainer>
      </BlogWrapper>
    </BlogContainer>
  );
}

export default Blogs;
