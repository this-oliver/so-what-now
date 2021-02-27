<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-skeleton-wrapper :loading="loading">
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
          <b-row v-if="article">
            <b-col cols="12">
              <span>
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
            </b-col>
          </b-row>
          <b-row
            v-else
            align-h="center">
            <b-col cols="auto">
              <b-button
                :disabled="!goal"
                @click="generateArticle">
                fetch random article
                <b-spinner
                  small
                  v-if="loadingArticle" />
              </b-button>
            </b-col>
          </b-row>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	export default {
		name:"Article",
		props:{
			article: {
				type: Object,
				default: null,
				required: false
			},
			loading: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			...mapGetters({
				goal:"sdg/getGoal",
				loadingArticle: "article/getArticleStatus"
			})
		},
		methods:{
			...mapActions({
				generateArticle: "article/queryWeb"
			})
		}
	};
</script>

<style>

</style>
