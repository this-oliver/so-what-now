<template>
  <div>
    <b-row
      class="my-5"
      align-h="between"
      v-if="goal && area">
      <b-col
        sm="10"
        md="7">
        <span class="sub-title">
          Goal
        </span>
        <hr>
        <b-card>
          <b-card-title>
            <b>📍 Goal</b> {{ goal.code }}: {{ goal.title }}
          </b-card-title>
          <b-card-sub-title>
            🗺 Country: <b>{{ area }}</b>
          </b-card-sub-title>
          <hr>
          <b-card-text>
            {{ goal.description }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col
        sm="10"
        md="3"
        v-if="article">
        <span class="sub-title">
          Random Article
        </span>
        <hr>
        <p>
          {{ article.title }}
        </p>
        <b-link
          :href="article.url"
          target="_blank">
          click me
        </b-link>
      </b-col>
    </b-row>
    <hr v-if="goal && area">
    <span
      class="sub-title"
      v-if="goal && area">
      Targets
    </span>

    <b-row
      class="my-5"
      align-h="center"
      v-if="goal && area">
      <b-col
        class="mb-1"
        sm="10"
        md="6"
        v-for="target in goal.targets"
        :key="target.code">
        <b-card>
          <b-card-title>
            <b>🎯 {{ target.code }}</b>
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
    <b-row
      class="my-5"
      align-h="center">
      <b-col cols="auto">
        <b-button
          variant="success"
          @click="generateRandomGoal">
          generate
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
			})
		},
		methods: {
			...mapActions({
				generateRandomGoal: "sdg/generate"
			})
		},
	};
</script>
