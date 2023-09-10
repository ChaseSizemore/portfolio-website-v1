import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'dbd6de6f0e0246b3bc7d3adecd0213ae',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Chase Sizemore Portfolio',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Chase Sizemore',

  // open graph metadata (optional)
  description: 'Chase Sizemore Notion / Next.js Portfolio',

  // social usernames (optional)
  twitter: '',
  github: 'ChaseSizemore',
  linkedin: 'ChaseLSizemore',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'b62883615cf54bd6a5de2930560ffb0f'
    },
    {
      title: 'Contact',
      pageId: '08be544ffb3747c5a018421bcda57847'
    },
    {
      title: 'Projects',
      pageId: 'b04f552c2fd046e1b880b9ddeb847950'
    },
    {
      title: 'Articles',
      pageId: 'ed75dc61bfd640799c7567db68a3d69a'
    }
  ]
})
