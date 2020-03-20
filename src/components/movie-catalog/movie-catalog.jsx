import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import withActiveState from '../../hocs/with-active-state/with-active-state.jsx';
import withShowMore from '../../hocs/with-show-more/with-show-more.jsx';
import {ActionCreator} from '../../reducer/catalog/reducer';
import {getGenres, getGenreFilter, getFilteredFilms} from '../../reducer/catalog/selectors';

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
      handleGenreChange,
    } = this.props;

    return <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresListWrapped items={genres} onGenreChange={handleGenreChange} />
      <MoviesListWrapped items={films}/>
    </section>;
  }
}

MovieCatalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })),
  genres: PropTypes.arrayOf(PropTypes.string),
  genreFilter: PropTypes.string,
  handleGenreChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  genres: getGenres(state),
  genreFilter: getGenreFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenreFilter(genre));
  },
});

export {MovieCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
