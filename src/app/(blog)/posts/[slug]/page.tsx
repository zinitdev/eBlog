import { useRouter } from 'next/router';

function Post({ post }: any) {
    const router = useRouter();

    if (router.isFallback) {
		return <div>Loading...</div>;
    }
    
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}

export default Post;
