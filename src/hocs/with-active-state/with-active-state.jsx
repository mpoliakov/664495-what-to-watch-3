import React from 'react';

const withActiveState = (Component, defaultItem = null) => {
  return class WithActiveState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: defaultItem
      };

      this._handleActivate = this._handleActivate.bind(this);
      this._handleDeactivate = this._handleDeactivate.bind(this);
    }

    _handleActivate(item) {
      this.setState({
        activeItem: item
      });
    }

    _handleDeactivate() {
      this.setState({
        activeItem: null
      });
    }

    render() {
      const {activeItem} = this.state;
      return <Component {...this.props} activeItem={activeItem} onActivate={this._handleActivate} onDeactivate={this._handleDeactivate}/>;
    }
  };
};

export default withActiveState;
