<template>
  <div>
		<b-row align-h="center">
			<b-col cols="auto">
				cards
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col cols="auto">
				buttons
			</b-col>
		</b-row>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "Landing",
		computed: {
			...mapGetters({
				sdg:"getSdg"
			})
		}
	};
</script>
