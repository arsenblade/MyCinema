import { getMovieUrl } from '@/config/url.config'
import { useAuth } from '@/hooks/useAuth'
import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'

interface IFavoriteItem {
  movie: IMovie
}

const FavoriteItem:FC<IFavoriteItem> = ({movie}) => {
  const {user} = useAuth()
  return (
    <div className={styles.itemWrapper}>
      { user && <FavoriteButton movieId={movie._id} /> }
      <Link href={getMovieUrl(movie.slug)}>
        <a className={styles.item}>
          <Image 
            alt={movie.title}
            src={movie.bigPoster}
            layout='fill'
            draggable={false}
            priority
          />
        </a>
      </Link>
    </div>
  )
}

export default FavoriteItem