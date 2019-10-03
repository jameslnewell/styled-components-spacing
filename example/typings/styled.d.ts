import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    spacings:
      | {
          [name in 0 | 1 | 2 | 3 | 4 | 5 | 6]: string;
        }
      | {
          [name in 'none' | 'sm' | 'md' | 'lg']: string;
        };
  }
}
