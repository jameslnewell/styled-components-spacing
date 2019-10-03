import { DefaultTheme } from 'styled-components';
import {
  defaults as breakpointDefaults,
  BreakpointMap,
  ValueOrValueMap,
  ThemedBreakpointName
} from 'styled-components-breakpoint';
import { ThemedValueOrValueMap, defaults as spacingDefaults, SpacingMap } from '../../../src';

export type DefaultBreakpointName = 'mobile' | 'tablet' | 'desktop';

export const defaultBreakpoints: BreakpointMap<DefaultBreakpointName> = breakpointDefaults;

export const breakpointTitles: Record<DefaultBreakpointName, string> = {
  mobile: 'Mobile',
  tablet: 'Tablet',
  desktop: 'Desktop'
};

export const breakpointColors: Record<DefaultBreakpointName, string> = {
  mobile: '#D7F2BA',
  tablet: '#BDE4A8',
  desktop: '#9CC69B'
};

export type DefaultSpacingName = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CustomSpacingName = 'none' | 'sm' | 'md' | 'lg';
export type ExampleSpacingName = DefaultSpacingName | CustomSpacingName;
export type ExampleSpacingMap = SpacingMap<DefaultSpacingName> | SpacingMap<CustomSpacingName>;

export const defaultSpacing = spacingDefaults;

export const defaultTheme: DefaultTheme = {
  spacings: defaultSpacing
};

export const customTheme: DefaultTheme = {
  spacings: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem'
  }
};

export const defaultValues: ThemedValueOrValueMap = {
  mobile: 2,
  tablet: 4,
  desktop: 6
};

export const customValues: ValueOrValueMap<ThemedBreakpointName, CustomSpacingName> = {
  mobile: 'sm',
  tablet: 'md',
  desktop: 'lg'
};

// TODO: do demo of custom spacings but not custom breakpoints
// TODO: createMarginProps createPaddingProps
// TODO: look into issue with s-c-b types compiling down `infer` ahead of time without considering declaration merging
