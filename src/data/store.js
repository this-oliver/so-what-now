import Vue from "vue";
import Vuex from "vuex";
import Sdg from "./vuex/sdg-module";
import Article from "./vuex/article-module";


Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		sdg: Sdg,
		article: Article,
	}
});

export default store;
