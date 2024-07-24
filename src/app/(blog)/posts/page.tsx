import Link from "next/link";

const Posts = () => {
	return (
		<ul>
			{/* {posts.map((post: any) => (
				<li key={post.id}>
					<Link href={`/posts/${post.slug}`}>{post.title}</Link>
				</li>
			))} */}
		</ul>
	);
};

export default Posts;
