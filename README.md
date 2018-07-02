# styled-components-spacing

![npm](https://img.shields.io/npm/v/styled-components-spacing.svg) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/styled-components-spacing.svg) ![npm](https://img.shields.io/npm/dm/styled-components-spacing.svg) [![Build Status](https://travis-ci.org/jameslnewell/styled-components-spacing.svg?branch=master)](https://travis-ci.org/jameslnewell/styled-components-spacing)

Responsive margin and padding components for `styled-components` 💅.

> [Change log](https://github.com/jameslnewell/styled-components-spacing/blob/master/CHANGELOG.md)

> Have a look 👀 at [`styled-components-breakpoint`](https://github.com/jameslnewell/styled-components-breakpoint) and [`styled-components-grid`](https://github.com/jameslnewell/styled-components-grid) which both work well with this package.

## Installation

    npm install --save styled-components styled-components-spacing

## Usage

> [Examples](https://jameslnewell.github.io/styled-components-spacing/)

### Using the default spacings at the default breakpoints

```js
import React from 'react';
import { Margin, Padding } from 'styled-components-spacing';

<HeroPanel>
  <Padding all={{ mobile: 2, tablet: 4, desktop: 6 }}>
    <Title>Hello World</Title>
    <SubTitle>You are on earth!</SubTitle>
    <Margin top={1}>
      <Button>Blast off!</Button>
    </Margin>
  </Padding>
</HeroPanel>;
```

### Using custom spacings at custom breakpoints

Spacings and breakpoints can be customised using `ThemeProvider`. For example, to use the same breakpoints and spacings as [Bootstrap](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints), you can do so like this:

```js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Margin, Padding } from 'styled-components-spacing';

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

<ThemeProvider theme={theme}>
  <HeroPanel>
    <Padding all={{ sm: 1, lg: 2 }}>
      <Title>Hello World</Title>
      <SubTitle>You are on earth!</SubTitle>
      <Margin top={1}>
        <Button>Blast off!</Button>
      </Margin>
    </Padding>
  </HeroPanel>
</ThemeProvider>;
```

### Using the mixins

```js
import React from 'react';
import styled from 'styled-components';
import { my, px } from 'styled-components-spacing';

const Panel = styled.div`
  ${my({ mobile: 2, tablet: 4 })} ${px(6)};
`;
```

## Components

### &lt;Margin/&gt;

#### all

Margin on all sides.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### horizontal

Margin on the left and right.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### vertical

Margin on the top and bottom.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### top

Margin on the top.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### bottom

Margin on the bottom.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### left

Margin on the left.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### right

Margin on the right.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### inline

Size the element to the width of its children.

Optional. A `boolean`. Defaults to `false`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

### &lt;Padding/&gt;

#### all

Padding on all sides.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### horizontal

Padding on the left and right.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### vertical

Padding on the top and bottom.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### top

Padding on the top.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### bottom

Padding on the bottom.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### left

Padding on the left.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### right

Padding on the right.

Optional. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### inline

Size the element to the width of its children.

Optional. A `boolean`. Defaults to `false`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

## Mixins

#### m(values)

Margin on all sides.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### mx(values)

Margin on the left and right.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### my(values)

Margin on the top and bottom.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### mt(values)

Margin on the top.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### mr(values)

Margin on the right.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### mb(values)

Margin on the bottom.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### ml(values)

Margin on the left.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

---

#### p(values)

Padding on all sides.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### px(values)

Padding on the left and right.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### py(values)

Padding on the top and bottom.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### pt(values)

Padding on the top.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### pr(values)

Padding on the right.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### pb(values)

Padding on the bottom.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

#### pl(values)

Padding on the left.

**Parameters:**

* `values` - Required. A `string` or `number` specifying the spacing key. May be a keyed `object` specifying spacing keys for multiple breakpoints.

## Defaults

```js
{
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem'
}
```
