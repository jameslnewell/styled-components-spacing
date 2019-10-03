import { SpacingNameConstraint, SpacingMap } from './types';

export const getSpacingSize = <S extends SpacingNameConstraint>(
  spacings: SpacingMap<S>,
  spacing: S
): string | number => {
  if (!(spacing in spacings)) {
    console.error(`styled-components-spacing: Spacing "${spacing}" was not found.`);
    return '0';
  }
  return spacings[spacing];
};
