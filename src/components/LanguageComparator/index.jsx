import useTranslation from '../../hooks/useTranslation';

import LanguageComparatorView from './view.jsx';

export default function LanguageComparator(props) {
	return (
		<LanguageComparatorView
			{...props}
			useTranslation={useTranslation}
		/>
	);
}
