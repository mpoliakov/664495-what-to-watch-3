import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PageHeader = (props) => {
  const {mix} = props;

  return <React.Fragment>
    <h1 className="visually-hidden">WTW</h1>
    <header className={`page-header ${mix}`.trim()}>
      <div className="logo">
        <Link className="logo__link" to={`/`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>
  </React.Fragment>;
};

PageHeader.propTypes = {
  mix: PropTypes.string
};

export default PageHeader;
