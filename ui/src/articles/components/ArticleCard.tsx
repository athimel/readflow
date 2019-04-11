import React from 'react'
import { Link } from 'react-router-dom'

import {Article} from '../models'
import ArticleHeader from '../components/ArticleHeader'

import styles from './ArticleCard.module.css'
import Panel from '../../common/Panel'
import ArticleFooter from './ArticleFooter'

type Props = {
  article: Article
  readMoreBasePath: string
}

export default ({article, readMoreBasePath}: Props) => {
  const readMorePath = readMoreBasePath + article.id
  article.isOffline = readMorePath.startsWith('/offline')
  
  return (
    <Panel>
      <ArticleHeader article={article} to={readMorePath} />
      <article className={ styles.summary }>
        { article.image &&
          <Link
            to={readMorePath}
            className={styles.illustration}
            title="Open article details">
              <img src={article.image} alt="Illustration" />
          </Link>
        }
        <p>{article.text}</p>
      </article>
      { !article.isOffline && <ArticleFooter article={article} />}
    </Panel>
  )
}