import { useEffect, useState } from 'react';

import './view.css'

export default function FileSelector({ useFileList }) {
	const fileList = useFileList();
	const [selectedFile, setSelectedFile] = useState(fileList[0]);

	useEffect(() => {
		setSelectedFile(fileList[0]);
	}, [fileList])

	if(typeof selectedFile !== 'string') {
		return null;
	}

	const separator = (i) => (<i key={i} className="arrow right"></i>);
	let i = 0;
	return (
		<div>
			{selectedFile.split('/')
				.map((elt) => <span key={elt} className="fileName-element">{elt}</span>)
				.reduce((accu, elem) => {
					return accu === null ? [separator(++i), elem] : [...accu, separator(++i), elem]
				}, null)
			}
		</div>
	);
}
