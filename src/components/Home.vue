<template>
	<div class="container">
		<section id="about">
			<h2 class="section-title">About</h2>
			<div class="content">
				<p>
					I am a seasoned full-stack web developer, focused on front-end, with a demonstrated history of
					working in the web industry for over 5 years. I am well-versed CSS3 (Scss, Sass), JavaScript
					(Vue.js, ES6), Python (Django, Flask), and database technologies like PostgreSQL, MySQL, and
					MongoDB. I build scalable and performance-oriented responsive websites and write clean and
					well-documented code.
				</p>

				<p>
					Currently building cool things at
					<a href="https://newscred.com" target="_blank" id="newscred-link">NewsCred</a>.
				</p>

				<p>
					Click <a href="static/resume_sadman_shawmik.pdf" id="resume-link" target="_blank">here</a> to see my
					resume.
				</p>
			</div>
		</section>

		<section id="work">
			<h2 class="section-title">Work</h2>
			<div class="content">
				<ul v-if="more" class="projects">
					<transition-group name="list" mode="in-out">
						<li v-for="(project, index) in projects.slice(0, 5)" :key="index">
							<h3>
								<a :href="project.url" target="_blank">{{ project.title }}</a>
							</h3>
							<p>{{ project.description }}</p>
						</li>
					</transition-group>
				</ul>
				<ul v-else class="projects">
					<transition-group name="list" mode="out-in">
						<li v-for="(project, index) in projects" :key="index">
							<h3>
								<a :href="project.url" target="_blank">{{ project.title }}</a>
							</h3>
							<p>{{ project.description }}</p>
						</li>
					</transition-group>
				</ul>
				<span id="more-link" v-on:click="toggleButton">{{ moreButton }}</span>
			</div>
		</section>

		<section>
			<h2 class="section-title">Contact</h2>
			<div class="content">
				<p>
					Want to work together? Shoot me an email at
					<a href="mailto:hello@sadmansh.com" id="mail-link" target="_blank">hello@sadmansh.com</a>.
				</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			more: true,
			moreButton: 'Show More',
			projects: [
				{
					title: 'Rice',
					description:
						'Built the website for Rice Media, a Singaporean magazine, in collaboration with a specialized design team. Coded the whole theme and a bunch of custom PHP functions on top of WordPress.',
					url: 'http://ricemedia.co'
				},
				{
					title: 'Minimal Blog',
					description: 'A feature-packed (not what the name suggests) multi-author blog written in Django.',
					url: 'https://github.com/sadmansh/minimalblog'
				},
				{
					title: 'Bottle and Heels',
					description: 'Designed and created the website with a custom theme and plugins with WordPress.',
					url: 'https://www.bottleandheels.com'
				},
				{
					title: 'GradConnect',
					description: 'Collaborated with a design team to build the front-end for GradConnect.',
					url: 'https://grad-connect.com'
				},
				{
					title: 'Yaffe Ruden & Associates',
					description:
						'Worked with an agency to build this site for a primary care medical group based in New York.',
					url: 'http://yafferuden.com'
				},
				{
					title: 'Bohner Bespoke',
					description: 'Worked with their in-house design team to build the website using WordPress.',
					url: 'https://bohnerbespoke.com'
				},
				{
					title: 'Asian Film Archive',
					description:
						'Built both the back-end and front-end of this website that serves as a hub for the Asian film community',
					url: 'http://asianfilmarchive.org'
				},
				{
					title: 'SavyFool',
					description: 'A simple WordPress blog built from a client-provided design.',
					url: 'https://savyfool.com'
				},
				{
					title: 'Glitch',
					description: 'A super-minimal WordPress theme for blogs.',
					url: 'https://github.com/sadmansh/glitch'
				},
				{
					title: 'TMPLT.',
					description:
						'TMPLT was a project I started working on to keep all my HTML5 templates together. It is a list of responsive templates with flat & minimal designs that are free to use.',
					url: 'https://sadmansh.com/tmplt'
				}
			]
		};
	},
	methods: {
		toggleButton: function() {
			this.more = !this.more;
			this.moreButton = this.more ? 'Show More' : 'Show Less';
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../assets/base';

section {
	margin-bottom: 2rem;

	@include breakpoint(l) {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.content {
		@include breakpoint(l) {
			width: 70%;
		}
	}

	p:first-of-type {
		margin-top: 0;
	}
	p:last-of-type {
		margin-bottom: 0;
	}

	a {
		position: relative;
		text-decoration: none;
		color: #747fe0;
		font-weight: bold;
	}

	#more-link {
		display: inline-block;
		margin-bottom: 0.5rem;
		font-size: 0.9375rem;
		border-bottom: 1px dashed #747fe0;
	}
}

.section-title {
	display: block;
	margin: 0 0 1rem 0;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 1rem;

	@include breakpoint(l) {
		width: 25%;
	}
	@include breakpoint(xl) {
		width: 15%;
	}
}

.projects {
	padding: 0;
	margin: 0;

	li {
		display: block;
		margin-bottom: 1.5rem;
		list-style: none;
	}

	h3 {
		position: relative;
		padding: 0 0 0.25rem 0.5rem;
		margin: 0;

		a {
			color: #747fe0;
			text-decoration: none;
			font-size: 1rem;
		}

		&::before {
			content: '';
			position: absolute;
			width: 4px;
			height: 4px;
			background-color: #2a54f5;
			left: 0.0625rem;
			top: 11px;
			border-radius: 50%;
		}
	}
}

.list-enter-active,
.list-leave-active {
	transition: all 1s;
	opacity: 1;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(20px);
}
</style>
