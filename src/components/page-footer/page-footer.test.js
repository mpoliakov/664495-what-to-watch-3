import React from 'react';
import renderer from 'react-test-renderer';
import PageFooter from './page-footer';

it(`<PageFooter/> is rendered correctly`, () => {
  const component = renderer.create(<PageFooter/>).toJSON();
  expect(component).toMatchSnapshot();
});
