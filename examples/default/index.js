import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import styled, {styleSheet} from 'styled-components';
import {Margin, Padding} from 'styled-components-spacing';

const HeroPanel = styled.div``;
const Title = styled.h1``;
const SubTitle = styled.h2``;
const Button = styled.button``;

// styleSheet.reset();
const html = renderToStaticMarkup(
  <HeroPanel>
    <Padding all={{mobile: 2, tablet: 4, desktop: 6}}>
      <Title>Hello World</Title>
      <SubTitle>You're on earth!</SubTitle>
      <Margin top={1}>
        <Button>Blast off!</Button>
      </Margin>
    </Padding>
  </HeroPanel>
);
const css = styleSheet.getCSS();

console.log(`HTML\n----------------------------------------------\n${html}\n`);
console.log(`CSS \n----------------------------------------------\n${css}\n`);
