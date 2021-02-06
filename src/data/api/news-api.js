import axios from "axios";

/**
 * returns a list of search items that match query string
 * @param {String} - query
 */
export const getNews = async query => {
	let proxyUrl = window.location.href;
	
	try {
		let response = await axios.get(
			`${proxyUrl}https://newsapi.org/v2/everything?q=${query}`,
			{
				headers: {
					"Content-Type": "application/json",
					"X-Api-Key": process.env.VUE_APP_NEWS_API_KEY
				}
			}
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
