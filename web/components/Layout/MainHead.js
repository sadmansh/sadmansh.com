import Head from 'next/head'

const MainHead = ({ children }) => (
	<Head>
		<link rel="icon" href="/favicon.svg" />
		{children}
	</Head>
)

export default MainHead