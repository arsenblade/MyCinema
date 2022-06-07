import { FC } from 'react'

import styles from './FavoriteMovies.module.scss'

const NotAuthFavoritesMovies:FC = () => {
  return (
    <div>For viewing favorites please authorize!</div>
  )
}

export default NotAuthFavoritesMovies