import { remove } from 'lodash'
import { FC } from 'react'
import SkeletonLoader from '../../SkeletonLoader'
import { IAdminTable } from './admin-table.interface'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'

import styles from './AdminTable.module.scss'

const AdminTable:FC<IAdminTable> = ({headerItems, isLoading, removeHandler, tableItems}) => {
  return (
    <div>
      <AdminTableHeader headerItems={headerItems} />
      {isLoading 
      ? <SkeletonLoader count={1} height={48} className='mt-4'/>
      : tableItems.length 
        ? tableItems.map((tableItem) => <AdminTableItem key={tableItem._id} removeHandler={() => removeHandler(tableItem._id)} tableItem={tableItem} />)
        : <div className={styles.notFound}>Elements not found</div>}
    </div>
  )
}

export default AdminTable