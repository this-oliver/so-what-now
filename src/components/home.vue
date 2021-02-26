<template>
  <div>
    <!-- title and link -->
    <b-row
      class="my-5"
      align-h="around"
      v-if="goal && area">
      <b-col
        class="mt-2"
        sm="11"
        md="7">
        <goal-card
          :goal="goal"
          :loading="loadingGoal" />
      </b-col>
      <b-col
        class="mt-2"
        sm="11"
        md="4">
        <article-card
          :article="article"
          :loading="loadingArticle" />
      </b-col>
    </b-row>

    <!-- targets -->
    <b-row
      class="my-5"
      align-h="center"
      v-if="goal && area">
      <b-col
        cols="12">
        <targets-card
          :targets="goal.targets"
          :loading="loadingGoal" />
      </b-col>
    </b-row>

    <!-- buttons -->
    <b-row
      class="my-5"
      align-h="center">
      <b-col cols="auto">
        <b-button
          :variant="(generated)?'dark':'success'"
          @click="getGoal">
          <span v-if="generated">
            ♻️ regenerate
          </span>
          <span v-else>
            🚀 generate
          </span>
          <b-spinner
            small
            v-if="loadingGoal" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import articleVue from "./cards/article.vue";
	import goalVue from "./cards/goal.vue";
	import targetsVue from "./cards/targets.vue";

	export default {
		name: "Landing",
		components:{
			"goal-card": goalVue,
			"targets-card": targetsVue,
			"article-card": articleVue
		},
		computed: {
			...mapGetters({
				goal:"sdg/getGoal",
				area: "sdg/getArea",
				article: "article/getArticle",
				loadingGoal: "sdg/getGoalStatus",
				loadingArticle: "article/getArticleStatus",
			}),
			generated: function(){
				return this.goal !== null || this.area !== null || this.article !== null;
			}
		},
		methods: {
			...mapActions({
				getGoal: "sdg/generate"
			}),
		},
	};
</script>
