import { FC } from 'react'

import styles from './FavoriteMovies.module.scss'

const NotAuthFavoritesMovies:FC = () => {
  return (
    <div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80">
    For viewing favorites plz autorize!
  </div>
  )
}

export default NotAuthFavoritesMovies