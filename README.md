# styled-components-spacing

Responsive margin and padding components for `styled-components` 💅.

## Installation

    npm install --save styled-components styled-components-spacing

## Usage

### Using the default breakpoints and sizes

```js
import React from 'react';
import {Margin, Padding} from 'styled-components-spacing';

<HeroPanel>
  <Padding all={{mobile: 2, tablet: 4, desktop: 6}}>
    <Title>Hello World</Title>
    <SubTitle>You are on earth!</SubTitle>
    <Margin top={1}>
      <Button>Blast off!</Button>
    </Margin>
  </Padding>
</HeroPanel>

```

### Using custom breakpoints and sizes

You can customise the provided breakpoint names and values. If you would like to use the same breakpoints as [Bootstrap](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints), you can do so like this:

```js
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Margin, Padding} from 'styled-components-spacing';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  spacing: {
    a: '25px',
    b: '50px',
  }
};

<ThemeProvider theme={theme}>
<HeroPanel>
  <Padding all={{sm: 'a',  lg: 'b'}}>
    <Title>Hello World</Title>
    <SubTitle>You are on earth!</SubTitle>
    <Margin top={'a'}>
      <Button>Blast off!</Button>
    </Margin>
  </Padding>
</HeroPanel>
</ThemeProvider>

```

### Using the mixins

```js
import React from 'react';
import styled from 'styled-components';
import {my, px} from 'styled-components-spacing';

const Panel = styled.div`
  ${my({mobile: 2, tablet: 4})}
  ${px(6)}
`;

```

### Using the mixins with custom breakpoints and sizes

You must pass a `theme` object as the second parameter to the mixins with breakpoints and spacing sizes defined.

```js
import React from 'react';
import styled from 'styled-components';
import {my, px} from 'styled-components-spacing';
import theme from './theme'

const Panel = styled.div`
  ${my({mobile: 2, tablet: 4}, theme)}
  ${px(6, theme)}
`;

```

## Components

### &lt;Margin/&gt;

#### all

Margin on all sides.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### horizontal

Margin on the left and right.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### vertical

Margin on the top and bottom.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### top

Margin on the top.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### bottom

Margin on the bottom.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### left

Margin on the left.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### right

Margin on the right.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### inline

Size the element to the width of its children.

Optional. A `boolean`. Defaults to `false`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

### &lt;Padding/&gt;

#### all

Padding on all sides.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### horizontal

Padding on the left and right.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### vertical

Padding on the top and bottom.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### top

Padding on the top.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### bottom

Padding on the bottom.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### left

Padding on the left.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### right

Padding on the right.

Optional. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.

#### inline

Size the element to the width of its children.

Optional. A `boolean`. Defaults to `false`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

## Mixins

#### m(size, theme)

Margin on all sides.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### mx(size, theme)

Margin on the left and right.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### my(size, theme)

Margin on the top and bottom.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### mt(size, theme)

Margin on the top.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### mr(size, theme)

Margin on the right.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### mb(size, theme)

Margin on the bottom.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### ml(size, theme)

Margin on the left.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes


------

#### p(size, theme)

Padding on all sides.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### px(size, theme)

Padding on the left and right.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### py(size, theme)

Padding on the top and bottom.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### pt(size, theme)

Padding on the top.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### pr(size, theme)

Padding on the right.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### pb(size, theme)

Padding on the bottom.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes

#### pl(size, theme)

Padding on the left.

**Parameters:**
- `size` - Required. A `string` or `number` specifying the spacing size. May be a keyed `object` specifying spacing sizes for multiple breakpoints.
- `theme` - Optional. An `object` containing breakpoint and spacing sizes


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

## Change log

### 2.1.3

- fix: not used to a new IDE which doesn't auto save

### 2.1.2

- fix: remove undefined margin values

### 2.1.1

- fix: updated the documentation

### 2.1.0

- add: added a `component` prop to customise the underlying element type

### 2.0.4

- fix: Use `prop-types` to make warning with `react@15.5` go away

### 2.0.1-3

- fix: usage examples

### 2.0.0

- break: removed `display: inline-block;` from `<Margin/>` because an `inline-block` wrapping a `block` changes the width of the `block`. e.g. `<Margin><h1/></Margin>` meant the `h1` was unexpectedly not full width
- addition: added a prop named `inline` to change `<Margin/>` and `<Padding/>` to from `block` to `inline-block`.
