import { FC } from 'react'
import { ISlider } from './slider.interface'
import { useSlider } from './useSlider'
import styles from './Slider.module.scss'
import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import { CSSTransition } from 'react-transition-group'

const Slider:FC<ISlider> = ({slides, buttonTitle}) => {
  const {slideIn, currentIdx, isExistsNext, isExistsPrev, handleArrowClick } = useSlider(slides.length)


  return (
    <div className={styles.slider}>
      <CSSTransition
        in={slideIn}
        classNames='slide-animation'
        timeout={300}
        unmountOnExit
      >
        <SlideItem
          slide={slides[currentIdx]}
          buttonTitle={buttonTitle}
        />
      </CSSTransition>

      {isExistsPrev && <SlideArrow variant='left' clickHandler={() => handleArrowClick('prev')} />}
      {isExistsNext && <SlideArrow variant='right' clickHandler={() => handleArrowClick('next')} />}
    </div>
  )
}

export default Slider