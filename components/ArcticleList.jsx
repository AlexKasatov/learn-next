/* eslint-disable react/prop-types */
import { Children } from 'react';
import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArcticleList = ({ article }) => (
        <div className={articleStyles.grid}>
                {' '}
                {Children.toArray(
                        article.map(({ title, body, id }) => <ArticleItem body={body} title={title} id={id} />)
                )}
        </div>
);

export default ArcticleList;
