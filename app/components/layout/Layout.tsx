import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import SideBar from './SideBar/SideBar'

interface LayoutProps {
  children: ReactNode;
}

const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
     <Navigation/> 
     <div className={styles.center}>{children}</div>
     <SideBar />
    </div>
  )
}

export default Layout