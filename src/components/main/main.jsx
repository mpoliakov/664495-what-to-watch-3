import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card.jsx';
import PageContent from '../page-content/page-content.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';

const Main = (props) => {
  const {
    promoFilm,
    genres,
    genreFilter,
    onGenreClick,
    films,
    onMovieCardClick
  } = props;

  return <React.Fragment>
    <MovieCard film={promoFilm}/>
    <PageContent>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList genres={genres} activeGenre={genreFilter} onGenreClick={onGenreClick} />
        <MoviesList films={films} onMovieCardClick={onMovieCardClick}/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
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
  genres: PropTypes.arrayOf(PropTypes.string),
  genreFilter: PropTypes.string,
  onGenreClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string
  })),
  onMovieCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promoFilm: state.films.find((f) => f.id === state.promoFilmId),
  genres: [...new Set(state.films.map((film) => film.meta.genre))].sort(),
  genreFilter: state.genreFilter,
  films: state.films.filter((f) => f.id !== state.promoFilmId && (!state.genreFilter || f.meta.genre === state.genreFilter)),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenreFilter(genre));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
