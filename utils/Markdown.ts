
// @mapbox/rehype-prism does not have typescript definition
// @ts-ignore

import rehypePrism from '@mapbox/rehype-prism';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify'; // Explicitly import for clarity
import gfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrism)
    .use(rehypeStringify, { allowDangerousHtml: true }) // Ensure fragment output
    .process(markdown);

  let htmlContent = result.toString();
  
  // Strip any unwanted <html>, <body>, or DOCTYPE tags if they appear
  htmlContent = htmlContent
    .replace(/<!DOCTYPE[^>]*>/gi, '') // Remove DOCTYPE
    .replace(/<html[^>]*>/gi, '')     // Remove <html>
    .replace(/<\/html>/gi, '')        // Remove </html>
    .replace(/<body[^>]*>/gi, '')     // Remove <body>
    .replace(/<\/body>/gi, '')        // Remove </body>
    .replace(/@@baseUrl@@/g, process.env.baseUrl || '');

  return htmlContent;
}

// import rehypePrism from '@mapbox/rehype-prism';
// import rehypeRaw from 'rehype-raw';
// import html from 'rehype-stringify';
// import gfm from 'remark-gfm';
// import remarkParse from 'remark-parse';
// import remarkRehype from 'remark-rehype';
// import { unified } from 'unified';

// export async function markdownToHtml(markdown: string) {
//   const result = await unified()
//     .use(remarkParse)
//     .use(gfm)
//     .use(remarkRehype, { allowDangerousHtml: true })
//     .use(rehypeRaw)
//     .use(rehypePrism)
//     .use(html)
//     .process(markdown);
//   return result.toString().replace(/@@baseUrl@@/g, process.env.baseUrl || '');
// }

