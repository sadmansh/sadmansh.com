import Link from 'next/link'
import styles from '../../styles/Blog.module.scss'

const Post = ({ post }) => {
	return (
		<div className={styles.post}>
			<Link href={`/blog/${post.slug.current}`}>
				<a className="post-row">
					<time>
						{new Date(post.publishedAt).toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric'
						})}
					</time>
					<h2>{post.title}</h2>
				</a>
			</Link>
		</div>
	)
}

export default Post
