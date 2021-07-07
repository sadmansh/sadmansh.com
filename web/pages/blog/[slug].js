import Main from '../../components/Layout/Main'
import MainHead from '../../components/Layout/MainHead'
import Article from '../../components/Blog/Article'
import { getAllSlugs, getPost } from '../../lib/api'

const ArticlePage = ({ postData }) => {
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
				<title>Sadman Shawmik - Software Engineer</title>
			</MainHead>
			<Main>
				<Article post={postData} />
			</Main>
		</>
	)
}

export default ArticlePage

export const getStaticPaths = async (props) => {
	const data = await getAllSlugs('post')
	const paths = data.map((post) => ({
		params: { slug: post.slug.current }
	}))
	return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
	const data = await getPost(params.slug)
	return {
		props: {
			postData: data
		}
	}
}
