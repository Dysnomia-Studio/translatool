import useConfiguration from './useConfiguration';

/**
 * Get files configuration on filesystem
 */
export default function useFileList(selectedFolder, lastUpdate) {
	const config = useConfiguration(selectedFolder, lastUpdate);

	return config?.files;
}
