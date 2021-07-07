import AllPosts from '../../components/Blog/AllPosts'
import Main from '../../components/Layout/Main'
import MainHead from '../../components/Layout/MainHead'
import { categoryQuery } from '../../lib/api'

const Index = ({ posts, category }) => {
	return (
		<>
			<MainHead>
				<meta charSet="UTF-8" />
				<meta name="description" content="Software Engineer. This is my portfolio and blog." />
				<meta property="og:title" content="Sadman Shawmik" />
				<meta property="og:description" content="Software Engineer. This is my portfolio and blog." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/hi.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Sadman Shawmik" />
				<meta name="twitter:description" content="Software Engineer. This is my portfolio and blog." />
				<title>Snippets - Sadman Shawmik</title>
			</MainHead>
			<Main>
				<AllPosts posts={posts} category={category} />
			</Main>
		</>
	)
}

export const getStaticProps = async (context) => {
	const data = await categoryQuery('snippets')
	return {
		props: {
			posts: data.posts,
			category: {
				slug: data.slug.current,
				title: data.title
			}
		}
	}
}

export default Index
