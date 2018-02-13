import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { Padding } from './Padding';

describe('Padding', () => {
  it('it should have no styles when no props are passed', () => {
    const tree = renderer.create(<Padding />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('inline', () => {
    it('it should be set when the prop is true', () => {
      const tree = renderer.create(<Padding inline={true} />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('display', 'inline-block');
    });

    it('it should not be set when the prop is false', () => {
      const tree = renderer.create(<Padding inline={false} />).toJSON();
      expect(tree).not.toHaveStyleRule('display', 'inline-block');
    });
  });

  describe('all', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding all={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding all={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding all={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('padding', '0.5rem', {
        media: '(min-width:46.0625em)'
      });
      expect(tree).toHaveStyleRule('padding', '2rem', {
        media: '(min-width:64.0625em)'
      });
    });
  });

  describe('horizontal', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding horizontal={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding horizontal={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding horizontal={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('vertical', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding vertical={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding vertical={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding vertical={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('top', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding top={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding top={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding top={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('right', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding right={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding right={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding right={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('bottom', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding bottom={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding bottom={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding bottom={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('left', () => {
    it('it should have a single padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding left={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for all breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding left={{ mobile: 0, tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should have a different padding for some breakpoints when the prop is passed', () => {
      const tree = renderer.create(<Padding left={{ tablet: 2, desktop: 4 }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
