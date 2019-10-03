import { SpacingNameConstraint, SpacingMap } from './types';
import { getSpacingSize } from './getSpacingSize';
import { CSSObject } from 'styled-components';

export const mapSpacingToStyle = <S extends SpacingNameConstraint>(
  properties: string[],
  spacings: SpacingMap<S>,
  spacing: S
): CSSObject =>
  properties.reduce((style, property) => ({ ...style, [property]: getSpacingSize(spacings, spacing) }), {});
