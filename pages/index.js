/* eslint-disable react/prop-types */
import Head from 'next/head';
import Image from 'next/image';

export default function Home({ article }) {
        // eslint-disable-next-line no-console
        console.log('🚀 ~ file: index.js ~ line 5 ~ Home ~ article', article);

        return <div>Main Page</div>;
}

export const getStaticProps = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        const article = await res.json();
        return {
                props: { article },
        };
};
