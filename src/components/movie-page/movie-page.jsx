import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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
        <MoviesList items={filmsLikeThat} onMovieCardClick={onMovieCardClick}/>
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
    videoUrl: PropTypes.string,
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

const mapStateToProps = (state) => {
  const film = state.promoFilm; // state.films.find((f) => f.id === state.filmId); - should by state.filmId, but only promoFilm has all the data for now
  film.reviews = state.reviews.filter((r) => r.filmId === film.id);

  return {
    film,
    filmsLikeThat: state.films.filter((f) => f.meta.genre === film.meta.genre && f.id !== film.id).slice(0, 4)
  };
};

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
