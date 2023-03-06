import React from 'react';
import styled from 'styled-components';
import ProjectList, { ProjectData } from './ProjectList';
import ReturnHomeButton from './ReturnHomeButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 2rem;
`;

const Portfolio: React.FC = () => {
    return (
        <Container>
            <Title>Portfolio</Title>
            <Subtitle>Here are some of my projects:</Subtitle>
            <ProjectList />
            <ReturnHomeButton to='/' />
        </Container>
    );
};

export default Portfolio;