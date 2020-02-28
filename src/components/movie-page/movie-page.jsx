import React from 'react';
import PropTypes from 'prop-types';
import PageContent from '../page-content/page-content.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';

const MoviePage = (props) => {
  const {
    film,
    filmsLikeThat,
    onMovieCardClick
  } = props;

  return <React.Fragment>
    <MovieCardFull film={film}/>
    <PageContent>
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MoviesList films={filmsLikeThat} onMovieCardClick={onMovieCardClick}/>
      </section>
    </PageContent>
  </React.Fragment>;
};

MoviePage.propTypes = {
  film: PropTypes.exact({
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
    }),
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }))
  }),
  filmsLikeThat: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })),
  onMovieCardClick: PropTypes.func.isRequired
};

export default MoviePage;
