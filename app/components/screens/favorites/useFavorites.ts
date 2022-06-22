import { UserService } from "@/services/user.service"
import { useQuery } from "react-query"

export const useFavorites = () => {
  const {isLoading, data: favoritesMovies, refetch} = useQuery('favorites movies', () => UserService.getFavorites(), {
    select: ({data}) => data
  })

  return {isLoading, refetch, favoritesMovies}
}