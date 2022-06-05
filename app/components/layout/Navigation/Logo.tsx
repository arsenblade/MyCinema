import Link from "next/link"
import { FC } from "react"

import logoImage from '@/assets/images/logo-cinema.svg'
import Image from "next/image"
 
const Logo:FC = () => {
  return (
    <Link href='/'>
      <a className='px-layout mb-10 block'>
      <Image src={logoImage}  width={285} height={50} alt='Logo cinema' draggable={false}/>
      </a>
    </Link>
  )
}

export default Logo