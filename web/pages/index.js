import Intro from '../components/Home/Intro'
import Work from '../components/Home/Work'
import Main from '../components/Layout/Main'
import MainHead from '../components/Layout/MainHead'

const Index = () => {
	return (
		<>
			<MainHead>
				<title>Sadman Shawmik - Software Engineer</title>
			</MainHead>
			<Main>
				<Intro />
				<Work />
			</Main>
		</>
	)
}

export default Index