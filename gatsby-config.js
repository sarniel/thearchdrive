// support for .env, .env.development, and .env.production
require("dotenv").config();
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
    //configuration object
    trailingSlash: `always`,
    siteMetadata: {
        title: process.env.COMPANY_NAME,
        description: process.env.COMPANY_DESCRIPTION,
        author: process.env.AUTHOR,
        siteUrl: process.env.WEBSITE,
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        `gatsby-transformer-json`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-scroll-reveal`,
        `gatsby-plugin-netlify`,
        {
            resolve: "gatsby-plugin-sass",
            options: {
                postCssPlugins: [
                    require("postcss-preset-env")({
                        stage: 0,
                    }),
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    require(`cssnano`),
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "templates",
                path: `${__dirname}/src/templates`,
            },
        },

        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: process.env.COMPANY_NAME,
                short_name: process.env.AUTHOR,
                start_url: "/",
                // These can be imported once ESM support lands
                background_color: "#242424",
                theme_color: "#242424",
                icon: "static/images/icon.png",
                legacy: false,
                display: "standalone",
            },
        },
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                src: path.join(__dirname, "src"),
                components: path.join(__dirname, "src/components"),
                styles: path.join(__dirname, "src/styles"),
                pages: path.join(__dirname, "src/pages"),
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: process.env.WPGRAPHQL_URL,
                // type: {
                //   MediaItem: {
                //     localFile: {
                //       requestConcurrency: 50,
                //     },
                //   },
                // },
                exclude: {
                    taxonomies: {
                        post_tag: true,
                    },
                },
                schema: {
                    // requestConcurrency: 1,
                    // perPage: 30, // currently set to 100
                    // requestConcurrency: 3, // currently set to 15
                    // previewRequestConcurrency: 1, // currently set to 5
                    timeout: 500000,
                },
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://thearchdrive.com/",
                sitemap: "https://thearchdrive.com/sitemap-0.xml",
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Open Sans`,
                        file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap`,
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "G-3FY28WF20M",
                includeInDevelopment: false,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-238146197-1",
                head: true,
                anonymize: true,
                respectDNT: true,
                pageTransitionDelay: 0,
            },
        },
        {
            resolve: `gatsby-plugin-google-adsense`,
            options: {
                publisherId: `ca-pub-2452081808089907`,
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
                {
                    allSitePage(
                        filter: {path: {regex: "/^/(?!homepage|404|dev-404-page|404.html)/"}}
                    ) {
                        nodes {
                            path
                        }
                    }
                    allWpContentNode {
                        nodes {
                        ... on WpPost {
                                uri
                                modifiedGmt(formatString: "YYYY-MM-DD HH:mm Z")
                            }
                        }
                    }
                }
                `,
                output: "/",
                resolveSiteUrl: ({ site }) => {
                    // Determine the site URL dynamically based on the environment
                    if (process.env.NODE_ENV === "production") {
                        return "https://thearchdrive.com"; // Production URL
                    } else {
                        return "http://localhost:8000"; // Development URL
                    }
                },
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    allWpContentNode: { nodes: allWpNodes },
                }) => {
                    const wpNodeMap = allWpNodes.reduce((acc, node) => {
                        const { uri } = node;
                        acc[uri] = node;

                        return acc;
                    }, {});

                    return allPages.map((page) => {
                        return { ...page, ...wpNodeMap[page.path] };
                    });
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    };
                },
            },
        },
    ],
};
