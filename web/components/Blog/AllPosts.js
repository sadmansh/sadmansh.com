import Post from './Post'
import styles from '../../styles/Blog.module.scss'

const AllPosts = ({ posts }) => {
	return (
		<div className={styles.allPosts}>
			<div className="container">
				<h1>Latest Articles</h1>
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
