
function stripUrl(url: string) {
  if (url.includes('//')) {
    const splitUrl = url.split('//');
    return splitUrl[1];
  }
  return url;
}

export const Config = {
  url: process.env.SITE_URL,
  stripped_url: process.env.SITE_URL ? stripUrl(process.env.SITE_URL) : '',
  site_name: 'IDR',
  title: 'Home',
  description: 'Akasha Labs │ Innovative Front-End Solutions to bring your project to life.',
  locale: 'en',
  author: 'Team',
  author_image: 'https://akashalabs.net/logos/team.png',
  blog_pagination_size: 3,
  post_fields: ['title', 'description', 'date', 'image', 'tags', 'slug'],
  metaImg: 'https://akashalabs.net/logos/thumb.png',
};

export const BlogArchiveConfig = {
  title: 'The Blog',
  description: "Don't just keep up —Lead the way with cutting-edge insights at your fingertips",
  blog_pagination_size: 6,
  featured_image: 'https://akashalabs.net/bg/waves-hpay.jpg',
};

export const SitemapConfig = {
  blog_pagination_size: 9999,
};
