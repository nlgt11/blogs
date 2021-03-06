import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import { getStrapiMedia } from 'lib/media';

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={getStrapiMedia(src)}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
