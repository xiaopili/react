import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';

const style = {
	paper: {
		padding: 0,
		width: '97%',
		minHeight: '600px'
	}
}
class componentIndex extends React.Component {
  state = {};
  render() {
    return (
      <div className="routerView">
	  	<MuiThemeProvider>
		  <div className="content">
		  	<Paper style={style.paper}>
			  {this.props.children}
		  	</Paper>
		  </div>
		</MuiThemeProvider>
      </div>
    );
  }
}
export default componentIndex;
