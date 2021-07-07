import AllPosts from '../../components/Blog/AllPosts'
import Main from '../../components/Layout/Main'
import MainHead from '../../components/Layout/MainHead'
import { getAllPosts } from '../../lib/api'

const Index = ({ posts }) => {
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
				<title>Blog - Sadman Shawmik</title>
			</MainHead>
			<Main>
				<AllPosts posts={posts} />
			</Main>
		</>
	)
}

export const getStaticProps = async (context) => {
	const data = await getAllPosts('snippet')
	return {
		props: {
			posts: data
		}
	}
}

export default Index
