import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import PageHeader from './page-header';

it(`<PageHeader/> is rendered correctly`, () => {
  const component = renderer.create(
      <BrowserRouter>
        <PageHeader/>
      </BrowserRouter>
  ).toJSON();

  expect(component).toMatchSnapshot();
});
