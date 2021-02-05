import axios from "axios";

/**
 * returns a list of wiki articles that match query string
 * @param {String} - query
 */
export const getWikiArticles = async (query)=>{
	var url = "https://en.wikipedia.org/w/api.php";

	var params = {
		action: "query",
		list: "search",
		srsearch: query,
		format: "json"
	};

	url = url + "?origin=*";
	Object.keys(params).forEach(function(key) {
		url += "&" + key + "=" + params[key];
	});

	try {
		let response = await axios.get(url);
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
