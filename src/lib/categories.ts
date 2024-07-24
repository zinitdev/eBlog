import axiosInstance from '@/services/APIs';
import endpoints from '@/services/endpoints';

export async function getCategories() {
	const res = await axiosInstance.get(endpoints['categories']);
	return await res.data;
}
