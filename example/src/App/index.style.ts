import styled, { createGlobalStyle } from 'styled-components';
import breakpoint, { createBreakpoint, DefaultBreakpointName } from 'styled-components-breakpoint';
import { defaultBreakpoints, breakpointTitles } from './constants';

const staticBreakpoint = createBreakpoint(defaultBreakpoints);

export const GlobalStyle = createGlobalStyle`

  body {

    margin: auto;
    padding: 0 1em;
    min-width: 500px;
    max-width: 800px;

    color: #444;
    font-size: 0.9em;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

    ${staticBreakpoint('tablet')`
      font-size: 1em;
    `}
    
    ${staticBreakpoint('desktop')`
      font-size: 1.1em;
    `}
    
  }

`;

export const Main = styled.main`
  padding-bottom: 1em;
`;

export const H1 = styled.h1`
  margin: 1em 0;
`;

export const H2 = styled.h2`
  margin: 1em 0;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
`;

export const Col1 = styled.div`
  flex-grow: 1;
`;

export const Col2 = styled.div``;

export const Button = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 3px;
`;

export const Instruction = styled.blockquote`
  margin: 0;
  font-size: 0.9em;
  font-weight: bold;
  text-align: right;
`;

export const BreakpointName = styled.div`
  flex-shrink: 0;
  width: 5em;
  &:after {
    font-weight: bold;
    ${(Object.keys(defaultBreakpoints) as DefaultBreakpointName[]).map(
      name => breakpoint(name)`content: '${breakpointTitles[name]}';`
    )}
  }
`;

export const Code = styled.div`
  flex-grow: 1;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #666;
  font-family: monospace;
`;

const innerStyles = `
  display: flex;
  align-items: center;
`;

export const MarginOuter = styled.div`
  overflow: hidden;
  background-color: #bde4a8;
`;

export const MarginInner = styled.div`
  ${innerStyles} padding: 0.75em;
  background-color: #d7f2ba;
`;

export const PaddingOuter = styled.div`
  background-color: #d7f2ba;
`;

export const PaddingInner = styled.div`
  display: flex;
  padding: 0.75em;
  ${innerStyles} background-color: #BDE4A8;
`;
