import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main/>
      </Route>
      <Route path="/films/:id" component={MoviePage} exact>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
