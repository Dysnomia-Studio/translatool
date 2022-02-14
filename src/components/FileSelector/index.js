import useFileList from '../../hooks/useFileList';

import FileSelectorView from './view.js';

export default function FileSelector(props) {
	return (
		<FileSelectorView
			{...props}
			useFileList={useFileList}
		/>
	);
}
