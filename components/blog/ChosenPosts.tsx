import React, { useState, useEffect } from 'react';
import { PostItems, getAllPosts } from '../../utils/Content';
import { BlogCard } from './BlogCard';
import { slugCompute } from '../../utils/SlugCompute';

type ChosenPostsProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  tagFilter?: string | null;
};

const ChosenPosts: React.FC<ChosenPostsProps> = ({ initialPosts, allPosts, tagFilter }) => {
  const POSTS_PER_PAGE = 3;

  const [filteredPosts, setFilteredPosts] = useState<PostItems[]>([]);
  const [currentPosts, setCurrentPosts] = useState<PostItems[]>([]);
  const [offset, setOffset] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    if (tagFilter) {
      const tagFilteredPosts = allPosts.filter(post => post.tags.includes(tagFilter));
      setFilteredPosts(tagFilteredPosts);
      setCurrentPosts(tagFilteredPosts.slice(0, POSTS_PER_PAGE));
      setOffset(POSTS_PER_PAGE);
    } else {
      setFilteredPosts(allPosts);
      setCurrentPosts(allPosts.slice(0, POSTS_PER_PAGE));
      setOffset(POSTS_PER_PAGE);
    }
  }, [tagFilter]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
    setCurrentPosts(filteredPosts.slice(0, offset + POSTS_PER_PAGE));
  };

  return (
    <>
      <div className="BlogCardGroup">
        {currentPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            image={post.image}
            slug={slugCompute(post.slug)}
            tags={post.tags}
            showDescription={true}
          />
        ))}
      </div>
      {/* {offset < filteredPosts.length && ( */}
        <div className="LoadMore">
          <button onClick={handleLoadMore}>
            Load More Posts
          </button>
        </div>
      {/* )} */}
    </>
  );
};

export default ChosenPosts;
