import Vue from "vue";
import Vuex from "vuex";
import { getAllGoals, getSingleGoal, getGoalAreas } from "./data/sdg-api";
import {getRandomNumber} from "./helpers/random";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		goal: null,
		area: null,
	},
	getters: {
		getGoal: state => state.goal,
		getArea: state => state.area,
	},
	mutations: {
		setGoal: (state, goal)=>{
			state.goal = goal;
		},
		setArea: (state, area)=>{
			state.area = area;
		},
	},
	actions: {
		generate: async function(context){
			let goals = await context.dispatch("fetchAllGoals");
			let randomGoalNumber = getRandomNumber(goals.length-1);
			
			await context.dispatch("fetchSingleGoal",randomGoalNumber);
			await context.dispatch("fetchAreas", randomGoalNumber);
		},
		fetchAllGoals: async () => {
			let response = await getAllGoals();
			let sdg = response.data;
			return sdg;
		},
		fetchSingleGoal: async (context, goalNumber) => {
			let response = await getSingleGoal(goalNumber);
			let goal = response.data[0];
			context.commit("setGoal", goal);
			return goal;
		},
		fetchAreas: async (context, goalNumber) => {
			let response = await getGoalAreas(goalNumber);
			let areas = response.data;
			let randomArea = getRandomNumber(areas.length-1);
			
			let singleArea = areas[randomArea].geoAreaName;
			context.commit("setArea", singleArea);
			return areas;
		},
	}
});

export default store;
