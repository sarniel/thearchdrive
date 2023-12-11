const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    ////////////// Post Detail Page //////////////
    const postTemplate = path.resolve(`src/templates/details.js`);
    const resultPost = await graphql(`
        query {
            allWpPost {
                edges {
                    node {
                        slug
                        uri
                    }
                }
            }
        }
    `);
    resultPost.data.allWpPost.edges.forEach((edge) => {
        createPage({
            path: edge.node.uri,
            component: postTemplate,
            context: {
                uri: edge.node.uri,
            },
        });
    });

    ////////////// Category //////////////
    const categoryTemplate = path.resolve(`src/templates/category.js`);
    const resultCategory = await graphql(`
        query {
            allWpCategory {
                edges {
                    node {
                        link
                    }
                }
            }
        }
    `);
    resultCategory.data.allWpCategory.edges.forEach((edge) => {
        createPage({
            path: `${edge.node.link}`,
            component: categoryTemplate,
            context: {
                link: edge.node.link,
            },
        });
    });

    //////////////// Pages ////////////////
    const blogPostTemplate = path.resolve(`src/templates/page.js`);
    const result = await graphql(`
        query {
            allWpPage(filter: { slug: { ne: "contact-us" } }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    result.data.allWpPage.edges.forEach((edge) => {
        createPage({
            path: `${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.slug,
            },
        });
    });
};
