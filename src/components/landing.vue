<template>
  <div>
    <b-skeleton-wrapper :loading="loadingGoal">
      <!-- loading gesture -->
      <template #loading>
        <b-card
          class="mb-2"
          v-for="(i, index) in [1, 2, 3]"
          :key="index">
          <b-skeleton
            animation="wave"
            width="85%" />
          <b-skeleton
            animation="wave"
            width="55%" />
          <b-skeleton
            animation="wave"
            width="70%" />
        </b-card>
      </template>

      <!-- title and link -->
      <b-row
        class="my-5"
        align-h="around"
        v-if="goal && area">
        <b-col
          class="mt-2"
          sm="11"
          md="7">
          <span class="sub-title">
            📍 Goal {{ goal.code }}
          </span>
          <hr>
          <b-card>
            <b-card-title>
              <b>🗃 Title</b>: {{ goal.title }}
            </b-card-title>
            <b-card-sub-title>
              <b>🌍 Country</b> : {{ area }}
            </b-card-sub-title>
            <hr>
            <b-card-text>
              {{ goal.description }}
            </b-card-text>
          </b-card>
        </b-col>
        <b-col
          class="mt-2"
          sm="11"
          md="4"
          v-if="article">
          <span class="sub-title">
            📰 Random Article
          </span>
          <hr>
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
        </b-col>
      </b-row>
    </b-skeleton-wrapper>

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
				loadingGoal: "sdg/getGoalStatus"
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
