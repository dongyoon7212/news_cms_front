import axios from "axios";
import { getServerAddress } from "../../constants/serverAddress";

export const serverInstance = axios.create({
	baseURL: getServerAddress(),
	// headers: {
	// 	Authorization: "Bearer " + localStorage.getItem("AccessToken"),
	// },
});
