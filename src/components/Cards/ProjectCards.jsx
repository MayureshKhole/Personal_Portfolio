import React, { useState } from "react";
import styled from "styled-components";

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s;
  max-height: 0; // Ensure it starts with 0 height
  opacity: 0; // Start fully transparent
  visibility: hidden; // Not visible initially
  &::after {
    // This clears the float, if any, ensuring layout doesn't break
    content: "";
    display: table;
    clear: both;
  }
`;

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
export const Card = styled.div`
  width: 330px;
  height: 390px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover ${Description} {
    max-height: 200px; // Adjust based on your content's need
    opacity: 1; // Fully visible
    visibility: visible; // Now visible
  }
`;
export const bCards = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.card};
  align-items: center;
  gap: 38px;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal }) => {
  const [hover, setHoverStyle] = useState({});

  const handlemouseon = () => {
    setHoverStyle({ height: "490px" });
  };

  const handlemouseoff = () => {
    setHoverStyle({});
  };
  const handlehref = () => {
    window.location.href = project.github;
  };

  return (
    <Card
      onClick={() => setOpenModal({ state: true, project: project })}
     
      style={hover}
    >
      <Image src={project.image} onClick={handlehref} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details onClick={handlehref}>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {/* <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img} />
                ))}
            </Members> */}
      {/* <Button>View Project</Button> */}
    </Card>
  );
};

export default ProjectCards;
