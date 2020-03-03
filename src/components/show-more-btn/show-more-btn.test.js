import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreBtn from './show-more-btn.jsx';

it(`<ShowMoreBtn/> is rendered correctly`, () => {
  const onClick = jest.fn();

  const component = renderer.create(<ShowMoreBtn onClick={onClick}/>).toJSON();
  expect(component).toMatchSnapshot();
});
