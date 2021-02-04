import axios from "axios";

export let fetchSdgs = async () => {
	try {
		let response = await axios.get(
			"https://unstats.un.org/sdgapi/v1/sdg/Goal/List"
		);
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
