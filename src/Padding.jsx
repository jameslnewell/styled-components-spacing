import React from 'react';
import PropTypes from 'prop-types';
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
  ${({inline}) => inline && 'display: inline-block;'}
  ${({all, theme}) => p(all, theme)}
  ${({horizontal, theme}) => px(horizontal, theme)} 
  ${({vertical, theme}) => py(vertical, theme)} 
  ${({top, theme}) => pt(top, theme)} 
  ${({right, theme}) => pr(right, theme)} 
  ${({bottom, theme}) => pb(bottom, theme)} 
  ${({left, theme}) => pl(left, theme)} 
`;

Padding.propTypes = {
  all: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  horizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  vertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  inline: PropTypes.bool
};

export default Padding;
