import React, { useState } from 'react';
import MainHeader from "../../components/navigation/Header";
import {Footer} from '../../components/navigation/Footer';
import {BlogSubscribe} from '../../components/blog/BlogSubscribe';
import {BlogHero} from '../../components/blog/BlogHero';
import AnimationTrigger from '../../components/AnimationTrigger';
import { GetStaticProps } from 'next';
import BlogArchive from '../../components/blog/BlogArchive';
import { BlogArchiveConfig, Config } from '../../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../../utils/Content';
import { Meta } from '../../components/head/Meta';
import { useTranslations } from 'next-intl';

type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  categoryCollection: [string, PostItems[]][];
  posts?: any;
  messages: any;
};

export default function Blog(props: IIndexProps) {
  const { initialPosts, allPosts, categoryCollection } = props;
  const t = useTranslations('blog');

  const [activeSection, setActiveSection] = useState<string>('all');

  const filteredPosts = {
    all: allPosts,
    general: allPosts.filter((post) => post.tags.includes('General')),
    product: allPosts.filter((post) => post.tags.includes('Product')),
    company: allPosts.filter((post) => post.tags.includes('Company'))
  };
  
  return (
    <main className="BlogPage">
      <AnimationTrigger />
      <div>
        <MainHeader useWhite={false} 
          meta={<Meta 
            title={t('meta.title')} 
            metaTitle={t('meta.metaTitle')} 
            metaImg="https://idr.cat/thumb/thumb.png" 
            description={t('meta.description')} />} 
            />
      </div>

      {/* <BlogHero posts={initialPosts}/> */}
      <div className="HeroSectionWrap Dark" id="projects-hero">
        <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
            <div className='HeroTitle'>
              {/* <h6>PROJECTES</h6> */}
              {/* <h2>Depuració innovadora per un futur sostenible</h2> */}
              <h2>{t('hero.title')}</h2>
            </div>
          </div>
        </div>

      </div>

      <section className="SectionWrap" id='posts-section'>
          <div className="BaseSection">
            <div className="PostContent">
              <div className="Categories">
                <button 
                  className={activeSection==='all' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('all')}>{t('categories.all')}</button>
                <button 
                  className={activeSection==='general' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('general')}>{t('categories.general')}</button>
                <button 
                  className={activeSection==='product' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('product')}>{t('categories.product')}</button>
                <button 
                  className={activeSection==='company' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('company')}>{t('categories.company')}</button>
              </div>
              <div className={activeSection==='all' ? 'activeTab' : 'hiddenTab'}>
                <BlogArchive initialPosts={initialPosts} allPosts={filteredPosts.all}/>
              </div>
            </div>
        </div>
      </section>

      {/* <BlogSubscribe /> */}

      <Footer />

    </main>
  );
}

export const getStaticProps: GetStaticProps<IIndexProps> = async ({ locale }) => {
  const posts = getAllPosts(Config.post_fields, locale || 'ca');

  return {
    props: {
      allPosts: posts,
      initialPosts: posts.slice(0, BlogArchiveConfig.blog_pagination_size),
      categoryCollection: getCategoryCollection(['slug', 'tags'], locale || 'ca'),
      messages: (await import(`../../messages/${locale || 'ca'}.json`)).default,
    },
  };
};
