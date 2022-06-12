import { getUsersUrl } from "@/config/api.config"
import axios from "api/interceptors"

export const AdminService = {
	async getCountUsers() {
    const response = await axios.get<number>(getUsersUrl('/count'));
		return response
	},
}