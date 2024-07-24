import axiosInstance from '@/services/APIs';
import { useCallback, useEffect, useState } from 'react';

const useAxios = (url: string) => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	const loadingAxios = useCallback(async () => {
		try {
			setLoading(true);
			const response = await axiosInstance.get(`api/${url}`);
			setData(response.data.results || response.data)
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		loadingAxios();
	}, [loadingAxios]);

	return { data, isLoading };
};

export default useAxios;
