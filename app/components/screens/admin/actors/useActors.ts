import { ITableItem } from "@/components/ui/admin-table/AdminTable/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { ActorsService } from "@/services/actors.service";
import { toastError } from "@/utils/toast-error";
import { ChangeEvent, useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";

export const useActors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500)

  const queryData = useQuery(['actors list', debouncedSearch], () => 
    ActorsService.getAll((debouncedSearch)), {
      select: ({data}) => data.map((actors):ITableItem => ({
        _id: actors._id,
        editUrl: getAdminUrl(`actors/edit/${actors._id}`),
        items: [actors.name, String(actors.countMovies)]
      })),
      onError: (error) => {
        toastError(error, 'Actors List')
      }
    }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorsId: string) => ActorsService.deleteActor(actorsId),
		{
			onError(error) {
				toastError(error, 'Delete actor')
			},
			onSuccess() {
				toastr.success('Delete actor', 'delete was successful')
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