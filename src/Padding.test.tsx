import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import { Padding } from './components';

describe('<Padding/>', () => {
  it('it should have no styles when no props are passed', () => {
    const { container } = render(<Padding />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('inline', () => {
    it('it should be set when the prop is true', () => {
      const { container } = render(<Padding inline={true} />);
      expect(container.firstChild).toMatchSnapshot();
      expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
    });

    it('it should not be set when the prop is false', () => {
      const { container } = render(<Padding inline={false} />);
      expect(container.firstChild).not.toHaveStyleRule('display', 'inline-block');
    });
  });

  describe('all', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding all={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding all={{ mobile: 0, tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const { container } = render(<Padding all={{ tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
      expect(container.firstChild).toHaveStyleRule('padding', '0.5rem', {
        media: 'screen and (min-width:46.0625em)'
      });
      expect(container.firstChild).toHaveStyleRule('padding', '2rem', {
        media: 'screen and (min-width:74.6875em)'
      });
    });
  });

  describe('horizontal', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding horizontal={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding horizontal={{ mobile: 0, tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const { container } = render(<Padding horizontal={{ tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('vertical', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding vertical={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding vertical={{ mobile: 0, tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const { container } = render(<Padding vertical={{ tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('top', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding top={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding top={{ mobile: 0, tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const { container } = render(<Padding top={{ tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('right', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding right={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding right={{ mobile: 0, tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const { container } = render(<Padding right={{ tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('bottom', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding bottom={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding bottom={{ mobile: 0, tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const { container } = render(<Padding bottom={{ tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('left', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding left={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const { container } = render(<Padding left={{ mobile: 0, tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const { container } = render(<Padding left={{ tablet: 2, desktop: 4 }} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
