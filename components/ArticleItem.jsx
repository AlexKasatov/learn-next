/* eslint-disable react/prop-types */
import Link from 'next/link';
import articleStyle from '../styles/Article.module.css';

const ArticleItem = ({ title, body, id }) => (
        <Link href="/article/[id]" as={`/article/${id}`}>
                <a className={articleStyle.card}>
                        <h3>{title} &rarr;</h3>
                        <p>{body}</p>
                </a>
        </Link>
);

export default ArticleItem;
