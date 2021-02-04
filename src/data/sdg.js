import axios from "axios";

const baseUrl = "unstats.un.org/sdgapi";

export let fetchSdgs = async () => {
	try {
		let response = await axios.get(`${baseUrl}/v1/sdg/Goal/List`);
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
