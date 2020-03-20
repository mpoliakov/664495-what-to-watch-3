import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PageContent from '../page-content/page-content.jsx';
import MovieCardPromo from '../movie-card-promo/movie-card-promo.jsx';
import MovieCatalog from '../movie-catalog/movie-catalog.jsx';
import {getPromoFilm} from '../../reducer/catalog/selectors';

const Main = (props) => {
  const {
    promoFilm,
  } = props;

  return <React.Fragment>
    <MovieCardPromo film={promoFilm}/>
    <PageContent>
      <MovieCatalog/>
    </PageContent>
  </React.Fragment>;
};

Main.propTypes = {
  promoFilm: PropTypes.shape({
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
    previewVideoLink: PropTypes.string.isRequired
  }),
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
