import styled from 'styled-components';
import {ThemedValueOrValueMap} from './types';
import {
  ThemedMarginProps,
  ThemedPaddingProps,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  marginProps,
  paddingProps,
} from './themed';

interface InlineProps {
  inline?: boolean;
}

const inlineMixin = ({inline}: InlineProps): string | undefined =>
  (inline && 'display: inline-block;') || undefined;

export type DeprecatedSpacingProps = InlineProps & {
  all?: ThemedValueOrValueMap;
  horizontal?: ThemedValueOrValueMap;
  vertical?: ThemedValueOrValueMap;
  top?: ThemedValueOrValueMap;
  right?: ThemedValueOrValueMap;
  bottom?: ThemedValueOrValueMap;
  left?: ThemedValueOrValueMap;
};

/** @deprecated */
export const Margin = styled.div<DeprecatedSpacingProps>`
  ${inlineMixin}
  ${({all}) => all && m(all)}
  ${({horizontal}) => horizontal && mx(horizontal)}
  ${({vertical}) => vertical && my(vertical)}
  ${({top}) => top && mt(top)}
  ${({right}) => right && mr(right)}
  ${({bottom}) => bottom && mb(bottom)}
  ${({left}) => left && ml(left)}
`;

Margin.displayName = 'Margin';

/** @deprecated */
export const Padding = styled.div<DeprecatedSpacingProps>`
  ${inlineMixin}
  ${({all}) => all && p(all)}
  ${({horizontal}) => horizontal && px(horizontal)}
  ${({vertical}) => vertical && py(vertical)}
  ${({top}) => top && pt(top)}
  ${({right}) => right && pr(right)}
  ${({bottom}) => bottom && pb(bottom)}
  ${({left}) => left && pl(left)}
`;

Padding.displayName = 'Padding';

export type SpacingProps = InlineProps & ThemedMarginProps & ThemedPaddingProps;

export const Spacing = styled.div<SpacingProps>`
  ${inlineMixin}
  ${marginProps}
  ${paddingProps}
`;

Spacing.displayName = 'Spacing';
