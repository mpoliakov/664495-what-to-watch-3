import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header';

it(`<PageHeader/> is rendered correctly`, () => {
  const component = renderer.create(<PageHeader/>).toJSON();
  expect(component).toMatchSnapshot();
});
