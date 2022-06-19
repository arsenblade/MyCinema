import { getMoviesUrl } from "@/config/api.config"
import { IMovie } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptors"
import axios from "api/interceptors"
import { IMovieEditInput } from "@/components/screens/admin/movies/movie/movie-edit.interface"

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm ? {
        searchTerm,
      } : {}
    })
  },

  async getMostPopularMovies() {
    const {data: movies} = await axiosClassic.get<IMovie[]>(
      getMoviesUrl('/most-popular')
    )

    return movies
  },

  async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},

  async getById(_id: string) {
    return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
  },

  
  async getByGenres(genreIds: string[]) {
    return axiosClassic.post<IMovie[]>(getMoviesUrl('/by-genres'), {genreIds})
  },

  async getByActor(actorIds: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorIds}`))
  },

  async updateMovie(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},

  async createMovie() {
		return axios.post<string>(getMoviesUrl(`/`))
	},
}