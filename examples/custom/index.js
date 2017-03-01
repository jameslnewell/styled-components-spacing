import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import styled, {styleSheet, ThemeProvider} from 'styled-components';
import {Margin, Padding} from 'styled-components-spacing';

const theme = {
  breakpoints: {
    sm: 0,
    md: 800,
    lg: 1200
  },
  spacing: {
    a: '25px',
    b: '50px',
  }
};


const HeroPanel = styled.div``;
const Title = styled.h1``;
const SubTitle = styled.h2``;
const Button = styled.button``;

// styleSheet.reset();
const html = renderToStaticMarkup(
  <ThemeProvider theme={theme}>
    <HeroPanel>
      <Padding all={{sm: 'a',  lg: 'b'}}>
        <Title>Hello World</Title>
        <SubTitle>You're on earth!</SubTitle>
        <Margin right={'a'} inline>
          <Button>Blast off!</Button>
        </Margin>
      </Padding>
    </HeroPanel>
  </ThemeProvider>
);
const css = styleSheet.getCSS();

console.log(`HTML\n----------------------------------------------\n${html}\n`);
console.log(`CSS \n----------------------------------------------\n${css}\n`);
