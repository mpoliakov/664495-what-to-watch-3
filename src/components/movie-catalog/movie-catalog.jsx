import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import withActiveState from '../../hocs/with-active-state/with-active-state.jsx';
import withShowMore from '../../hocs/with-show-more/with-show-more.jsx';

const GenresListWrapped = withActiveState(GenresList);
const MoviesListWrapped = withShowMore(MoviesList, 8);

class MovieCatalog extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      films,
      genres,
      onGenreChange,
      onMovieCardClick
    } = this.props;

    return <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresListWrapped items={genres} onGenreChange={onGenreChange} />
      <MoviesListWrapped items={films} onMovieCardClick={onMovieCardClick}/>
    </section>;
  }
}

MovieCatalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
  genres: PropTypes.arrayOf(PropTypes.string),
  genreFilter: PropTypes.string,
  onGenreChange: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.filteredFilms,
  genres: [...new Set(state.films.map((film) => film.meta.genre))].sort(),
  genreFilter: state.genreFilter
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.changeGenreFilter(genre));
    dispatch(ActionCreator.getFilteredFilms());
  },
});

export {MovieCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
