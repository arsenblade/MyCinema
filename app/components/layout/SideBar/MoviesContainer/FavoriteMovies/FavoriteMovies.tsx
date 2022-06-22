import { useFavorites } from '@/components/screens/favorites/useFavorites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import MoviesList from '../MoviesList'
import NotAuthFavoritesMovies from './NotAuthFavoritesMovies'

const FavoriteMovies:FC = () => {
  const {isLoading, favoritesMovies} = useFavorites()

  const {user} = useAuth()
  if(!user) return <NotAuthFavoritesMovies />
  return (
    isLoading ?
    <div className='mt-11'>
      <SkeletonLoader count={3} className='h-28 mb-4' />
    </div> 
    : 
    <MoviesList link='/favorites' movies={favoritesMovies?.slice(0,3) || []} title='Favorites' />
  )
}

export default FavoriteMovies