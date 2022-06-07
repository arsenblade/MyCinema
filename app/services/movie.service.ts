import { getMoviesUrl } from "@/config/api.config"
import { IMovie } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptors"

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm ? {
        searchTerm,
      } : {}
    })
  }
}