import { render } from '@testing-library/react';

import TranslationListView from './view.jsx';

test('Renders an empty list', () => {
	render(
		<TranslationListView
			list={[]}
			lang='en'
			direction='left'
		/>
	);
});
