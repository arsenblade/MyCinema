import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'
import Meta from '@/utils/meta/Meta'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import Content from './Content/Content'
import { ISingleMovie } from './single-movie.interface'
import { useUpdateCountOpened } from './useUpdateCountOpened'
const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
  ssr: false
})
const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
  ssr: false
})

const SingleMovie:FC<ISingleMovie> = ({movie, similarMovies}) => {
  useUpdateCountOpened(movie.slug)
  return (
    <Meta title={movie.title}  description={`Watch ${movie.title}`} >
      <Banner image={movie.bigPoster} Detail={() => <Content movie={movie} />}/>
      <DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl}/>
      <div className='mt-12'>
        <SubHeading title='Similar'/>
        <Gallery items={similarMovies} />
      </div>

      <DynamicRateMovie slug={movie.slug} movieId={movie._id}/>
    </Meta>
  )
}

export default SingleMovie