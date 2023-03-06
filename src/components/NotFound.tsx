import React from 'react';
import styled from 'styled-components';
import ReturnHomeButton from './ReturnHomeButton';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Message = styled.p`
  font-size: 1.5rem;
`;

function NotFound() {
    return (
        <NotFoundContainer>
            <Title>404 - Not Found</Title>
            <Message>The page you are looking for does not exist.</Message>
            <ReturnHomeButton to="/" />
        </NotFoundContainer>
    );
}

export default NotFound;