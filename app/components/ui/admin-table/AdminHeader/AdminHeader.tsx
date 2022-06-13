import { FC } from 'react'
import SearchField from '../../search-field/SearchField'
import { IAdminHeader } from './admin-header.interface'
import AdminCreateButton from './AdminCreateButton'

import styles from './AdminHeader.module.scss'

const AdminHeader:FC<IAdminHeader> = ({onClick, handleSearch, searchTerm}) => {
  return (
    <div className={styles.header}>
      <SearchField  searchTerm={searchTerm} handleSearch={handleSearch}/>
      {onClick && <AdminCreateButton onClick={onClick} />}
    </div>
  )
}

export default AdminHeader