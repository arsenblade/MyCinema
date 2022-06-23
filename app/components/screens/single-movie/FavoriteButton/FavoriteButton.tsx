import { UserService } from '@/services/user.service'
import { IMovie } from '@/shared/types/movie.types'
import { toastError } from '@/utils/toast-error'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useFavorites } from '../../favorites/useFavorites'
import cn from 'classnames'

import styles from './FavoriteButton.module.scss'
interface IFavoriteButton {
  movieId: string
}

const FavoriteButton:FC<IFavoriteButton> = ({movieId}) => {
  const [isSmashed, setIsSmashed] = useState(false)

  const {favoritesMovies, refetch} = useFavorites()

  useEffect(() => {
    if(!favoritesMovies) return

    const isHasMovie = favoritesMovies.some(m => m._id === movieId)
    if(isHasMovie !== isSmashed) setIsSmashed(isHasMovie) 
  }, [favoritesMovies, isSmashed, movieId])

  const {mutateAsync} = useMutation('update favorites', () => UserService.toggleFavorite(movieId), {
    onSuccess: () => {
      setIsSmashed(!isSmashed)
      refetch()
    },
    onError:(error) => {
      toastError(error, 'Update favorite list')
    },
  })
  return (
    <button onClick={() => mutateAsync()} 
      className={cn(styles.button, {
        [styles.animate]: isSmashed
      })}
      style={{backgroundImage: `url('/heart-animation.png')`}}
    />
  )
}

export default FavoriteButton