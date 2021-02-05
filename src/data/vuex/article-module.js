import { getRandomNumber } from "../../helpers/random";
import { getNews } from "../api/news-api";
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
		let goal = context.rootGetters["sdg/getGoal"];
		if(!goal) return;
		
		let title = goal.title;
		if (title.length > 30) { //shorten string, if necessary
			title = title.substring(0, 30);
		}
		let query = `${title}`;

		let response = await getNews(query);
		let items = await response.data.articles;
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
