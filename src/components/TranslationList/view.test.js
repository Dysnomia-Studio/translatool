import { render } from '@testing-library/react';

import TranslationListView from './view.js';

test('Renders an empty list', () => {
	render(
		<TranslationListView
			list={[]}
			lang='en'
			direction='left'
		/>
	);
});
