import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import Catalog from '@/components/ui/catalog-movies/Catalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { getMovieUrl } from '@/config/url.config'
import { ActorsService } from '@/services/actors.service'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'
import { IActor, IMovie } from '@/shared/types/movie.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Error404 from '../404'

interface IMoviePage {
  movie: IMovie | undefined,
  similarMovies: IGalleryItem[]
}

const MoviePage: NextPage<IMoviePage> = ({similarMovies, movie}) => {
  return (
  movie ?
   <SingleMovie
    similarMovies={similarMovies || []}
    movie={movie}
  	/> 
  : <Error404/>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((m) => ({
			params: { slug: m.slug },
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
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		const {data: dataSimilarMovies} = await MovieService.getByGenres(movie.genres.map((g) => g._id))

    const similarMovies: IGalleryItem[] = dataSimilarMovies.filter((m) => m._id !== movie._id).map(m => ({
      name: m.title,
      posterPath: m.poster,
      link: getMovieUrl(m.slug)
    }))

		return {
			props: { similarMovies , movie },
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default MoviePage