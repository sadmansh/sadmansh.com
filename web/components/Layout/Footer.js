import Link from 'next/Link'
import styles from '../../styles/Footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<div className="container">
			<ul className="social-links">
				<li>
					<Link href="/">
						<a aria-current="page">About</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/rss.xml">RSS</Link>
				</li>
			</ul>
		</div>
	</footer>
)

export default Footer
