import React from 'react';
class SvnIndex extends React.Component {
  state = {};
  render() {
    return (
      <div className="routerView">
        {this.props.children}
      </div>
    );
  }
}
export default SvnIndex;
