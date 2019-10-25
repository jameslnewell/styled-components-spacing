import 'jest-styled-components';
import * as React from 'react';
import {render} from '@testing-library/react';
import {Margin} from './components';

describe('<Margin/>', () => {
  it('it should have no styles when no props are passed', () => {
    const {container} = render(<Margin />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('inline', () => {
    it('it should be set when the prop is true', () => {
      const {container} = render(<Margin inline={true} />);
      expect(container.firstChild).toMatchSnapshot();
      expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
    });

    it('it should not be set when the prop is false', () => {
      const {container} = render(<Margin inline={false} />);
      expect(container.firstChild).not.toHaveStyleRule(
        'display',
        'inline-block',
      );
    });
  });

  describe('all', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Margin all={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin all={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Margin all={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
      expect(container.firstChild).toHaveStyleRule('margin', '0.5rem', {
        media: 'screen and (min-width:46.0625em)',
      });
      expect(container.firstChild).toHaveStyleRule('margin', '2rem', {
        media: 'screen and (min-width:74.6875em)',
      });
    });
  });

  describe('horizontal', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Margin horizontal={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin horizontal={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin horizontal={{tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('vertical', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Margin vertical={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin vertical={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Margin vertical={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('top', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Margin top={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin top={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Margin top={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('right', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Margin right={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin right={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Margin right={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('bottom', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Margin bottom={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin bottom={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Margin bottom={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('left', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const {container} = render(<Margin left={1} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const {container} = render(
        <Margin left={{mobile: 0, tablet: 2, desktop: 4}} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const {container} = render(<Margin left={{tablet: 2, desktop: 4}} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
