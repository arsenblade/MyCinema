import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import Content from './Content/Content'
import { ISingleMovie } from './single-movie.interface'

const SingleMovie:FC<ISingleMovie> = ({movie, similarMovies}) => {
  return (
    <Meta title={movie.title}  description={`Watch ${movie.title}`} >
      <Banner image={movie.bigPoster} Detail={() => <Content movie={movie} />}/>

      <div className='mt-12'>
        <SubHeading title='Similar'/>
        <Gallery items={similarMovies} />
      </div>
    </Meta>
  )
}

export default SingleMovie