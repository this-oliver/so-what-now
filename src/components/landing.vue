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
        <b-skeleton-wrapper :loading="loadingGoal">
          <template #loading>
            <b-skeleton
              animation="wave"
              width="85%" />
            <b-skeleton
              animation="wave"
              width="100%" />
          </template>
          <p>
            <span class="sub-title">
              📍 Goal {{ goal.code }} in 🌍 {{ area }}
            </span>
          </p>
          <hr>
          <b-card>
            <b-card-title>
              <b>🗃 Title</b>: {{ goal.title }}
            </b-card-title>
            <hr>
            <b-card-text>
              {{ goal.description }}
            </b-card-text>
          </b-card>
        </b-skeleton-wrapper>
      </b-col>
      <b-col
        class="mt-2"
        sm="11"
        md="4">
        <b-skeleton-wrapper :loading="loadingArticle">
          <template #loading>
            <b-card>
              <b-skeleton
                animation="wave"
                width="100%" />
              <b-skeleton
                animation="wave"
                width="85%" />
              <b-skeleton
                animation="wave"
                width="40%" />
            </b-card>
          </template>
          <span class="sub-title">
            📰 Random Article
          </span>
          <hr>
          <span v-if="article">
            <p>
              <b>{{ article.title }}</b>
            </p>
            <p>
              <small><i>{{ article.description }}</i></small>
            </p>
            <b-link
              :href="article.url"
              target="_blank">
              click me to read full article
            </b-link>
          </span>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <!-- targets -->
    <b-row
      class="my-5"
      align-h="center"
      v-if="goal && area">
      <b-col
        class="mt-2"
        cols="12">
        <hr>
        <span
          class="sub-title">
          🎯 Targets
        </span>
      </b-col>
      <b-col
        class="mb-1"
        sm="11"
        md="11"
        v-for="target in goal.targets"
        :key="target.code">
        <b-skeleton-wrapper :loading="loadingGoal">
          <template #loading>
            <b-skeleton
              animation="wave"
              width="85%" />
            <b-skeleton
              animation="wave"
              width="100%" />
          </template>
          <b-card>
            <b-card-title>
              <b>{{ target.code }}</b>
            </b-card-title>
            <b-card-text>
              {{ target.description }}
            </b-card-text>

            <b v-if="target.indicators.length > 0">📊 Indicators</b>
            <b-list-group v-if="target.indicators.length > 0">
              <b-list-group-item
                v-for="indicator in target.indicators"
                :key="indicator.code">
                <small><b>{{ indicator.code }}</b></small>: {{ indicator.description }}
              </b-list-group-item>
            </b-list-group>
            <b-list-group v-else>
              <b-list-group-item>
                😐 No indicators
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-skeleton-wrapper>
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

	export default {
		name: "Landing",
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
