import { StyledProps } from 'styled-components';
import { ThemedSpacingMap } from './types';
import { defaults } from './defaults';

/* eslint-disable @typescript-eslint/no-explicit-any */
// casting because we can't really do anything better when the theme is defined but no theme values are defined
export const getSpacingsFromTheme = <P extends object>({ theme }: StyledProps<P>): ThemedSpacingMap =>
  theme && theme.spacings ? theme.spacings : (defaults as any);
/* eslint-enable @typescript-eslint/no-explicit-any */
