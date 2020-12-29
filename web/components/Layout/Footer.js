import styles from '../../styles/Footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<div class="container">
			<ul class="social-links">
				<li><a aria-current="page" class="" href="/">About</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/rss.xml">RSS</a></li>
			</ul>
		</div>
	</footer>
)

export default Footer