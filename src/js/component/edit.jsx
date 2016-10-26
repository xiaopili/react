import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';

const style = {
  title: {
    margin: '20px',
  }
};

class componentEdit extends React.Component {
  state = {
	  logged: true,
	  type: 'componentEdit'
  };
  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };
  render() {
    return (
     <div>
	 	<Toggle
		label="设置为控制组件"
		defaultToggled={true}
		onToggle={this.handleChange}
		labelPosition="right"
		style={{margin: 20}}
		/>
		{this.state.logged?<div style={style.title}>控制组件</div>:<div style={style.title}>展示组件</div>}
      </div>
    );
  }
}
export default componentEdit;
