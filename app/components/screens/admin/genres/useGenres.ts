import { ITableItem } from "@/components/ui/admin-table/AdminTable/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { GenreService } from "@/services/genre.service";
import { getGenresList } from "@/utils/movie/getGenresList";
import { toastError } from "@/utils/toast-error";
import { ChangeEvent, useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500)

  const queryData = useQuery(['genre list', debouncedSearch], () => 
    GenreService.getAll((debouncedSearch)), {
      select: ({data}) => data.map((genre):ITableItem => ({
        _id: genre._id,
        editUrl: getAdminUrl(`genre/edit/${genre._id}`),
        items: [genre.name, genre.slug]
      })),
      onError: (error) => {
        toastError(error, 'Genre List')
      }
    }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onError(error) {
				toastError(error, 'Delete genre')
			},
			onSuccess() {
				toastr.success('Delete genre', 'delete was successful')
				queryData.refetch()
			},
		}
  )

  return useMemo(() => ({
    handleSearch,
    ...queryData,
    searchTerm,
    deleteAsync
  }), [queryData, searchTerm, deleteAsync])
}