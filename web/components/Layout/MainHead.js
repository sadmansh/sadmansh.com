import Head from 'next/head'

const MainHead = ({ children }) => {
	const analyticsCode = `
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-PPWXS2');
	`
	return (
		<Head>
			<script dangerouslySetInnerHTML={{ __html: analyticsCode }} />
			<link rel="icon" href="/favicon.svg" />
			{children}
		</Head>
	)
}

export default MainHead