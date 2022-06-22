import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import FavoriteItem from './FavoriteItem'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites:FC = () => {

  const {isLoading, favoritesMovies} = useFavorites()

  return (
    <Meta title='Favorites'>
      <Heading title='Favorites'/>

      <section className={styles.favorites}>
        {isLoading ?
        <SkeletonLoader count={3} className={styles.skeletonLoader} containerClassName={styles.containerLoader} />
        :
        favoritesMovies?.map(favMovie => <FavoriteItem key={favMovie._id} movie={favMovie}/>)
        }
      </section>
    </Meta>
  )
}

export default Favorites