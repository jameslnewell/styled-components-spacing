import React from 'react';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';
import sizes from './sizes';

const getSizeFromTheme = (theme, size) => theme && theme.spacing && theme.spacing[size] || sizes[size]; //TODO: in dev, throw an error if size doesn't exist
const getBreakpointsFromTheme = theme => theme && theme.breakpoints;

export const m = (size, theme) => map(size, s => `
  margin: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mx = (size, theme) => map(size, s => `
  margin-left: ${getSizeFromTheme(theme, s)};
  margin-right: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const my = (size, theme) => map(size, s => `
  margin-top: ${getSizeFromTheme(theme, s)};
  margin-bottom: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mt = (size, theme) => map(size, s => `
  margin-top: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mr = (size, theme) => map(size, s => `
  margin-right: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mb = (size, theme) => map(size, s => `
  margin-bottom: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const ml = (size, theme) => map(size, s => `
  margin-left: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const Margin = styled.div`
  ${({inline}) => inline && 'display: inline-block;'}
  ${({all, theme}) => m(all, theme)}
  ${({horizontal, theme}) => mx(horizontal, theme)} 
  ${({vertical, theme}) => my(vertical, theme)} 
  ${({top, theme}) => mt(top, theme)} 
  ${({right, theme}) => mr(right, theme)} 
  ${({bottom, theme}) => mb(bottom, theme)} 
  ${({left, theme}) => ml(left, theme)} 
`;

Margin.propTypes = {
  all: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  horizontal: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  vertical: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  top: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  right: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  bottom: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  left: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.object]),
  inline: React.PropTypes.bool
};

export default Margin;
