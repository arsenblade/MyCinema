import Catalog from '@/components/ui/catalog-movies/Catalog'
import { ActorsService } from '@/services/actors.service'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'
import { IActor, IMovie } from '@/shared/types/movie.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Error404 from '../404'

interface IGenrePage {
  movies: IMovie[],
  actor: IActor | undefined
}

const ActorPage: NextPage<IGenrePage> = ({movies, actor}) => {
  return (
    actor ?
   <Catalog
    movies={movies || []}
    title={actor.name}
  /> 
  : <Error404/>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorsService.getAll()
		const paths = actors.map((a) => ({
			params: { slug: a.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorsService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: { movies, actor },
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default ActorPage