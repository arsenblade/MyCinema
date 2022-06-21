import { getMovieUrl } from '@/config/url.config'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'
interface IAuthButton {
  slug: string
}
const AuthButton:FC<IAuthButton> = ({slug}) => {
  return (
    <Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
      <a className={styles.btn}>
        Sign in
      </a>
    </Link>
  )
}
export default AuthButton