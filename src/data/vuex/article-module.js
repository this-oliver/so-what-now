import { getRandomNumber } from "../../helpers/random";
import { getRandomSearch } from "../api/usearch-api";
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

		let wikiArticles = await getWikiArticles(query).data;
		let randomArticleIndex = getRandomNumber(wikiArticles.length - 1);

		let article = wikiArticles[randomArticleIndex];
		context.commit("setArticle", article);
	},
	queryWeb: async function(context) {
		let goal = context.rootGetters["sdg/getGoal"].title;
		let area = context.rootGetters["sdg/getArea"];
		let query = `${goal} and ${area}`;

		let data = await getRandomSearch(query);
		let items = await data.value;
		let randomItemIndex = getRandomNumber(items.length - 1);

		let article = items[randomItemIndex];
		context.commit("setArticle", article);
	},
};

export default {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
