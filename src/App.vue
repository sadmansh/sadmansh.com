<template>
	<div id="app">
    	<main>
    		<div class="left">
    			<div class="container">
    				<img src="./assets/triangle.svg">
    				<h1>Hey, I am Sadman,</h1>
    				<h2>Your average bearded web developer!</h2>
    			</div>
    		</div>
    		<div class="right">
    			<Home />
    		</div>
    	</main>
  </div>
</template>

<script>

import Home from '@/components/Home.vue'

export default {
	name: 'App',
	components: {
		Home
	}
}
</script>

<style lang="scss">

@import "./assets/base";

body {
	padding: 0;
	margin: 0;
}

#app {
	padding: 0;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

main {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	min-height: 100vh;
	overflow-x: hidden;
}

.left,
.right {
	width: 100%;

	@include breakpoint (l) {
		width: 50%;
	}
}

.container {
	padding: 2rem;
}

.left {
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fbfbfb;
	text-align: center;

	@include breakpoint (l) {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
	}

	img {
		display: block;
		margin: 0 auto 2rem auto;
		width: 120px;
		height: auto;
	}
}

.right {
	@include breakpoint (l) {
		position: relative;
		top: 0;
		right: 0;
		left: 50%;
	}
}

</style>






















