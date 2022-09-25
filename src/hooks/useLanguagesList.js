import useConfiguration from './useConfiguration';

/**
 * Get languages configuration on filesystem
 */
export default function useLanguagesList(selectedFolder) {
	const config = useConfiguration(selectedFolder);

	return config?.languages;
}
