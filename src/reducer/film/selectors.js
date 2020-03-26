import {createSelector} from 'reselect';
import Namespace from '../namespace';
import {getFilms} from '../catalog/selectors';

export const getFilm = (state) => state[Namespace.FILM].film;

export const getReviews = (state) => state[Namespace.FILM].reviews;

export const getFilmsLikeThat = createSelector(
    getFilm,
    getFilms,
    (film, films) => {
      if (!film) {
        return [];
      }

      return films.filter((i) => i.genre === film.genre && i.id !== film.id).slice(0, 4);
    }
);
