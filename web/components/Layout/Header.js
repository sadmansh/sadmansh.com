import styles from '../../styles/Header.module.scss'

const Header = () => (
	<header className={styles.header}>
		<div className="container">
			<a href="/" className={styles.navBrand}>
				<svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#B4F7F2"></circle>
				</svg>
				<span>Sadman Shawmik</span>
			</a>
			<nav>
				<a href="/">About</a>
				<a href="#work">Work</a>
			</nav>
		</div>
	</header>
)

export default Header