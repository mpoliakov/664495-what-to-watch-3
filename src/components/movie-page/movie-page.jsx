import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PageContent from '../page-content/page-content.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {getFilm, getFilmsLikeThat, getReviews} from '../../reducer/film/selectors';
import {Operation} from '../../reducer/film/reducer';

class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      match,
      loadComponentData,
    } = this.props;

    loadComponentData(match.params.id);
  }

  render() {
    const {
      film,
      reviews,
      filmsLikeThat,
    } = this.props;

    if (!film) {
      return null;
    }

    return <React.Fragment>
      <MovieCardFull film={film} reviews={reviews}/>
      <PageContent>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={filmsLikeThat}/>
        </section>
      </PageContent>
    </React.Fragment>;
  }
}

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })),
  filmsLikeThat: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  loadComponentData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  reviews: getReviews(state),
  filmsLikeThat: getFilmsLikeThat(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComponentData: (filmId) => {
    dispatch(Operation.loadReviews(filmId));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
