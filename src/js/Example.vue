<template>
	<div>
		<div class="container pt-4">
			<h2>{{ title }}</h2>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['title'],
		data() {
			return {
				default: 'yo'
			}
		},
		mounted() {
			// console.log('called');
		}
	}
</script>