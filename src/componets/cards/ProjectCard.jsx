import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 570px;
  background-color: ${({ theme }) => theme.Card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 5px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + "B3"};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + "CC"};
  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "none" : "3")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Toggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 12px;
  align-self: flex-start;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.a`
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: background 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const Members = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.Card};
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description expanded={expanded}>{project.description}</Description>
        {project.description.length > 120 && (
          <Toggle onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less" : "Read more"}
          </Toggle>
        )}
      </Details>
      {project.member && (
        <Members>
          {project.member.map((member, index) => (
            <Avatar key={index} src={member.img} alt="Member avatar" />
          ))}
        </Members>
      )}
      <Buttons>
        <Button href={project.github} target="_blank" rel="noopener noreferrer">
          View Code
        </Button>
        {project.webapp && (
          <Button
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
      </Buttons>
    </Card>
  );
};

export default ProjectCard;
