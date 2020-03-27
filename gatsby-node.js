const path = require(`path`)
const _ = require(`lodash`)
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

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve('src/templates/single.js')
    const tagTemplate = path.resolve('src/templates/tags.js')

    const result = await graphql(`
        {
            postsRemark: allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 2000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
            tagsGroup: allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running graphQL query.`)
        return
    }

    const posts = result.data.postsRemark.edges

    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
            },
        })
    })

    const tags = result.data.tagsGroup.group

    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue,
            },
        })
    })
}