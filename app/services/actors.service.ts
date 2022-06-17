import { getActorsUrl } from "@/config/api.config"
import { IActor } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptors"
import axios from "api/interceptors"
import { IActorEditInput } from "@/components/screens/admin/actors/actor/actor-edit.interface"

export const ActorsService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IActor[]>(getActorsUrl(''), {
      params: searchTerm ? {
        searchTerm,
      } : {}
    })
  },

  async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},

  async getById(_id: string) {
    return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
  },

  async updateActor(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

  async createActor() {
		return axios.post<string>(getActorsUrl(`/`))
	},
}