import React from 'react';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';
import sizes from './sizes';

const getSizeFromTheme = (theme, size) => theme && theme.spacing && theme.spacing[size] || sizes[size]; //TODO: in dev, throw an error if size doesn't exist
const getBreakpointsFromTheme = theme => theme && theme.breakpoints;

export const p = (size, theme) => map(size, s => `
  padding: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const px = (size, theme) => map(size, s => `
  padding-left: ${getSizeFromTheme(theme, s)};
  padding-right: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const py = (size, theme) => map(size, s => `
  padding-top: ${getSizeFromTheme(theme, s)};
  padding-bottom: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const pt = (size, theme) => map(size, s => `
  padding-top: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const pr = (size, theme) => map(size, s => `
  padding-right: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const pb = (size, theme) => map(size, s => `
  padding-bottom: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const pl = (size, theme) => map(size, s => `
  padding-left: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const Padding = styled.div`
  ${({all, theme }) => p(all, theme)}
  ${({horizontal, theme }) => px(horizontal, theme)} 
  ${({vertical, theme }) => py(vertical, theme)} 
  ${({top, theme }) => pt(top, theme)} 
  ${({right, theme }) => pr(right, theme)} 
  ${({bottom, theme }) => pb(bottom, theme)} 
  ${({left, theme }) => pl(left, theme)} 
`;

Padding.propTypes = {
  all: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  horizontal: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  vertical: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  top: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  right: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  bottom: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  left: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object])
};

export default Padding;
