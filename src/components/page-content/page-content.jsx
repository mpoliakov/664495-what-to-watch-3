import React from 'react';
import PropTypes from 'prop-types';
import PageFooter from '../page-footer/page-footer.jsx';

const PageContent = (props) => {
  return <div className="page-content">
    {props.children}
    <PageFooter/>
  </div>;
};

PageContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default PageContent;
