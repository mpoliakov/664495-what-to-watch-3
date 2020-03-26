import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import history from '../../history';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

const App = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/" component={Main} exact/>
      <Route path="/films/:id" component={MoviePage} exact/>
    </Switch>
  </BrowserRouter>
);

export default App;
