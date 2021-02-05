import { getRandomNumber } from "../../helpers/random";
import { getWikiArticles } from "../api/wiki-api";

const namespaced = true;

const state = {
	article: null
};
const getters = {
	getArticle: state => state.article
};
const mutations = {
	setArticle: (state, article) => {
		state.article = article;
	}
};

const actions = {
	queryWikiArticle: async function(context) {
		let goal = context.rootGetters["sdg/getGoal"].title;
		let area = context.rootGetters["sdg/getArea"];
		let query = `${goal} and ${area}`;
		console.log(query);
		let wikiArticles = await context.dispatch("fetchArticles", query);
		let randomArticleIndex = getRandomNumber(wikiArticles.length - 1);

		let article = wikiArticles[randomArticleIndex];
		context.commit("setArticle", article);
	},
	fetchArticles: async query => {
		let response = await getWikiArticles(query);
		let articles = response.data;
		return articles;
	}
};

export default {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
