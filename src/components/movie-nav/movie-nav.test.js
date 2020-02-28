import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCardTabs} from '../../utils';
import MovieNav from './movie-nav.jsx';

it(`<MovieNav/> is rendered correctly`, () => {
  const activeTab = MovieCardTabs.DETAILS;
  const onNavClick = jest.fn();
  const mix = `movie-card__nav`;

  const component = renderer.create(<MovieNav activeTab={activeTab} onNavClick={onNavClick} mix={mix}/>).toJSON();
  expect(component).toMatchSnapshot();
});
