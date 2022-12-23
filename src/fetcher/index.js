import ApiClient from "../Configs/AxiosConfig";

const url = "products";
export const fetchProduct = async () => {
	const responese = await ApiClient.get(url);
	return await responese.data;
};
