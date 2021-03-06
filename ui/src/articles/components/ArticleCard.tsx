import React from 'react'
import { Link } from 'react-router-dom'

import Panel from '../../common/Panel'
import ArticleHeader from '../components/ArticleHeader'
import { Article } from '../models'
import styles from './ArticleCard.module.css'
import ArticleFooter from './ArticleFooter'
import ArticleMenu from './ArticleMenu'

interface Props {
  article: Article
  readMoreBasePath: string
}

export default ({ article, readMoreBasePath }: Props) => {
  const readMorePath = readMoreBasePath + article.id
  article.isOffline = readMorePath.startsWith('/offline')

  return (
    <Panel>
      <ArticleHeader article={article} to={readMorePath}>
        <ArticleMenu article={article} noShortcuts />
      </ArticleHeader>
      <article className={styles.summary}>
        {article.image && (
          <Link to={readMorePath} className={styles.illustration} title="Open article details">
            <img src={article.image} alt="Illustration" />
          </Link>
        )}
        {article.text && <p>{article.text}</p>}
      </article>
      {!article.isOffline && <ArticleFooter article={article} />}
    </Panel>
  )
}
