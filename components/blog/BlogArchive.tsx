import React, { useState, useEffect } from 'react';
import { PostItems, getAllPosts } from '../../utils/Content';
import { BlogCard } from './BlogCard';
import { slugCompute } from '../../utils/SlugCompute';

type BlogArchiveProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  tagFilter?: string | null;
};

const BlogArchive: React.FC<BlogArchiveProps> = ({ initialPosts, allPosts, tagFilter }) => {
  const POSTS_PER_PAGE = 6;

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
      {offset < filteredPosts.length && (
        <div className="LoadMore">
          <button onClick={handleLoadMore}>
            Load More Posts
          </button>
        </div>
      )}
    </>
  );
};

export default BlogArchive;



// -------- PAGINATION BLOGARCHIVE --------------


// import React from 'react';
// import { PostItems } from '../../utils/Content';
// import { slugCompute } from '../../utils/SlugCompute';
// import { BlogCard } from './BlogCard';
// import { Pagination, IPaginationProps } from './Pagination';

// export type IBlogGalleryProps = {
//   posts: PostItems[];
//   pagination?: IPaginationProps;
// };

// const BlogArchive = (props: IBlogGalleryProps) => (
//   <>
//     <div className="BlogCardGroup">
//       {props.posts.map((elt, index) => (
//         <BlogCard
//           key={elt.slug}
//           title={elt.title}
//           description={elt.description}
//           date={elt.date}
//           image={elt.image}
//           slug={slugCompute(elt.slug)}
//           tags={elt.tags}
//           index={index}
//         />
//       ))}
//     </div>

//     {props.pagination && (
//       <Pagination previous={props.pagination.previous} next={props.pagination.next} />
//     )}
//   </>
// );