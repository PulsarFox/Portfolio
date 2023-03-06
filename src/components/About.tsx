import React from 'react';
import styled from 'styled-components';
import ReturnHomeButton from './ReturnHomeButton';

const AboutContainer = styled.div`
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

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const ContactInfoLabel = styled.span`
  font-size: 1.5rem;

  &::after {
    content: ':';
    margin-right: 0.5rem;
  }
`;
const ContactInfoData = styled.span`
  font-size: 1.5rem;
`;

function About() {
    return (
        <AboutContainer>
            <Title>About Me</Title>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                Praesent eget faucibus velit, vitae tristique justo. Sed molestie nisi
                vitae nibh faucibus, vel blandit nulla vehicula. Aliquam nec nulla id
                risus luctus malesuada sed nec orci. Duis pretium justo ac est
                vehicula, vel venenatis orci bibendum. Nam euismod nulla a risus
                consequat, vel efficitur nisi ultrices. Donec at nisl purus. Donec eget
                tellus euismod, malesuada justo vel, volutpat elit. Nulla facilisi.
                Vivamus eget semper velit. Vivamus ac malesuada massa, eu blandit ante.
                Etiam tincidunt turpis in eros euismod consequat. Duis ullamcorper ex
                quis mi iaculis suscipit. Fusce bibendum lectus eget ipsum lobortis,
                at ultrices magna bibendum.
            </p>
            <ContactInfoContainer>
                <ContactInfoLabel>Email:</ContactInfoLabel>
                <ContactInfoData>example@example.com</ContactInfoData>
            </ContactInfoContainer>
            <ContactInfoContainer>
                <ContactInfoLabel>Phone:</ContactInfoLabel>
                <ContactInfoData>(123) 456-7890</ContactInfoData>
            </ContactInfoContainer>
            <ContactInfoContainer>
                <ContactInfoLabel>Town:</ContactInfoLabel>
                <ContactInfoData>San Francisco, CA</ContactInfoData>
            </ContactInfoContainer>
            <ReturnHomeButton to="/" />
        </AboutContainer>
    );
}

export default About;