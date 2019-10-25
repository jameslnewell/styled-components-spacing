import 'jest-styled-components';
import {render} from '@testing-library/react';
import * as React from 'react';
import styled from 'styled-components';
import {
  createMap,
  defaults as defaultBreakpoints,
  DefaultBreakpointName,
} from 'styled-components-breakpoint';
import {defaults as defaultSpacings} from './defaults';
import {
  createMargin,
  createMarginY,
  createMarginX,
  createMarginTop,
  createMarginRight,
  createMarginBottom,
  createMarginLeft,
  MarginProps,
  createMarginProps,
  createPadding,
  createPaddingY,
  createPaddingX,
  createPaddingTop,
  createPaddingRight,
  createPaddingBottom,
  createPaddingLeft,
  PaddingProps,
  createPaddingProps,
} from './static';
import {DefaultSpacingName} from './types';

const map = createMap(defaultBreakpoints);

const margin = createMargin(map, defaultSpacings);
const marginY = createMarginY(map, defaultSpacings);
const marginX = createMarginX(map, defaultSpacings);
const marginTop = createMarginTop(map, defaultSpacings);
const marginRight = createMarginRight(map, defaultSpacings);
const marginBottom = createMarginBottom(map, defaultSpacings);
const marginLeft = createMarginLeft(map, defaultSpacings);

const padding = createPadding(map, defaultSpacings);
const paddingY = createPaddingY(map, defaultSpacings);
const paddingX = createPaddingX(map, defaultSpacings);
const paddingTop = createPaddingTop(map, defaultSpacings);
const paddingRight = createPaddingRight(map, defaultSpacings);
const paddingBottom = createPaddingBottom(map, defaultSpacings);
const paddingLeft = createPaddingLeft(map, defaultSpacings);

const marginProps = createMarginProps({
  margin,
  marginY,
  marginX,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
});

const paddingProps = createPaddingProps({
  padding,
  paddingY,
  paddingX,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
});

const Spacing = styled.div<
  MarginProps<DefaultBreakpointName, DefaultSpacingName> &
    PaddingProps<DefaultBreakpointName, DefaultSpacingName>
>`
  ${marginProps}
  ${paddingProps}
`;

describe('static', () => {
  describe('margin', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing margin={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing margin={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing margin={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
      expect(container.firstChild).toHaveStyleRule('margin', '0.5rem', {
        media: 'screen and (min-width:46.0625em)',
      });
      expect(container.firstChild).toHaveStyleRule('margin', '2rem', {
        media: 'screen and (min-width:74.6875em)',
      });
    });
  });

  describe('marginX', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginX={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginX={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginX={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('marginY', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginY={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginY={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginY={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('marginTop', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginTop={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginTop={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginTop={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('marginRight', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginRight={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginRight={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginRight={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('marginBottom', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginBottom={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginBottom={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginBottom={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('marginLeft', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing marginLeft={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginLeft={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing marginLeft={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('padding', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing padding={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing padding={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing padding={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
      expect(container.firstChild).toHaveStyleRule('padding', '0.5rem', {
        media: 'screen and (min-width:46.0625em)',
      });
      expect(container.firstChild).toHaveStyleRule('padding', '2rem', {
        media: 'screen and (min-width:74.6875em)',
      });
    });
  });

  describe('paddingX', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing paddingX={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingX={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingX={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('paddingY', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing paddingY={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingY={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingY={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('paddingTop', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing paddingTop={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingTop={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingTop={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('paddingRight', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing paddingRight={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingRight={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingRight={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('paddingBottom', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing paddingBottom={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingBottom={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingBottom={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('paddingLeft', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const {container} = render(<Spacing paddingLeft={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingLeft={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Spacing paddingLeft={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
