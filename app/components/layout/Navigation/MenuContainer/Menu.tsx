import { FC } from "react"
import AuthItems from "./auth/AuthItems"
import { IMenu } from "./menu.interface"

import styles from './Menu.module.scss'
import MenuItem from "./MenuItem"

interface MenuProps {
  menu: IMenu
}

const Menu:FC<MenuProps> = ({menu: {items, title}}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map(item => (
          <MenuItem item={item} key={item.link} />
        ))}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  )
}

export default Menu