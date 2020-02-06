import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoFilm} = props;

  return <React.Fragment>
    <Main promoFilm={promoFilm} />
    <div className="page-content">
      <section className="catalog">
      </section>
    </div>
  </React.Fragment>;
};

export default App;
