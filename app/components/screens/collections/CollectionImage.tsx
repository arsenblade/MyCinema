import Image from 'next/image'
import { FC } from 'react'
import { ICollections } from './collections.interface'

const CollectionImage:FC<{collection: ICollections}> = ({collection: {image, title}}) => {
  return (
    <Image alt={title} src={image} layout='fill' draggable={false}/>
  )
}

export default CollectionImage