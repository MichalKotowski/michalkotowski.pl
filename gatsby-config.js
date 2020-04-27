/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Michał Kotowski`,
        description: `Web developer based in Warsaw`,
        author: `Michał Kotowski`
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Michał Kotowski`,
                short_name: `MichalKotowski`,
                start_url: `/`,
                background_color: `#0c0d0d`,
                theme_color: `#f2f3f2`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-161203999-1",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass-resources`,
            options: {
                resources: ['./src/styles/base/resources.scss']
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layout/Layout.js`),
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        },
    ]
}