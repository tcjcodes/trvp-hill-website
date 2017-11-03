module.exports = {
    pathPrefix: '/trvp-hill-website',
    siteMetadata: {
        title: `TRVPHILL`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
      'gatsby-plugin-glamor',
    ],
}
