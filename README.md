# styled-components-spacing

![npm](https://img.shields.io/npm/v/styled-components-spacing.svg) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/styled-components-spacing.svg) ![npm](https://img.shields.io/npm/dm/styled-components-spacing.svg) [![Build Status]![GithubActions](https://github.com/jameslnewell/styled-components-spacing/workflows/main/badge.svg)](https://github.com/jameslnewell/styled-components-spacing/actions)

Responsive margin and padding utilities for `styled-components` 💅.

> 🕸 [Website](https://jameslnewell.github.io/styled-components-spacing/)

> 📘 [Change log](https://github.com/jameslnewell/styled-components-spacing/blob/master/CHANGELOG.md)

> 👀 Have a look at [`styled-components-breakpoint`](https://github.com/jameslnewell/styled-components-breakpoint) and [`styled-components-grid`](https://github.com/jameslnewell/styled-components-grid) which both work well with this package.

## Installation

NPM:

```
npm install styled-components-spacing
```

Yarn:

```bash
yarn add styled-components-spacing
```

## Usage

### Using the themable mixins

```js
import React from 'react';
import styled from 'styled-components';
import { marginY, paddingX } from 'styled-components-spacing';

const HeroPanel = styled.div`
  ${marginY({ mobile: 2, tablet: 4 })}
  ${paddingX(6)};
`;
```

### Using the themable component

```js
import React from 'react';
import { Spacing } from 'styled-components-spacing';

<HeroPanel>
  <Spacing margin={{ mobile: 2, tablet: 4, desktop: 6 }}>
    <Title>Hello World</Title>
    <SubTitle>You are on earth!</SubTitle>
    <Spacing marginTop={1}>
      <Button>Blast off!</Button>
    </Spacing>
  </Spacing>
</HeroPanel>;
```

### Using custom breakpoints and spacings for the themable mixins and components

The themable breakpoints and spacings can be customised using `ThemeProvider`. For example, to use the same breakpoints and spacings as [Bootstrap](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints), you can do so like this:

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '3rem'
  }
};

<ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;
```

If you're using Typescript, you'll also need to define the breakpoints and spacings on the theme.

`styled.d.ts`

```tsx
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
    };
    spacings: {
      [name in 0 | 1 | 2 | 3 | 4 | 5]: string;
    };
  }
}
```

### Using the mixin factories

If your breakpoints and spacings don't need to be themable then you can use the static mixin factories.

```jsx
import styled from 'styled-components';
import { createMap } from 'styled-components-breakpoint';
import { createMarginY, createPaddingX } from 'styled-components-spacing';

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const spacing {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '3rem'
};

const map = createMap(breakpoints);
const marginY = createMarginY(map, spacings);
const paddingX = createPaddingX(map, spacings);

const HeroPanel = styled.div`
  ${marginY({ xs: 2, md: 4 })}
  ${paddingX(5)};
`;
```

## API

### Margin mixins

Themable mixins for margin.

| Function             | Alias      | Description                   |
| -------------------- | ---------- | ----------------------------- |
| `margin(name)`       | `m(name)`  | Margin on all sides.          |
| `marginY(name)`      | `my(name)` | Margin on the top and bottom. |
| `marginX(name)`      | `mx(name)` | Margin on the left and right. |
| `marginTop(name)`    | `mt(name)` | Margin on the top.            |
| `marginRight(name)`  | `mr(name)` | Margin on the right.          |
| `marginBottom(name)` | `mb(name)` | Margin on the bottom.         |
| `marginLeft(name)`   | `ml(name)` | Margin on the left.           |

> Where `name` is a `string` or `number` specifying the spacing name. May be a map `object` specifying spacing across various breakpoints.

### Padding mixins

Themable mixins for padding.

| Function              | Alias      | Description                    |
| --------------------- | ---------- | ------------------------------ |
| `padding(name)`       | `mpsize)`  | Padding on all sides.          |
| `paddingY(name)`      | `py(name)` | Padding on the top and bottom. |
| `paddingX(name)`      | `px(name)` | Padding on the left and right. |
| `paddingTop(name)`    | `pt(name)` | Padding on the top.            |
| `paddingRight(name)`  | `pr(name)` | Padding on the right.          |
| `paddingBottom(name)` | `pb(name)` | Padding on the bottom.         |
| `paddingLeft(name)`   | `pl(name)` | Padding on the left.           |

> Where `name` is a `string` or `number` specifying the spacing name. May be a map `object` specifying spacing across various breakpoints.

### &lt;Spacing/&gt; components

A themable component for margin and padding.

| Property        | Alias | Type                             | Default | Description                                    |
| --------------- | ----- | -------------------------------- | ------- | ---------------------------------------------- |
| `inline`        |       | `boolean`                        | `false` | Size the element to the width of its children. |
| `margin`        | `m`   | `string` or `number` or `object` |         | Margin on all sides.                           |
| `marginY`       | `my`  | `string` or `number` or `object` |         | Margin on the top and bottom.                  |
| `marginX`       | `mx`  | `string` or `number` or `object` |         | Margin on the left and right.                  |
| `marginTop`     | `mt`  | `string` or `number` or `object` |         | Margin on the left and right.                  |
| `marginRight`   | `mr`  | `string` or `number` or `object` |         | Margin on the right.                           |
| `marginBottom`  | `mb`  | `string` or `number` or `object` |         | Margin on the bottom.                          |
| `marginLeft`    | `ml`  | `string` or `number` or `object` |         | Margin on the left.                            |
| `padding`       | `p`   | `string` or `number` or `object` |         | Padding on all sides.                          |
| `paddingY`      | `py`  | `string` or `number` or `object` |         | Padding on the top and bottom.                 |
| `paddingX`      | `px`  | `string` or `number` or `object` |         | Padding on the left and right.                 |
| `paddingTop`    | `pt`  | `string` or `number` or `object` |         | Padding on the left and right.                 |
| `paddingRight`  | `pr`  | `string` or `number` or `object` |         | Padding on the right.                          |
| `paddingBottom` | `pb`  | `string` or `number` or `object` |         | Padding on the bottom.                         |
| `paddingLeft`   | `pl`  | `string` or `number` or `object` |         | Padding on the left.                           |

### Margin mixin factories

Factory functions to create mixins for margin:

- `createMargin(map, spacings)`
- `createMarginY(map, spacings)`
- `createMarginX(map, spacings)`
- `createMarginTop(map, spacings)`
- `createMarginRight(map, spacings)`
- `createMarginBottom(map, spacings)`
- `createMarginLeft(map, spacings)`

> Where `map` is function created by `createMap` from `styled-components-breakpoint`.

> Where `spacings` is a map of spacings.

### Padding mixin factories

Factory functions to create mixins for padding:

- `createPadding(map, spacings)`
- `createPaddingY(map, spacings)`
- `createPaddingX(map, spacings)`
- `createPaddingTop(map, spacings)`
- `createPaddingRight(map, spacings)`
- `createPaddingBottom(map, spacings)`
- `createPaddingLeft(map, spacings)`

> Where `map` is function created by `createMap` from `styled-components-breakpoint`.

> Where `spacings` is a map of spacings.

## Default spacings

If you don't provide any spacings, the default spacings used by the mixins and components are:

| Name | Value     |
| ---- | --------- |
| `0`  | `0`       |
| `1`  | `0.25rem` |
| `2`  | `0.5rem`  |
| `3`  | `1rem`    |
| `4`  | `2rem`    |
| `5`  | `4rem`    |
| `6`  | `8rem`    |
