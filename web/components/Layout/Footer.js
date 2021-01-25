import styles from '../../styles/Footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<div className="container">
			<ul className="social-links">
				<li>
					<a aria-current="page" href="/">
						About
					</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/rss.xml">RSS</a>
				</li>
			</ul>
		</div>
	</footer>
)

export default Footer
