import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import PageContent from '../page-content/page-content.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';

const Main = (props) => {
  const {
    promoFilm,
    genres,
    films,
    onMovieCardClick
  } = props;

  return <React.Fragment>
    <MovieCard film={promoFilm}/>
    <PageContent>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList genres={genres} />
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
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    posterUrl: PropTypes.string,
    meta: PropTypes.exact({
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired
    })
  }),
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })),
  onMovieCardClick: PropTypes.func.isRequired
};

export default Main;
