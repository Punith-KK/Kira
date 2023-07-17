<script>
	import Loading from "../lib/components/Loading.svelte";
</script>

<div class="bg" />
<div class="app">
	<Loading />
	<main>
		<slot />
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
	}

	.bg {
		background-image: url("src/lib/images/background.jpg");
		filter: saturate(1);
		height: 100vh;
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		width: 100%;
	}
</style>
