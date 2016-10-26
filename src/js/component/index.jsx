import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';

class SvnIndex extends React.Component {
  state = {};
  render() {
    return (
      <div className="routerView">
	  	<MuiThemeProvider>
		 	<div className="content">{this.props.children}</div>
		</MuiThemeProvider>
      </div>
    );
  }
}
export default SvnIndex;
