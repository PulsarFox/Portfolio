import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;

const MenuItem = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
`;

function Home() {
    return (
        <HomeContainer>
            <Title>Welcome to my portfolio</Title>
            <Menu>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/portfolio">Portfolio</MenuItem>
            </Menu>
        </HomeContainer>
    );
}

export default Home;