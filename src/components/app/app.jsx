import React from 'react';
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
    const {currentFilmId} = this.state;

    if (currentFilmId) {
      return <MoviePage onMovieCardClick={this._handleMovieCardClick}/>;
    }

    return <Main onMovieCardClick={this._handleMovieCardClick}/>;
  }

  _handleMovieCardClick(film) {
    this.setState({
      currentFilmId: film.id
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage onMovieCardClick={this._handleMovieCardClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
