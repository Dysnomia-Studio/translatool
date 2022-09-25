import useConfiguration from './useConfiguration';

/**
 * Get files configuration on filesystem
 */
export default function useFileList(selectedFolder) {
	const config = useConfiguration(selectedFolder);

	return config?.files;
}
