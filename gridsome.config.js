module.exports = {
  siteName: 'SaTro Media Consulting',
  siteUrl: 'https://satromedia.de',
  icon: './src/favicon.svg',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
  plugins: [
    'gridsome-plugin-robots-txt',
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, 
        config: {
          '/influencer-management': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/content-production': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/digital-concepts': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/webdesign': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/online-marketing': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/datenschutz': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/impressum': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ]
}
