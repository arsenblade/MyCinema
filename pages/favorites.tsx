import Favorites from '@/components/screens/favorites/Favorites'
import { NextPageAuth } from '@/shared/types/auth.types'
import { NextPage } from 'next'
import React from 'react'

const FavoritesPage: NextPageAuth = () => {
  return (
    <Favorites />
  )
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage