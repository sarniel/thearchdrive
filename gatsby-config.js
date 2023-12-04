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
    ],
};
