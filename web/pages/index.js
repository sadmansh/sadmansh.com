import Intro from '../components/Home/Intro'
import Work from '../components/Home/Work'
import Help from '../components/Home/Help'
import Main from '../components/Layout/Main'
import MainHead from '../components/Layout/MainHead'

const Index = () => {
	return (
		<>
			<MainHead>
				<meta charset="UTF-8" />
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
				<Intro />
				<Help />
				<Work />
			</Main>
		</>
	)
}

export default Index
