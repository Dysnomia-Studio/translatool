import useConfiguration from './useConfiguration';

export default function useFileList(selectedFolder) {
	const config = useConfiguration(selectedFolder);

	return config?.files;
}
