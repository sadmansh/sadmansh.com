import Main from '../components/Layout/Main'
import MainHead from '../components/Layout/MainHead'

const Index = () => {
	return (
		<>
			<MainHead>
				<meta charSet="UTF-8" />
				<meta name="description" content="Please wear a mask." />
				<meta property="og:title" content="Sadman Shawmik" />
				<meta property="og:description" content="Please wear a mask." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/hi.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Sadman Shawmik" />
				<meta name="twitter:description" content="Please wear a mask." />
				<meta name="robots" content="noindex" />
				<title>Wear a mask</title>
			</MainHead>
			<Main>
				<div style={{ textAlign: 'center', maxWidth: '720px', margin: '2rem auto' }}>
					<img
						src="//preview.redd.it/65sc1p0xvpu51.jpg?width=744&auto=webp&s=36d918c0867b7b08d5c682e4b7a5d122e5ec3b47"
						alt="How to wear a mask"
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			</Main>
		</>
	)
}

export default Index
