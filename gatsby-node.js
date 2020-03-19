const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        let slug;
        if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
            const kebabCase = string => string.replace(/\s+/g, '-').toLowerCase();
            slug = `/${kebabCase(node.frontmatter.title)}/`
        } else {
            slug = createFilePath({ node, getNode, basePath: `posts` })
        }
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/single.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}