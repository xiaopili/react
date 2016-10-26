import React from 'react';
class componentDetail extends React.Component {
  state = {
	  type: 'componentDetail'
  };
  render() {
    return (
      <div>{this.state.type}</div>
    );
  }
}
export default componentDetail;
