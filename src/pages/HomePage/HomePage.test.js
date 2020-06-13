import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

const renderHomePage = (props = {}) => {
  const defaultProps = {};

  return <HomePage {...defaultProps} {...props} />;
};

const shallowRenderHomePage = (props) => shallow(renderHomePage(props));

describe('<HomePage>', () => {
  it('Should render', () => {
    const actual = shallowRenderHomePage();
    expect(actual).toMatchSnapshot();
  });
});
