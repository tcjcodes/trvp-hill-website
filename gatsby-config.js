module.exports = {
    pathPrefix: '/',
    siteMetadata: {
        spacedTitle: 'T R V P H I L L',
        title: `TRVPxHILL`,
        description: 'Official website of Trap Hill music',
        keywords: 'tacoma, olympia, washington, seattle, capitol hill, trvphill, rap, trap, hip hop, music, pacific northwest, PNW'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: "UA-115002255-1",
                // Include GTM in development.
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,
            },
        },
        'gatsby-plugin-glamor',
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-netlify`, // make sure to put last in the array
    ],
}
