import React from 'react';
class componentList extends React.Component {
  state = {
	  type: 'componentList'
  };
  render() {
    return (
      <div>{this.state.type}</div>
    );
  }
}
export default componentList;
