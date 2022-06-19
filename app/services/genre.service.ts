import { getGenresUrl } from "@/config/api.config"
import { IGenre } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptors"
import axios from "api/interceptors"
import { IGenreEditInput } from "@/components/screens/admin/genres/genre/genre-edit.interface"

export const GenreService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},

	async create() {
		return axios.post<string>(getGenresUrl(''))
	},

	async update(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	}
}