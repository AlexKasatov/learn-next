/* eslint-disable react/prop-types */
// import Head from 'next/head';
// import Image from 'next/image';
import { server } from '../config/index.js';
import ArcticleList from '../components/ArcticleList';

export default function Home({ article }) {
        // eslint-disable-next-line no-console
        console.log('🚀 ~ file: index.js ~ line 5 ~ Home ~ article', article);

        return (
                <div>
                        <ArcticleList article={article} />
                </div>
        );
}

// * get all post's data from api
export const getStaticProps = async () => {
        const res = await fetch(`${server}/api/articles`);
        const article = await res.json();
        return {
                props: { article },
        };
};

// export const getStaticProps = async () => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//         const article = await res.json();
//         return {
//                 props: { article },
//         };
// };
