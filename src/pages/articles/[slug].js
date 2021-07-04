import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import { getPostBySlug, getAllArticles } from 'lib/api';
import Container from 'components/container';
import PostBody from 'components/post-body';
import Header from 'components/header';
import PostHeader from 'components/post-header';
import Layout from 'components/layout';
import PostTitle from 'components/post-title';
import Meta from 'components/meta';
import markdownToHtml from 'lib/markdownToHtml';

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const seo = {
    metaTitle: post.title,
    metaDescription: post.description,
    shareImage: post.image,
    article: true,
  };

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Meta seo={seo} />
              <PostHeader
                title={post.title}
                coverImage={post.image}
                date={post.published_at}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const articles = await getAllArticles();

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}
