import Post from './Post'
import styles from '../../styles/Blog.module.scss'

const AllPosts = ({ posts }) => {
	return (
		<div className={styles.allPosts}>
			<div className="container">
				<h2>Latest Articles</h2>
				<div className={styles.posts}>
					{posts.map((post) => (
						<Post post={post} key={post._id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AllPosts
