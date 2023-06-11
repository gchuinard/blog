import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/bootstrap/Github';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';

const FooterContainer = styled.footer`
    height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  background-color: #000000;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.a`
  color: #fff;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
        box-shadow: 0 0 20px #870FA5, 0 0 30px #870FA5, 0 0 40px #870FA5;
  }
`;

const CopyRight = styled.p`
  color: #fff;
  font-size: 0.8rem;
  margin-left: auto;
`;

const FooterComponent: React.FC = () => {
    return (
        <FooterContainer>
            <IconContainer>
                <StyledIcon href="https://github.com/gchuinard" target="_blank" rel="noopener noreferrer">
                    <Github size="40" />
                </StyledIcon>
                <StyledIcon href="https://linkedin.com/in/gchuinard" target="_blank" rel="noopener noreferrer">
                    <Linkedin size="40" />
                </StyledIcon>
            </IconContainer>
            <CopyRight>&copy; {new Date().getFullYear()} Gautier Chuinard</CopyRight>
        </FooterContainer>
    )
}

export default FooterComponent;
