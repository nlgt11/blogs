import Head from 'next/head';

import { getAllArticles } from 'lib/api';
import Container from 'components/container';
import Layout from 'components/layout';
import MoreStories from 'components/more-stories';
import HeroPost from 'components/hero-post';

export default function Home({ articles }) {
  const heroPost = articles[0];
  const morePosts = articles.slice(1);

  return (
    <Layout>
      <Head>
        <title>UnCaught Blog</title>
      </Head>
      <Container>
        <section className="px-5 flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            UnCaught
          </h1>
          <div>TN's personal blog 👋</div>
        </section>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.image}
            date={heroPost.published_at}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.description}
          />
        )}
        {morePosts.length > 0 && <MoreStories articles={morePosts} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  return {
    props: { articles },
  };
}
