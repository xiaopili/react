import React from 'react';

const style = {
	counterDom: {
		margin : '30px'
	}
};

class componentDetail extends React.Component {
  state = {
	  type: 'componentDetail'
  };
  render() {
    return (
      <div>
		{this.state.type}
		<div style={style.counterDom}></div>
	  </div>
    );
  }
}
export default componentDetail;
