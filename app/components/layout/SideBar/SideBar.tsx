import { FC } from 'react'
import Search from './Search/Search'
import styles from './SideBar.module.scss'

const SideBar:FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
    </div>
  )
}

export default SideBar