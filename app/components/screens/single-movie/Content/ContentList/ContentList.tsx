import Link from 'next/link'
import React, { FC, Fragment } from 'react'
import { IContentList } from '../content.interface'

import styles from './ContentList.module.scss'

const ContentList:FC<IContentList> = ({name, links}) => {
  return (
    <div className={styles.list}>
      <div className={styles.name}>{name}</div>
      <div className={styles.links}>
        {links.map((link, idx) => <Fragment key={link._id}>
          <Link href={link.link}>
            <a>
              {link.title}
            </a>
          </Link>
          {idx !== links.length - 1 ? ', ' : ''}
        </Fragment>)}
      </div>
    </div>
  )
}

export default ContentList