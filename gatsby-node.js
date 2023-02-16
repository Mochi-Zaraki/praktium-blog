const path = require("path")

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const template = path.resolve("src/templates/BlogPostTemplate.js")

    return graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                html
                id
                frontmatter {
                    path
                    title
                    date
                }
            }
        }
        }
    }
    `).then((res) => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            console.log(node.frontmatter.path)
            createPage({
                path: node.frontmatter.path,
                component: template,
                context: {
                    name: node.frontmatter.path
                }
            })
        });
        
    })
}