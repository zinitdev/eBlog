import { endpoints, fetcher } from '@/utils/services';
import useSWR from 'swr';

const usePosts = () => {
    const { data, error, isLoading } = useSWR(endpoints.posts, fetcher);

    return {
        user: data,
        isLoading,
        isError: error,
    };
};

export default usePosts;
