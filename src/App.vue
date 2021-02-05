<template>
  <div id="app">
    <b-container>
      <b-row
        class="title my-5"
        align-h="center">
        <b-col cols="auto">
          So-What-Now?
        </b-col>
      </b-row>
      <b-row class="my-5">
        <b-col cols="11">
          <landing />
        </b-col>
      </b-row>
    </b-container>
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
