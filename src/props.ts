import { css } from 'styled-components';
import { ThemedValueOrValueMap } from './types';
import {
  m as _m,
  mx as _mx,
  my as _my,
  mt as _mt,
  mr as _mr,
  mb as _mb,
  ml as _ml,
  p as _p,
  px as _px,
  py as _py,
  pt as _pt,
  pr as _pr,
  pb as _pb,
  pl as _pl
} from './themed';

export interface MarginProps {
  m?: ThemedValueOrValueMap;
  margin?: ThemedValueOrValueMap;

  mx?: ThemedValueOrValueMap;
  marginX?: ThemedValueOrValueMap;

  my?: ThemedValueOrValueMap;
  marginY?: ThemedValueOrValueMap;

  mt?: ThemedValueOrValueMap;
  marginTop?: ThemedValueOrValueMap;

  mr?: ThemedValueOrValueMap;
  marginRight?: ThemedValueOrValueMap;

  mb?: ThemedValueOrValueMap;
  marginBottom?: ThemedValueOrValueMap;

  ml?: ThemedValueOrValueMap;
  marginLeft?: ThemedValueOrValueMap;
}

export const marginProps = ({
  m,
  margin,
  mx,
  marginX,
  my,
  marginY,
  mt,
  marginTop,
  mr,
  marginRight,
  mb,
  marginBottom,
  ml,
  marginLeft
}: MarginProps): ReturnType<typeof css> => css`
  ${m ? _m(m) : margin ? _m(margin) : undefined}
  ${mx ? _mx(mx) : marginX ? _mx(marginX) : undefined}
  ${my ? _my(my) : marginY ? _my(marginY) : undefined}
  ${mt ? _mt(mt) : marginTop ? _mt(marginTop) : undefined}
  ${mr ? _mr(mr) : marginRight ? _mr(marginRight) : undefined}
  ${mb ? _mb(mb) : marginBottom ? _mb(marginBottom) : undefined}
  ${ml ? _ml(ml) : marginLeft ? _ml(marginLeft) : undefined}
`;

export interface PaddingProps {
  p?: ThemedValueOrValueMap;
  padding?: ThemedValueOrValueMap;

  px?: ThemedValueOrValueMap;
  paddingX?: ThemedValueOrValueMap;

  py?: ThemedValueOrValueMap;
  paddingY?: ThemedValueOrValueMap;

  pt?: ThemedValueOrValueMap;
  paddingTop?: ThemedValueOrValueMap;

  pr?: ThemedValueOrValueMap;
  paddingRight?: ThemedValueOrValueMap;

  pb?: ThemedValueOrValueMap;
  paddingBottom?: ThemedValueOrValueMap;

  pl?: ThemedValueOrValueMap;
  paddingLeft?: ThemedValueOrValueMap;
}

export const paddingProps = ({
  p,
  padding,
  px,
  paddingX,
  py,
  paddingY,
  pt,
  paddingTop,
  pr,
  paddingRight,
  pb,
  paddingBottom,
  pl,
  paddingLeft
}: PaddingProps): ReturnType<typeof css> => css`
  ${p ? _p(p) : padding ? _p(padding) : undefined}
  ${px ? _px(px) : paddingX ? _px(paddingX) : undefined}
  ${py ? _py(py) : paddingY ? _py(paddingY) : undefined}
  ${pt ? _pt(pt) : paddingTop ? _pt(paddingTop) : undefined}
  ${pr ? _pr(pr) : paddingRight ? _pr(paddingRight) : undefined}
  ${pb ? _pb(pb) : paddingBottom ? _pb(paddingBottom) : undefined}
  ${pl ? _pl(pl) : paddingLeft ? _pl(paddingLeft) : undefined}
`;
