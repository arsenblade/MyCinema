import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useGenres } from './useGenres'

const GenreList:FC = () => {
  const {handleSearch, isLoading, searchTerm, deleteAsync, data, createAsync} = useGenres()
  return (
    <Meta title='Genres'>
      <AdminNavigation />
      <Heading title='Genres' />
      <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
      <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Title', 'Slug']} tableItems={data || []}/>
    </Meta>
  )
}

export default GenreList