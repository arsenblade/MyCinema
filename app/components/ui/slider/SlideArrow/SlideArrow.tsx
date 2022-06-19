import { FC } from 'react'
import styles from './SlideArrow.module.scss'
import cn from 'classnames'
import MaterialIcon from '../../MaterialIcon'

interface ISlideArrow {
  variant: 'left' | 'right',
  clickHandler: () => void  
}

const SlideArrow:FC<ISlideArrow> = ({clickHandler, variant}) => {
  const isLeft = variant === 'left'
  const isRight = variant === 'right'

  return (
    <button onClick={clickHandler} className={cn(styles.arrow, {
      [styles.left]: isLeft,
      [styles.right]: isRight
    })}>
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  )
}

export default SlideArrow