import { FC } from "react"
import GenreMenu from "./genres/GenreMenu"
import Menu from "./Menu"
import { firstMenu, UserMenu } from "./menu.data"

const MenuContainer:FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={UserMenu} />
    </div>
  )
}

export default MenuContainer