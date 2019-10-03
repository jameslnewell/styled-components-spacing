import { StyledProps } from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { ThemedValueOrValueMap, ThemedSpacingName } from './types';
import { getSpacingsFromTheme } from './getSpacingsFromTheme';
import { mapSpacingToStyle } from './mapSpacingToStyle';

const createMixin = (properties: string[]) => {
  return (value: ThemedValueOrValueMap) => {
    return <P extends object>(props: StyledProps<P>) => {
      const spacings = getSpacingsFromTheme(props);
      return map(value, spacing => mapSpacingToStyle<ThemedSpacingName>(properties, spacings, spacing))(props);
    };
  };
};

export const margin = createMixin(['margin']);
export const marginX = createMixin(['marginLeft', 'marginRight']);
export const marginY = createMixin(['marginTop', 'marginBottom']);
export const marginTop = createMixin(['marginTop']);
export const marginRight = createMixin(['marginRight']);
export const marginBottom = createMixin(['marginBottom']);
export const marginLeft = createMixin(['marginLeft']);

export const padding = createMixin(['padding']);
export const paddingX = createMixin(['paddingLeft', 'paddingRight']);
export const paddingY = createMixin(['paddingTop', 'paddingBottom']);
export const paddingTop = createMixin(['paddingTop']);
export const paddingRight = createMixin(['paddingRight']);
export const paddingBottom = createMixin(['paddingBottom']);
export const paddingLeft = createMixin(['paddingLeft']);

export {
  margin as m,
  marginX as mx,
  marginY as my,
  marginTop as mt,
  marginRight as mr,
  marginBottom as mb,
  marginLeft as ml,
  padding as p,
  paddingX as px,
  paddingY as py,
  paddingTop as pt,
  paddingRight as pr,
  paddingBottom as pb,
  paddingLeft as pl
};
