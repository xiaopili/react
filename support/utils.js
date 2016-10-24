import { exec } from 'child_process';

export const openUrl = (url) => {
	const execStr = process.platform === 'win32' ? 'start' : 'open';
	exec(`${execStr} ${url}`);
};
