import { getRandomNumber } from "../../helpers/random";
import { getNews } from "../api/news-api";

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
	queryWeb: async function(context) {
		let goal = context.rootGetters["sdg/getGoal"];
		let area = context.rootGetters["sdg/getArea"];
		
		let title = goal.title;
		if (title.length > 30) { //shorten string, if necessary
			title = title.substring(0, 30);
		}
		
		try {
			let articles = await getNews(title, area);
			let randomArticleIndex = getRandomNumber(articles.length - 1);
	
			let article = articles[randomArticleIndex];
			context.commit("setArticle", article);
		} catch (error) {
			console.log(error);
		}


	},
};

export default {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
