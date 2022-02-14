import { useState } from 'react';

export default function useTranslation() {
	const [translationList, setTranslationList] = useState({
		test: 'Test',
		test2: 'Test 2',
		test3: 'Test 3',
	});

	// TODO: Get translation list from back-end

	return translationList;
}
