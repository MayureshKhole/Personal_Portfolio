import React, { useState } from 'react'
import styled from 'styled-components'
import Chip from '@mui/material/Chip';
import '../../App.css'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
        
    }
`;

const LeftContent = styled.div`
    flex: 1;
`;

const RightContent = styled.div`
    margin-left: 20px; /* Adjust as needed */
    @media only screen and (max-width: 768px){
        display:none;
    }
`;

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 1000px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 315px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 30px;
        width:25px;

    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`


const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`


const ExpandIcon = styled.img`
    height: 30px;
    width: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }

    @media only screen and (max-width: 768px){
        width:20px;
        height:20px;

    }
`;

const ExpandIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    &:hover ${ExpandIcon} {
        opacity: 0.7;
    }

   
`;

const ExperienceCard = ({ experience }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Card>
            <ExpandIconContainer onClick={toggleOpen}>
                <ExpandIcon src={isOpen ? "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" : "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png"} />
            </ExpandIconContainer>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            {isOpen && (
                <Description>
                    <LeftContent>
                        {experience?.desc && Array.isArray(experience.desc) && (
                            <>
                                {experience.desc.map((des, index) => (
                                    <ItemWrapper key={index}>
                                        <Span>• {des}</Span>
                                    </ItemWrapper>
                                ))}
                            </>
                        )}
                        {experience?.skills && (
                            <>
                                <br />
                                <Skills>
                                    <b>Skills:</b>
                                    <ItemWrapper>
                                        {experience.skills.map((skill, index) => (
                                            <Chip key={index} label={skill} 
                                            style={{ backgroundColor: '#FFC470', color: 'black', borderRadius:"5px" }} />
                                        ))}
                                    </ItemWrapper>
                                </Skills>
                            </>
                        )}
                    </LeftContent>
                    <RightContent>
                        {/* Your new image */}
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUS3Y6PoftYViYhIzipfPSx3ALHAJ1DI5LlG86gqWiJw&s" alt="New Image" />
                    </RightContent>
                </Description>
            )}
            {experience.doc && (
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    );
}

export default ExperienceCard;