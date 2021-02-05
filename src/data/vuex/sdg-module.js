import { getAllGoals, getSingleGoal, getGoalAreas } from "../../data/api/sdg-api";
import { getRandomNumber } from "../../helpers/random";

const namespaced = true;

const state = {
	goal: null,
	area: null,
	loadingGoal: false
};
const getters = {
	getGoal: state => state.goal,
	getArea: state => state.area,
	getGoalStatus: state => state.loadingGoal
};
const mutations= {
	setGoal: (state, goal) => {
		state.goal = goal;
	},
	setArea: (state, area) => {
		state.area = area;
	},
	getGoalStatus: (state, loadingGoal) => {
		state.loadingGoal = loadingGoal;
	}
};

const actions = {
	generate: async function(context) {
		context.commit("getGoalStatus", true);
		let goals = await context.dispatch("fetchAllGoals");
		let randomGoalNumber = getRandomNumber(goals.length - 1);
		
		await context.dispatch("fetchSingleGoal", randomGoalNumber);
		await context.dispatch("fetchSdgAreas", randomGoalNumber + 1); // adds 1 to avoid 0 value in randomNumber variable
		await context.dispatch("article/queryWeb", null, { root: true });
		context.commit("getGoalStatus", false);
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
	fetchSdgAreas: async (context, goalNumber) => {
		let response = await getGoalAreas(goalNumber);
		let sdgAreas = response.data;
		let randomArea = getRandomNumber(sdgAreas.length - 1);

		let area = sdgAreas[randomArea];
		let areaName = area.geoAreaName;
		context.commit("setArea", areaName);
		return areaName;
	}
};

export default {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
