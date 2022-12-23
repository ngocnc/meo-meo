import axios from "axios";
import configs from "./Config";

const axiosClient = axios.create({
	baseURL: configs.API_URL,
	headers: { "X-Custom-Header": "foobar" },
});

const ApiClient = {
	async get(URL) {
		return await axiosClient.get(URL);
	},
};

export default ApiClient;
