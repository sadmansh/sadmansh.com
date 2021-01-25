import BlockContent from '@sanity/block-content-to-react'
import styles from '../../styles/Blog.module.scss'
import Link from 'next/link'

const Article = ({ post }) => {
	const serializers = {
		types: {
			code: (props) => (
				<pre data-language={props.node.language}>
					<code>{props.node.code}</code>
				</pre>
			)
		}
	}

	return (
		<article className={styles.article}>
			<div className="container">
				<h2>{post.title}</h2>
				<div className="post-meta">
					By <Link href="/">Sadman</Link> on{' '}
					{new Date(post.publishedAt).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</div>
				<BlockContent blocks={post.body} serializers={serializers} />
			</div>
		</article>
	)
}

export default Article
