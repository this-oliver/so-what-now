import Vue from "vue";
import Vuex from "vuex";
import { fetchSdgs } from "./data/sdg";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		sdgs: []
	},
	getters: {
		getSdgs: state => state.sdgs
	},
	mutations: {
		setSdg: (state, sdgs) => {
			state.sdgs = sdgs;
		}
	},
	actions: {
		fetchSdg: async contex => {
			let response = await fetchSdgs();
			let sdg = response.data;
			contex.commit("setSdg", sdg);
		}
	}
});

export default store;
