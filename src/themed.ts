import { StyledProps, css } from 'styled-components';
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

export interface ThemedMarginProps {
  m?: ThemedValueOrValueMap;
  mx?: ThemedValueOrValueMap;
  my?: ThemedValueOrValueMap;
  mt?: ThemedValueOrValueMap;
  mr?: ThemedValueOrValueMap;
  mb?: ThemedValueOrValueMap;
  ml?: ThemedValueOrValueMap;
  margin?: ThemedValueOrValueMap;
  marginX?: ThemedValueOrValueMap;
  marginY?: ThemedValueOrValueMap;
  marginTop?: ThemedValueOrValueMap;
  marginRight?: ThemedValueOrValueMap;
  marginBottom?: ThemedValueOrValueMap;
  marginLeft?: ThemedValueOrValueMap;
}

export const marginProps = (props: ThemedMarginProps): ReturnType<typeof css> => css`
  ${props.m !== undefined ? margin(props.m) : props.margin !== undefined ? margin(props.margin) : undefined}
  ${props.mx !== undefined ? marginX(props.mx) : props.marginX !== undefined ? marginX(props.marginX) : undefined}
  ${props.my !== undefined ? marginY(props.my) : props.marginY !== undefined ? marginY(props.marginY) : undefined}
  ${
    props.mt !== undefined
      ? marginTop(props.mt)
      : props.marginTop !== undefined
      ? marginTop(props.marginTop)
      : undefined
  }
  ${
    props.mr !== undefined
      ? marginRight(props.mr)
      : props.marginRight !== undefined
      ? marginRight(props.marginRight)
      : undefined
  }
  ${
    props.mb !== undefined
      ? marginBottom(props.mb)
      : props.marginBottom !== undefined
      ? marginBottom(props.marginBottom)
      : undefined
  }
  ${
    props.ml !== undefined
      ? marginLeft(props.ml)
      : props.marginLeft !== undefined
      ? marginLeft(props.marginLeft)
      : undefined
  }
`;

export interface ThemedPaddingProps {
  p?: ThemedValueOrValueMap;
  px?: ThemedValueOrValueMap;
  py?: ThemedValueOrValueMap;
  pt?: ThemedValueOrValueMap;
  pr?: ThemedValueOrValueMap;
  pb?: ThemedValueOrValueMap;
  pl?: ThemedValueOrValueMap;
  padding?: ThemedValueOrValueMap;
  paddingX?: ThemedValueOrValueMap;
  paddingY?: ThemedValueOrValueMap;
  paddingTop?: ThemedValueOrValueMap;
  paddingRight?: ThemedValueOrValueMap;
  paddingBottom?: ThemedValueOrValueMap;
  paddingLeft?: ThemedValueOrValueMap;
}

export const paddingProps = (props: ThemedPaddingProps): ReturnType<typeof css> => css`
  ${props.p !== undefined ? padding(props.p) : props.padding !== undefined ? padding(props.padding) : undefined}
  ${props.px !== undefined ? paddingX(props.px) : props.paddingX !== undefined ? paddingX(props.paddingX) : undefined}
  ${props.py !== undefined ? paddingY(props.py) : props.paddingY !== undefined ? paddingY(props.paddingY) : undefined}
  ${
    props.pt !== undefined
      ? paddingTop(props.pt)
      : props.paddingTop !== undefined
      ? paddingTop(props.paddingTop)
      : undefined
  }
  ${
    props.pr !== undefined
      ? paddingRight(props.pr)
      : props.paddingRight !== undefined
      ? paddingRight(props.paddingRight)
      : undefined
  }
  ${
    props.pb !== undefined
      ? paddingBottom(props.pb)
      : props.paddingBottom !== undefined
      ? paddingBottom(props.paddingBottom)
      : undefined
  }
  ${
    props.pl !== undefined
      ? paddingLeft(props.pl)
      : props.paddingLeft !== undefined
      ? paddingLeft(props.paddingLeft)
      : undefined
  }
`;
