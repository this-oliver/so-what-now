<template>
  <div id="app">
    <b-container fluid>
      <b-row
        class="title mt-5 mb-1"
        align-h="center">
        <b-col cols="auto">
          So-What-Now?
        </b-col>
      </b-row>
      <b-row
        class="my-2"
        align-h="center">
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
