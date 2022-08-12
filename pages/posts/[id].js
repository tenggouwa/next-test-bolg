import Head from 'next/head';
import dayjs from 'dayjs';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import utilStyles from '../../styles/utils.module.scss';

export default function Post({ postData }) {
  const { title, date, id, contentHtml } = postData
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          Time: <time dateTime={date}>{dayjs().format(date, 'YYYY-MM-DD')}</time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}