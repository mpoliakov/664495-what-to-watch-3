import React from 'react';

const withActiveTab = (Component, defaultTab) => {
  return class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: defaultTab
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(tab) {
      this.setState({
        activeTab: tab
      });
    }

    render() {
      const {activeTab} = this.state;

      return <Component {...this.props} activeTab={activeTab} onTabClick={this._handleTabClick}/>;
    }
  };
};

export default withActiveTab;
