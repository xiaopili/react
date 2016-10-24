import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '10px 32px 16px 2%',
	height: '500px'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  link: {
	  color: 'black',
	  textDecoration: 'none'
  }
};

const MenuExampleIcons = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem leftIcon={<RemoveRedEye />}>
			<Link style={style.link} to="/component/list">组件列表</Link>
		</MenuItem>
        <MenuItem leftIcon={<PersonAdd />}>
			<Link style={style.link} to="/component/detail">组件详情</Link>
		</MenuItem>
		<MenuItem leftIcon={<ContentLink />}>
			<Link style={style.link} to="/component/edit">组件编辑</Link>
		</MenuItem>
        <Divider />
        <MenuItem leftIcon={<ContentCopy />}>
			<Link style={style.link} to="/component/logs">操作日志</Link>
		</MenuItem>
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleIcons;
