import React, { useState } from 'react';
import { PostItems, getAllPosts } from '../../utils/Content';
import { BlogCard } from './BlogCard';
import { slugCompute } from '../../utils/SlugCompute';

const Flickity = require('react-flickity-component');
const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,
  autoPlay: 4000
};

type RecentPostsProps = {
  allPosts: PostItems[];
};

const RecentPosts: React.FC<RecentPostsProps> = ({ allPosts }) => {

  const POSTS_PER_PAGE = 10;

  const [currentPosts] = useState<PostItems[]>(allPosts.slice(0, POSTS_PER_PAGE));

  return (
    <>
       <div>
            <Flickity
            className={'news-carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
            >  
              {currentPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  image={post.image}
                  slug={slugCompute(post.slug)}
                  tags={post.tags}
                  showDescription={false}
                />
              ))}
      </Flickity>
      </div>
    </>
  );
};

export default RecentPosts;