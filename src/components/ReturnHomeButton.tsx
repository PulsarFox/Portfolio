import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  filter: grayscale(100%);
  opacity: 0.7;

  &:hover {
    background-color: #fff;
    color: #000;
    filter: grayscale(0%);
    opacity: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
type ReturnHomeButtonProps = {
  to: string;
};

function ReturnHomeButton({ to }: ReturnHomeButtonProps) {
  return <Button to={to}>Return Home</Button>;
}

export default ReturnHomeButton;