import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from './page-content.jsx';

it(`<PageContent/> is rendered correctly`, () => {
  const component = renderer.create(
      <PageContent>
        <section className="catalog"></section>
      </PageContent>
  ).toJSON();

  expect(component).toMatchSnapshot();
});
