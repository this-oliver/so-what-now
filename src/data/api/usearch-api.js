import axios from "axios";

/**
 * returns a list of search items that match query string
 * @param {String} - query
 */
export const getRandomSearch = async query => {
	const API_KEY = process.env.VUE_APP_RAPID_API_KEY;
	
	const config = {
		params: {
			q: query,
			pageNumber: "1",
			pageSize: "10",
			autoCorrect: "true",
			fromPublishedDate: "null",
			toPublishedDate: "null"
		},
		headers: {
			"x-rapidapi-key": API_KEY,
			"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
		}
	};

	try {
		let response = await axios.get("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI", config);
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
