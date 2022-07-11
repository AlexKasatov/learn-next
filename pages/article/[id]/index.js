// import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta.jsx';
import { server } from '../../../config/index.js';

const article = ({ singleArticle }) => (
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // ? we can do like this
        // const router = useRouter();
        // const { id } = router.query;
        // ------------

        <>
                <Meta title={singleArticle.title} />
                <Link href="/"> Go Back </Link>
                <h1>{singleArticle.id}</h1>
                <p>{singleArticle.body}</p>
                <br />
        </>
);

export const getStaticProps = async (context) => {
        const res = await fetch(`${server}/api/articles/${context.params.id}`);
        const singleArticle = await res.json();
        return {
                props: {
                        singleArticle,
                },
        };
};

export const getStaticPaths = async () => {
        const res = await fetch(`${server}/api/articles`); // get all articles
        const allArticles = await res.json();

        const ids = allArticles.map((a) => a.id); // return only ids from articles
        const paths = ids.map((id) => ({ params: { id: id.toString() } })); // return object with strings id

        return {
                paths,
                fallback: false,
        };
};

// ? ========= THIS IS FOR SSG ===========
// * get single article from api
// export const getStaticProps = async (context) => {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//         const singleArticle = await res.json();
//         return {
//                 props: {
//                         singleArticle,
//                 },
//         };
// };

// * get static ids from api
// export const getStaticPaths = async () => {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//         const allArticles = await res.json();

//         const ids = allArticles.map((a) => a.id);
//         const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//         return {
//                 paths,
//                 fallback: false,
//         };
// };

// ? ========= THIS IS FOR SSR ===========
// export const getServerSideProps = async (context) => {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//         const singleArticle = await res.json();
//         return {
//                 props: {
//                         singleArticle,
//                 },
//         };
// };

export default article;
