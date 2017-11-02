module.exports = {
    siteMetadata: {
        title: `Gatsby Paradise`,
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
