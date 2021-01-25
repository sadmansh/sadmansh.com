import Post from './Post'
import styles from '../../styles/Blog.module.scss'

const AllPosts = ({ posts }) => {
	return (
		<div className={styles.allPosts}>
			<div className="container">
				<h1>Latest Articles</h1>
				{posts.length ? (
					<div className={styles.posts}>
						{posts.map((post) => (
							<Post post={post} key={post._id} />
						))}
					</div>
				) : (
					<h2>Sorry, no posts to show 😔</h2>
				)}
			</div>
		</div>
	)
}

export default AllPosts
