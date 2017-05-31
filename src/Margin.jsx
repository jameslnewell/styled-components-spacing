import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import sizes from './sizes';

const MarginComponent = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['inline', 'all', 'horizontal', 'vertical', 'top', 'right', 'bottom', 'left']
})

const getSizeFromTheme = (theme, size) => theme && theme.spacing && theme.spacing[size] || sizes[size]; //TODO: in dev, throw an error if size doesn't exist
const getBreakpointsFromTheme = theme => theme && theme.breakpoints;
const isNotUndefined = value => typeof value !== 'undefined';

export const m = (size, theme) => map(size, s => isNotUndefined(s) && `
  margin: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mx = (size, theme) => map(size, s => isNotUndefined(s) && `
  margin-left: ${getSizeFromTheme(theme, s)};
  margin-right: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const my = (size, theme) => map(size, s => isNotUndefined(s) && `
  margin-top: ${getSizeFromTheme(theme, s)};
  margin-bottom: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mt = (size, theme) => map(size, s => isNotUndefined(s) && `
  margin-top: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mr = (size, theme) => map(size, s => isNotUndefined(s) && `
  margin-right: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const mb = (size, theme) => map(size, s => isNotUndefined(s) && `
  margin-bottom: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const ml = (size, theme) => map(size, s => isNotUndefined(s) && `
  margin-left: ${getSizeFromTheme(theme, s)};
`, getBreakpointsFromTheme(theme));

export const Margin = styled(MarginComponent)`
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
  all: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  horizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  vertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  inline: PropTypes.bool
};

export default Margin;
