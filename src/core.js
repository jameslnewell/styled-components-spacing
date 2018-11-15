// @flow
/* global process */
import { map } from 'styled-components-breakpoint';

export type Theme = {
  [string]: mixed,
  breakpoints: {
    [string]: number
  },
  spacing: {
    [string]: string
  }
};

export type Values =
  | string
  | number
  | {
      [string]: string | number
    };

const defaultSpacing = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '1rem',
  '4': '2rem',
  '5': '4rem',
  '6': '8rem'
};

export function getSpacingFromTheme(key: string, theme: Theme): string {
  const value = (theme && theme.spacing && theme.spacing[key]) || defaultSpacing[key];
  if (process.env.NODE_ENV !== 'production' && typeof key === 'undefined') {
    console.error(`A spacing named "${key}" does not exist.`); // eslint-disable-line no-console
    return '0';
  }
  return value;
}

export function _m(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        margin: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _mx(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        margin-left: ${getSpacingFromTheme(key, theme)};
        margin-right: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _my(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        margin-top: ${getSpacingFromTheme(key, theme)};
        margin-bottom: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _mt(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        margin-top: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _mr(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        margin-right: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _mb(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        margin-bottom: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _ml(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
      margin-left: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _p(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        padding: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _px(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        padding-left: ${getSpacingFromTheme(key, theme)};
        padding-right: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _py(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        padding-top: ${getSpacingFromTheme(key, theme)};
        padding-bottom: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _pt(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        padding-top: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _pr(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        padding-right: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _pb(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        padding-bottom: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}

export function _pl(values: Values, theme: Theme) {
  return map(values, key => {
    if (typeof key === 'string' || typeof key === 'number') {
      return `
        padding-left: ${getSpacingFromTheme(key, theme)};
      `;
    } else {
      return '';
    }
  });
}
