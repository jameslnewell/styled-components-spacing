## Change log

### 3.1.1

* fix zero indexed margin/paddings issue ([#12](https://github.com/jameslnewell/styled-components-spacing/pull/12))

### 3.1.0

* added the `module` field
* added badges to README

## 3.0.1

* added `Margin.displayName` and `Padding.displayName` ([#9](https://github.com/jameslnewell/styled-components-spacing/pull/9))

## 3.0.0

* updated the `peerDependency` to support `styled-components@^3`
* potential breaking change: upgraded to `styled-components-breakpoint@2.0.0` which only supports breakpoints defined as px
* potential breaking change: removed the `theme` parameter from the mixins, simplifying use of customised breakpoints and spacings
* potential breaking change: removed use of `react-create-component-from-tag-prop` since `styled-components` now has `component.withComponent()`

## 2.1.3

* fix: not used to a new IDE which doesn't auto save

## 2.1.2

* fix: remove undefined margin values

## 2.1.1

* fix: updated the documentation

## 2.1.0

* add: added a `component` prop to customise the underlying element type

## 2.0.4

* fix: Use `prop-types` to make warning with `react@15.5` go away

## 2.0.1-3

* fix: usage examples

## 2.0.0

* break: removed `display: inline-block;` from `<Margin/>` because an `inline-block` wrapping a `block` changes the width of the `block`. e.g. `<Margin><h1/></Margin>` meant the `h1` was unexpectedly not full width
* addition: added a prop named `inline` to change `<Margin/>` and `<Padding/>` to from `block` to `inline-block`.
