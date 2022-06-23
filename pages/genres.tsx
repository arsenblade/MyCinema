import Collections from '@/components/screens/collections/Collections'
import { ICollections } from '@/components/screens/collections/collections.interface'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Error404 from './404'

const GenresPage: NextPage<{collections: ICollections[]}> = ({collections}) => {
  return (
    collections ?
    <Collections collections={collections || []}/> : <Error404 />
  )
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const {data : collections} = await GenreService.getCollections()

    return {
      props: {
        collections
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default GenresPage