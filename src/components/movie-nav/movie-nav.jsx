import React from 'react';
import PropTypes from 'prop-types';
import {MovieCardTabs} from '../../utils';

const MovieNav = (props) => {
  const {
    activeTab = MovieCardTabs.OVERVIEW,
    onNavClick,
    mix
  } = props;

  return <nav className={`movie-nav ${mix}`.trim()}>
    <ul className="movie-nav__list">
      {Object.keys(MovieCardTabs).map((key) => (
        <li className={MovieCardTabs[key] === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} key={`movie-nav__item--${key}`}>
          <a href="#" className="movie-nav__link" onClick={() => onNavClick(MovieCardTabs[key])}>{MovieCardTabs[key]}</a>
        </li>
      ))}
    </ul>
  </nav>;
};

MovieNav.propTypes = {
  activeTab: PropTypes.string,
  onNavClick: PropTypes.func.isRequired,
  mix: PropTypes.string
};

export default MovieNav;
