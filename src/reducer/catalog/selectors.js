import {createSelector} from 'reselect';
import Namespace from '../namespace';

export const getPromoFilm = (state) => state[Namespace.CATALOG].promoFilm;

export const getFilms = (state) => state[Namespace.CATALOG].films;

export const getGenres = createSelector(
    getFilms,
    (films) => [...new Set(films.map((film) => film.genre))].sort()
);

export const getGenreFilter = (state) => state[Namespace.CATALOG].genreFilter;

export const getFilteredFilms = createSelector(
    getFilms,
    getGenreFilter,
    (films, genre) => genre ? films.filter((film) => film.genre === genre) : films
);
