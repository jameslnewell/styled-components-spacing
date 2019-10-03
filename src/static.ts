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
