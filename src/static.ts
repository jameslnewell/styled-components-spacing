import { css } from 'styled-components';
import { BreakpointNameConstraint, ValueOrValueMap, MapFunction } from 'styled-components-breakpoint';
import { SpacingNameConstraint, SpacingMap } from './types';
import { mapSpacingToStyle } from './mapSpacingToStyle';

const createMixin = (properties: string[]) => {
  return <B extends BreakpointNameConstraint, S extends SpacingNameConstraint>(
    map: MapFunction<B, S>,
    spacings: SpacingMap<S>
  ) => {
    return (value: ValueOrValueMap<B, S>) => {
      return map(value, spacing => mapSpacingToStyle<S>(properties, spacings, spacing));
    };
  };
};

export const createMargin = createMixin(['margin']);
export const createMarginX = createMixin(['marginLeft', 'marginRight']);
export const createMarginY = createMixin(['marginTop', 'marginBottom']);
export const createMarginLeft = createMixin(['marginLeft']);
export const createMarginRight = createMixin(['marginRight']);
export const createMarginTop = createMixin(['marginTop']);
export const createMarginBottom = createMixin(['marginBottom']);

export const createPadding = createMixin(['padding']);
export const createPaddingX = createMixin(['paddingLeft', 'paddingRight']);
export const createPaddingY = createMixin(['paddingTop', 'paddingBottom']);
export const createPaddingLeft = createMixin(['paddingLeft']);
export const createPaddingRight = createMixin(['paddingRight']);
export const createPaddingTop = createMixin(['paddingTop']);
export const createPaddingBottom = createMixin(['paddingBottom']);

interface MixinFunction<B extends BreakpointNameConstraint, S extends SpacingNameConstraint> {
  (value: ValueOrValueMap<B, S>): ReturnType<MapFunction<B, S>>;
}

interface CreateMarginOptions<B extends BreakpointNameConstraint, S extends SpacingNameConstraint> {
  margin: MixinFunction<B, S>;
  marginX: MixinFunction<B, S>;
  marginY: MixinFunction<B, S>;
  marginTop: MixinFunction<B, S>;
  marginRight: MixinFunction<B, S>;
  marginBottom: MixinFunction<B, S>;
  marginLeft: MixinFunction<B, S>;
}

export interface MarginProps<B extends BreakpointNameConstraint, S extends SpacingNameConstraint> {
  m?: ValueOrValueMap<B, S>;
  mx?: ValueOrValueMap<B, S>;
  my?: ValueOrValueMap<B, S>;
  mt?: ValueOrValueMap<B, S>;
  mr?: ValueOrValueMap<B, S>;
  mb?: ValueOrValueMap<B, S>;
  ml?: ValueOrValueMap<B, S>;
  margin?: ValueOrValueMap<B, S>;
  marginX?: ValueOrValueMap<B, S>;
  marginY?: ValueOrValueMap<B, S>;
  marginTop?: ValueOrValueMap<B, S>;
  marginRight?: ValueOrValueMap<B, S>;
  marginBottom?: ValueOrValueMap<B, S>;
  marginLeft?: ValueOrValueMap<B, S>;
}

export const createMarginProps = <B extends BreakpointNameConstraint, S extends SpacingNameConstraint>({
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft
}: CreateMarginOptions<B, S>) => (props: MarginProps<B, S>): ReturnType<typeof css> => css`
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

interface CreatePaddingOptions<B extends BreakpointNameConstraint, S extends SpacingNameConstraint> {
  padding: MixinFunction<B, S>;
  paddingX: MixinFunction<B, S>;
  paddingY: MixinFunction<B, S>;
  paddingTop: MixinFunction<B, S>;
  paddingRight: MixinFunction<B, S>;
  paddingBottom: MixinFunction<B, S>;
  paddingLeft: MixinFunction<B, S>;
}

export interface PaddingProps<B extends BreakpointNameConstraint, S extends SpacingNameConstraint> {
  p?: ValueOrValueMap<B, S>;
  px?: ValueOrValueMap<B, S>;
  py?: ValueOrValueMap<B, S>;
  pt?: ValueOrValueMap<B, S>;
  pr?: ValueOrValueMap<B, S>;
  pb?: ValueOrValueMap<B, S>;
  pl?: ValueOrValueMap<B, S>;
  padding?: ValueOrValueMap<B, S>;
  paddingX?: ValueOrValueMap<B, S>;
  paddingY?: ValueOrValueMap<B, S>;
  paddingTop?: ValueOrValueMap<B, S>;
  paddingRight?: ValueOrValueMap<B, S>;
  paddingBottom?: ValueOrValueMap<B, S>;
  paddingLeft?: ValueOrValueMap<B, S>;
}

export const createPaddingProps = <B extends BreakpointNameConstraint, S extends SpacingNameConstraint>({
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft
}: CreatePaddingOptions<B, S>) => (props: PaddingProps<B, S>): ReturnType<typeof css> => css`
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
