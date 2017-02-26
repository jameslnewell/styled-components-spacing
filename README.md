# styled-components-spacing

Responsive margin and padding components for `styled-components`.

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
    <Margin right={1}>
      <Button>Blast off!</Button>
    </Margin>
  </Padding>
</HeroPanel>

```

### Using custom breakpoints and sizes

```js
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Margin, Padding} from 'styled-components-spacing';

const theme = {
  breakpoints: {
    sm: 0,
    md: 800,
    lg: 1200
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
    <Margin right={'a'}>
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
import {px} from 'styled-components-spacing';

const Panel = styled.div`
  ${my({mobile: 2, tablet: 4})}
  ${px(6)}
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

### &lt;Padding/&gt;

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
