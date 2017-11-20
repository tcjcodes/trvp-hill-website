module.exports = {
    pathPrefix: '/',
    siteMetadata: {
        spacedTitle: 'T R V P H I L L',
        title: `TRVPHILL`,
        description: 'Official website of TRVPHILL music',
        keywords: 'tacoma, olympia, washington, seattle, capitol hill, rap, trap, hip hop, music, pacific northwest, PNW'
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
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-netlify`, // make sure to put last in the array
    ],
}
