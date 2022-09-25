import useConfiguration from './useConfiguration';

export default function useLanguagesList(selectedFolder) {
	const config = useConfiguration(selectedFolder);

	return config?.languages;
}
