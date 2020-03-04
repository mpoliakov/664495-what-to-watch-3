import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PageContent from '../page-content/page-content.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import MovieCatalog from '../movie-catalog/movie-catalog.jsx';

const Main = (props) => {
  const {
    promoFilm,
    onMovieCardClick
  } = props;

  return <React.Fragment>
    <MovieCard film={promoFilm}/>
    <PageContent>
      <MovieCatalog onMovieCardClick={onMovieCardClick}/>
    </PageContent>
  </React.Fragment>;
};

Main.propTypes = {
  promoFilm: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    posterUrl: PropTypes.string,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    runTime: PropTypes.string,
    meta: PropTypes.exact({
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired
    }),
    rating: PropTypes.exact({
      score: PropTypes.number,
      count: PropTypes.number
    })
  }),
  onMovieCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
});

export {Main};
export default connect(mapStateToProps)(Main);
