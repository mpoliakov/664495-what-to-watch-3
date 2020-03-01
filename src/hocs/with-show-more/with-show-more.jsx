import React from 'react';
import PropTypes from 'prop-types';
import ShowMoreBtn from '../../components/show-more-btn/show-more-btn.jsx';

const withShowMore = (Component, step) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        shownItemsCount: step
      };

      this._handleBtnClick = this._handleBtnClick.bind(this);
    }

    _handleBtnClick() {
      this.setState((state) => ({
        shownItemsCount: state.shownItemsCount + step
      }));
    }

    render() {
      const {items} = this.props;
      const {shownItemsCount} = this.state;

      return <React.Fragment>
        <Component films={items.slice(0, shownItemsCount)} {...this.props}/>
        {items.length > shownItemsCount && <ShowMoreBtn onClick={this._handleBtnClick}/>}
      </React.Fragment>;
    }
  }

  WithShowMore.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({}))
  };

  return WithShowMore;
};

export default withShowMore;
