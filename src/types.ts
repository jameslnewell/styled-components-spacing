import { DefaultTheme } from 'styled-components';
import { ThemedValueOrValueMap as BreakpointThemedValueOrValueMap } from 'styled-components-breakpoint';

export type SpacingNameConstraint = string | number;
export type SpacingMap<S extends SpacingNameConstraint, T extends string | number = string> = { [spacing in S]: T };
type ThemeShape<S extends SpacingNameConstraint> = { spacings: SpacingMap<S> };

export type DefaultSpacingName = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type ThemedSpacingName = DefaultTheme extends ThemeShape<infer S> ? S : DefaultSpacingName;
export type ThemedSpacingMap = SpacingMap<ThemedSpacingName>;
export type ThemedValueOrValueMap = BreakpointThemedValueOrValueMap<ThemedSpacingName>;
