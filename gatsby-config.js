/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Michał Kotowski`,
        titleTemplate: `%s - Web developer based in Warsaw`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    '/*.js': ['cache-control: public, max-age=31536000, immutable'],
                    '/*.css': ['cache-control: public, max-age=31536000, immutable'],
                    '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
                },
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-react-helmet`
    ]
}