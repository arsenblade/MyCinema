import GenreList from "@/components/screens/admin/genres/GenresList";
import { NextPageAuth } from "@/shared/types/auth.types"

const GenresListPage:NextPageAuth = () => {
  return (
    <GenreList />
  )
}

GenresListPage.isOnlyAdmin = true;

export default GenresListPage