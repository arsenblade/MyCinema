import { FC } from 'react'
import AuthButton from './AuthButton'

import styles from './AuthPlaceholder.module.scss'
interface IAuthPlaceholder {
  slug: string
}

const AuthPlaceholder:FC<IAuthPlaceholder> = ({slug}) => {
  return (
    <div className={styles.placeholder}>
      <div>You must be logged in to start watching</div>
      <AuthButton slug={slug} />
    </div>
  )
}

export default AuthPlaceholder