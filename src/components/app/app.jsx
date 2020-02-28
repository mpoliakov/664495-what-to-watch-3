import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilmId: ``
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  _renderApp() {
    const {
      promoFilm,
      genres,
      films
    } = this.props;

    const {currentFilmId} = this.state;

    if (currentFilmId) {
      return <MoviePage film={promoFilm} filmsLikeThat={films.slice(0, 4)} onMovieCardClick={this._handleMovieCardClick}/>;
    }

    return <Main promoFilm={promoFilm} genres={genres} films={films} onMovieCardClick={this._handleMovieCardClick}/>;
  }

  _handleMovieCardClick(film) {
    this.setState({
      currentFilmId: film.id
    });
  }

  render() {
    const {
      promoFilm,
      films
    } = this.props;

    const filmsLikeThat = films.filter((film) => film.meta.genre === promoFilm.meta.genre).slice(0, 4);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage film={promoFilm} filmsLikeThat={filmsLikeThat} onMovieCardClick={this._handleMovieCardClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoFilm: PropTypes.exact({
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
    }),
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }))
  }),
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string
  }))
};

export default App;
