import * as React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Spacing, ThemedMarginProps, ThemedPaddingProps } from '../../../src';
import {
  GlobalStyle,
  MarginOuter,
  MarginInner,
  Code,
  BreakpointName,
  PaddingOuter,
  PaddingInner,
  H2,
  Main,
  H1,
  Grid,
  Col1,
  Button,
  Col2,
  Instruction
} from './index.style';
import {
  defaultTheme,
  customTheme,
  defaultValues,
  customValues,
  DefaultBreakpointName,
  DefaultSpacingName,
  CustomSpacingName
} from './constants';
import { ValueOrValueMap } from 'styled-components-breakpoint';

type Values =
  | ValueOrValueMap<DefaultBreakpointName, DefaultSpacingName>
  | ValueOrValueMap<DefaultBreakpointName, CustomSpacingName>;

const WrappedMargin = (props: { prop: keyof ThemedMarginProps; values: Values; children: React.ReactNode }) => {
  const spacing = { [props.prop]: props.values };
  return (
    <MarginOuter>
      <Spacing {...spacing}>
        <MarginInner>
          <BreakpointName />
          <Code>{props.children}</Code>
        </MarginInner>
      </Spacing>
    </MarginOuter>
  );
};

const WrappedPadding = (props: { prop: keyof ThemedPaddingProps; values: Values; children: React.ReactNode }) => {
  const spacing = { [props.prop]: props.values };
  return (
    <PaddingOuter>
      <Spacing {...spacing}>
        <PaddingInner>
          <BreakpointName />
          <Code>{props.children}</Code>
        </PaddingInner>
      </Spacing>
    </PaddingOuter>
  );
};

export const App: React.FC = () => {
  const [theme, setTheme] = React.useState<DefaultTheme>(defaultTheme);
  const [values, setValues] = React.useState<Values>(defaultValues);

  const handleToggleTheme = () => {
    setTheme(theme => (theme !== defaultTheme ? defaultTheme : customTheme));
    setValues(values => (values !== defaultValues ? defaultValues : customValues));
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Main>
          <H1>styled-components-spacing</H1>

          <Grid>
            <Col1>
              <Button onClick={handleToggleTheme}>
                {theme === defaultTheme ? 'Use custom spacings' : 'Use default spacings'}
              </Button>
            </Col1>
            <Col2>
              <Instruction>Try resizing the window. 👉</Instruction>
            </Col2>
          </Grid>

          <H2 id="margin">Margin</H2>
          <WrappedMargin prop="m" values={values}>
            {`<Spacing m={ ${JSON.stringify(values, null, 2)} } /> `}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="my" values={values}>
            {`<Spacing my={ ${JSON.stringify(values, null, 2)} } /> `}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="mx" values={values}>
            {`<Spacing mx={ ${JSON.stringify(values, null, 2)} }} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="mt" values={values}>
            {`<Spacing mt={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="mr" values={values}>
            {`<Spacing mr={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="mb" values={values}>
            {`<Spacing mb={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>
          <br />
          <WrappedMargin prop="ml" values={values}>
            {`<Spacing ml={${JSON.stringify(values, null, 2)}} />`}
          </WrappedMargin>

          <H2 id="padding">Padding</H2>
          <WrappedPadding prop="p" values={values}>
            {`<Spacing p={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="py" values={values}>
            {`<Spacing py={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="px" values={values}>
            {`<Spacing px={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="pt" values={values}>
            {`<Spacing pt={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="pr" values={values}>
            {`<Spacing pr={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="pb" values={values}>
            {`<Spacing pb={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
          <br />
          <WrappedPadding prop="pl" values={values}>
            {`<Spacing pl={${JSON.stringify(values, null, 2)}} />`}
          </WrappedPadding>
        </Main>
      </React.Fragment>
    </ThemeProvider>
  );
};
