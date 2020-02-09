import React from 'react';
import MovieCard from "../movie-card/movie-card.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from "prop-types";

const Main = (props) => {
  const {
    data: {
      genres,
      films,
      promoFilm
    }
  } = props;

  return <React.Fragment>
    <MovieCard film={promoFilm}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList genres={genres} />
        <MoviesList films={films} />
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  data: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.string),
    films: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })),
    promoFilm: PropTypes.exact({
      title: PropTypes.string.isRequired,
      meta: PropTypes.exact({
        genre: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
      })
    })
  })
};

export default Main;
