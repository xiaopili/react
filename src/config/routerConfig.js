import Index from '../js/index.jsx';
import componentDetail from '../js/component/detail.jsx';
import componentEdit from '../js/component/edit.jsx';
import componentList from '../js/component/list.jsx';
import componentIndex from '../js/component/index.jsx';
import Logs from '../js/logs/Logs.jsx';


export default {
	path: '/',
	component: Index,
	childRoutes: [
		{
			path: 'component',
			component: componentIndex,
			childRoutes: [{
				path: 'detail',
				component: componentDetail
			}, {
				path: 'edit',
				component: componentEdit
			}, {
				path: 'list',
				component: componentList
			}, {
				path: 'logs',
				component: Logs
			}]
		}
	]
};
