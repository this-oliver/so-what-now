<template>
  <div id="app">
    <b-row align-h="center">
      <b-col cols="auto">
        So-What-Now?
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col cols="12">
        <landing />
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import landingVue from "./components/landing.vue";

	export default {
		name: "App",
		components: {
			"landing":landingVue
		}
	};
</script>
