import axios from "axios";

/**
 * returns a list of search items that match query string
 * @param {String} - query
 */
export const getNews = async query => {
	const API_KEY = process.env.VUE_APP_NEWS_API_KEY;

	const config = {
		headers: { "Access-Control-Allow-Origin": "*" }
	};

	try {
		let response = await axios.get(
			`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`,
			config
		);
		console.log(response);
		if (response.status == 200) return response;
		throw response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

//https://newsapi.org/docs/get-started
