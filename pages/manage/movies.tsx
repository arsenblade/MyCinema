import MovieList from "@/components/screens/admin/movies/MoviesList";
import { NextPageAuth } from "@/shared/types/auth.types"

const MoviesListPage:NextPageAuth = () => {
  return (
    <MovieList />
  )
}

MoviesListPage.isOnlyAdmin = true;

export default MoviesListPage