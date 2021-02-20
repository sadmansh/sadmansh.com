import styles from '../../styles/Home.module.scss'

const Intro = () => {
	return (
		<section className={styles.intro}>
			<div className="container">
				<h1>Hey, I'm Sadman!</h1>
				<small>(I am not sad)</small>
				<p>
					I am a Software Engineer, focused on front-end, with a strong passion in building simple, and
					functional web applications. I build user-focused apps with UX, testing, and performance constraints
					in mind. I also write clean and well-documented code (like literally every other developer).
				</p>

				<p>
					I mainly work with React.js and Node.js, but I also have years of experience working with Django,
					Vue.js, and WordPress.
				</p>

				<p>
					I'm currently building cool things at{' '}
					<a
						href="https://www.industrydive.com"
						target="_blank"
						rel="noopener noreferrer"
						id="industrydive-url"
					>
						Industry Dive
					</a>
					. Here's my{' '}
					<a href="/Resume-Sadman-Shawmik.pdf" target="_blank" id="resume-url">
						resume
					</a>
					.
				</p>

				<p>
					If you want to take a look at some of my work, please scroll down. Otherwise, if you want to hire
					me, work together, or just want to say hi (people rarely do this, though) you can{' '}
					<a href="mailto:hello@sadmansh.com">email</a> me at hello@sadmansh.com or find me on:
				</p>

				<ul className="social">
					<li>
						<a href="https://github.com/sadmansh" target="_blank" rel="noopener noreferrer" id="github-url">
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://linkedin.com/in/sadmansh"
							target="_blank"
							rel="noopener noreferrer"
							id="linkedin-url"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://instagram.com/sadmansh"
							target="_blank"
							rel="noopener noreferrer"
							id="instagram-url"
						>
							Instagram
						</a>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Intro
