import styles from '../../styles/Home.module.scss'

const Work = () => {
	return (
		<section className={styles.work} id="work">
			<div className="container">
				<h2>My Work</h2>
				<p>
					When I am working as an independent contractor, I usually help out agencies with the more
					complicated parts of their projects and sometimes the whole project itself. This is a list of some
					of those and also some of my own side projects.
				</p>

				<ul className="project-list">
					<li>
						<a
							href="https://entertainment.directv.com"
							rel="noopener noreferrer"
							target="_blank"
							id="work-url-directv"
						>
							DIRECTV Entertainment Hub
						</a>
						<p>WordPress, JavaScript</p>
					</li>
					<li>
						<a
							href="https://ourheartlands.pluralartmag.com"
							rel="noopener noreferrer"
							target="_blank"
							id="work-url-heartlands"
						>
							Heartlands
						</a>
						<p>React, WordPress REST API</p>
					</li>
					<li>
						<a href="https://www.ricemedia.co" rel="noopener noreferrer" target="_blank" id="work-url-rice">
							Rice
						</a>
						<p>WordPress, JavaScript</p>
					</li>
					<li>
						<a
							href="https://www.mujibalbum.com"
							rel="noopener noreferrer"
							target="_blank"
							id="work-url-mujibalbum"
						>
							Mujib Album
						</a>
						<p>React (Next.js), GraphQL</p>
					</li>
					<li>
						<a
							href="https://github.com/sadmansh/snapcharge"
							rel="noopener noreferrer"
							target="_blank"
							id="work-url-snapcharge"
						>
							SnapCharge
						</a>
						<p>React, Redux, Node</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Work
