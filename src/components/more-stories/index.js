import PostPreview from 'components/post-preview';

export default function MoreStories({ articles }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {articles.map((article) => (
          <PostPreview
            key={article.slug}
            title={article.title}
            coverImage={article.image}
            date={article.published_at}
            author={article.author}
            slug={article.slug}
            excerpt={article.description}
          />
        ))}
      </div>
    </section>
  );
}
