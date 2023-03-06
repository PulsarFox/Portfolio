import React from 'react';
import styled from 'styled-components';

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

const Link = styled.a`
  font-size: 0.9rem;
  color: #3e3e3e;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #222;
  }
`;

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <Container>
      <Image src={imageSrc} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default ProjectCard;