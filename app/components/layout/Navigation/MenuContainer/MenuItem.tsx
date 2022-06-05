import { useRouter } from "next/router"
import { FC } from "react"
import { IMenuItem } from "./menu.interface";
import cn from 'classnames'

import styles from './Menu.module.scss';
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

interface MenuItemProps {
  item: IMenuItem
}
 
const MenuItem:FC<MenuItemProps> = ({item}) => {
  const {asPath} = useRouter();

  return (
    <li className={cn({
      [styles.active]: asPath === item.link
    })}>
      <Link href={item.link}>
        <a>
          <MaterialIcon name={item.icon} />
          <span>
            {item.title}
          </span>
        </a>
      </Link> 
    </li>
  )
}

export default MenuItem