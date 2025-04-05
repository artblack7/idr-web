import React from 'react';
import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Hero } from '../../components/blog/BlogPostHero';
import { Content } from '../../components/blog/Content';
import  RecentPosts from '../../components/blog/RecentPosts';
import { Meta } from '../../components/head/Meta';
import { BlogContainer } from '../../components/blog/BlogContainer';
import { Config } from '../../utils/Config';
import { getAllPosts, getPostBySlug, PostItems, getCategoryCollection,
} from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  metaTitle?: any;
  description: string;
  date: string;
  modified_date: string;
  pauthor?: any;
  author_image?: any;
  image: string;
  content: string;
  recentPosts?: PostItems[];
  categoryCollection: [string, PostItems[]][];
  posts?: any;
  initialPosts: PostItems[];
  allPosts: PostItems[];
};

const DisplayPost: React.FC<IPostProps> = (props) => {
  const { allPosts, initialPosts } = props;

return (
  <BlogContainer
    meta={(
      <Meta
        title={props.title}
        metaTitle={props.metaTitle}
        description={props.description}
        pauthor={props.pauthor}
        author_image={props.author_image}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
          pauthor: props.pauthor,
          author_image: props.author_image,
        }}
      />
    )}
    hero={(
      <Hero
        title={props.title}
        metaTitle={props.metaTitle}
        description={`${props.pauthor ? props.pauthor : Config.author} ~ ${format(new Date(props.date), 'LLLL d, yyyy')}`}
        image={props.image}
        pauthor={props.pauthor}
        author_image={props.author_image}
      />
    )}
    // recentPosts={props.recentPosts}
    categoryCollection={props.categoryCollection}
  >


      <Content>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Content>

      <section>
        <div className='GradStripe'></div>
      </section>
        <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent">
              <div className='NewsTitle'>
                <h2>Projectes Destacats</h2>
              </div>
              <RecentPosts allPosts={allPosts}/>
              </div>
          </div>
        </section>
  </BlogContainer>
);
}

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  const paths = posts.map((post) => {
    const slugArr = post.slug.split('-');
    slugArr.splice(0, 3);
    return {
      params: {
        slug: slugArr.join('-'),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {  const posts = getAllPosts(Config.post_fields);
  const gallery = posts.slice(0, Config.blog_pagination_size);
  const realPost = posts.find((post) => post.slug.includes(params!.slug));

  const post = getPostBySlug(realPost!.slug, [
    'title',
    'metaTitle',
    'description',
    'date',
    'modified_date',
    'pauthor',
    'author_image',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');
  console.log('Markdown HTML:', content);
  
  const recentPosts = getAllPosts(['slug', 'title', 'date']).slice(0, 5);

  return {
    props: {
      title: post.title,
      metaTitle: post.metaTitle,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      pauthor: post.pauthor,
      author_image: post.author_image,
      image: post.image,
      content,
      recentPosts,
      categoryCollection: getCategoryCollection(['slug', 'tags']),
      posts: gallery,
      allPosts: posts,
      initialPosts: gallery,
    },
  };
};

export default DisplayPost;
