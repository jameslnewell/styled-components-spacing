// @flow
import * as React from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import breakpoint, { createStatic } from 'styled-components-breakpoint';
import { Margin, Padding } from '../../src';

const DEFAULT_THEME = {
  breakpoints: {
    mobile: 0,
    tablet: 737,
    desktop: 1025
  },
  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '1rem',
    '4': '2rem',
    '5': '4rem',
    '6': '8rem'
  }
};

const CUSTOM_THEME = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '1rem',
    '4': '1.5rem',
    '5': '3rem'
  }
};

const DEFAULT_VALUES = {
  mobile: 2,
  tablet: 4,
  desktop: 6
};

const CUSTOM_VALUES = {
  xs: 1,
  md: 3,
  xl: 5
};

const BREAKPOINT_TITLES = {
  mobile: 'Mobile',
  tablet: 'Tablet',
  desktop: 'Desktop',
  xs: 'XS',
  sm: 'SM',
  md: 'MD',
  lg: 'LG',
  xl: 'XL'
};

const STATIC_BREAKPOINTS = createStatic();

/* eslint-disable no-unused-expressions */
injectGlobal`

  body {

    margin: auto;
    padding: 0 1em;
    min-width: 500px;
    max-width: 800px;

    color: #444;
    font-size: 0.9em;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

    ${STATIC_BREAKPOINTS.tablet`
      font-size: 1em;
    `}
    
    ${STATIC_BREAKPOINTS.desktop`
      font-size: 1.1em;
    `}
    
  }

`;

/* eslint-enable no-unused-expressions */

const Main = styled.main`
  padding-bottom: 1em;
`;

const H1 = styled.h1`
  margin: 1em 0;
`;

const H2 = styled.h2`
  margin: 1em 0;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
`;

const Col1 = styled.div`
  flex-grow: 1;
`;

const Col2 = styled.div``;

const Button = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 3px;
`;

const Instruction = styled.blockquote`
  margin: 0;
  font-size: 0.9em;
  font-weight: bold;
  text-align: right;
`;

const BreakpointName = styled.div`
  flex-shrink: 0;
  width: 5em;
  &:after {
    font-weight: bold;
    ${({ theme }) =>
      Object.keys(theme.breakpoints).map(name => breakpoint(name)`content: '${BREAKPOINT_TITLES[name]}';`)};
  }
`;
const Code = styled.div`
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

const MarginOuter = styled.div`
  overflow: hidden;
  background-color: #bde4a8;
`;

const MarginInner = styled.div`
  ${innerStyles} padding: 0.7em;
  background-color: #d7f2ba;
`;

const WrappedMargin = (props: { prop: string, values: { [string]: number }, children: React.Node }) => (
  <MarginOuter>
    <Margin {...{ [props.prop]: props.values }}>
      <MarginInner>
        <BreakpointName />
        <Code>{props.children}</Code>
      </MarginInner>
    </Margin>
  </MarginOuter>
);

const PaddingOuter = styled.div`
  background-color: #d7f2ba;
`;

const PaddingInner = styled.div`
  display: flex;
  padding: 0.75em;
  ${innerStyles} background-color: #BDE4A8;
`;

const WrappedPadding = (props: { prop: string, values: { [string]: number }, children: React.Node }) => (
  <PaddingOuter>
    <Padding {...{ [props.prop]: props.values }}>
      <PaddingInner>
        <BreakpointName />
        <Code>{props.children}</Code>
      </PaddingInner>
    </Padding>
  </PaddingOuter>
);

export type AppProps = {};

export type AppState = {
  theme: { [name: string]: mixed },
  values: { [name: string]: number }
};

export default class App extends React.Component<AppProps, AppState> {
  state = {
    theme: DEFAULT_THEME,
    values: DEFAULT_VALUES
  };

  handleToggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme !== DEFAULT_THEME ? DEFAULT_THEME : CUSTOM_THEME,
      values: theme !== DEFAULT_THEME ? DEFAULT_VALUES : CUSTOM_VALUES
    }));
  };

  render() {
    const { theme, values } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <H1>styled-components-spacing</H1>

          <Grid>
            <Col1>
              <Button onClick={this.handleToggleTheme}>
                {theme === DEFAULT_THEME ? 'Use custom breakpoints' : 'Use default breakpoints'}
              </Button>
            </Col1>
            <Col2>
              <Instruction>Try resizing the window. 👉</Instruction>
            </Col2>
          </Grid>

          <H2 id="margin">Margin</H2>
          <WrappedMargin prop="all" values={values}>
            {`<Margin all={ ${JSON.stringify(values, null, 2)} } /> `}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="vertical" values={values}>
            {`<Margin vertical={ ${JSON.stringify(values, null, 2)} } /> `}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="horizontal" values={values}>
            {`<Margin horizontal={ ${JSON.stringify(values, null, 2)} }} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="top" values={values}>
            {`<Margin top={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="right" values={values}>
            {`<Margin right={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="bottom" values={values}>
            {`<Margin bottom={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="left" values={values}>
            {`<Margin left={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>

          <H2 id="padding">Padding</H2>
          <WrappedPadding prop="all" values={values}>
            {`<Padding all={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="vertical" values={values}>
            {`<Padding vertical={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="horizontal" values={values}>
            {`<Padding horizontal={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="top" values={values}>
            {`<Padding top={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="right" values={values}>
            {`<Padding right={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="bottom" values={values}>
            {`<Padding bottom={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="left" values={values}>
            {`<Padding left={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
        </Main>
      </ThemeProvider>
    );
  }
}
