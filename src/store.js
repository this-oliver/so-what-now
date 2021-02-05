import Vue from "vue";
import Vuex from "vuex";
import SDG from "./data/vuex/sdg-module";


Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		sdg: SDG
	}
});

export default store;
