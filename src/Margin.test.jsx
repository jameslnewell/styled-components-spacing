import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { Margin } from './Margin';

describe('Margin', () => {
  it('it should have no styles when no props are passed', () => {
    const tree = renderer.create(<Margin />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('inline', () => {
    it('it should be set when the prop is true', () => {
      const tree = renderer.create(<Margin inline={true} />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('display', 'inline-block');
    });

    it('it should not be set when the prop is false', () => {
      const tree = renderer.create(<Margin inline={false} />).toJSON();
      expect(tree).not.toHaveStyleRule('display', 'inline-block');
    });
  });

  describe('all', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin all={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin all={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin all={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('margin', '0.5rem', {
        media: '(min-width:46.0625em)'
      });
      expect(tree).toHaveStyleRule('margin', '2rem', {
        media: '(min-width:64.0625em)'
      });
    });
  });

  describe('horizontal', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin horizontal={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin horizontal={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin horizontal={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('vertical', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin vertical={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin vertical={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin vertical={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('top', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin top={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin top={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin top={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('right', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin right={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin right={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin right={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('bottom', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin bottom={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin bottom={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin bottom={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('left', () => {
    it('it should have a single margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin left={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin left={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different margin for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Margin left={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
