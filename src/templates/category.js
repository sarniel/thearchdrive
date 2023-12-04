import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "components/seo";
import Layout from "components/layout";

const CategoryPage = ({ data }) => {
    const category = data.wpCategory;

    return (
        <React.Fragment>
            <Layout>
                <Seo
                    title={category.seo.title}
                    description={
                        category.seo.metaDesc
                            ? category.seo.metaDesc
                            : category.seo.opengraphDescription
                    }
                    image={category.seo.opengraphImage?.sourceUrl}
                    uri={category.seo.opengraphUrl}
                />
                <h1>{category.name}</h1>
            </Layout>
        </React.Fragment>
    );
};

export default CategoryPage;

export const query = graphql`
    query ($link: String!) {
        wpCategory(link: { eq: $link }) {
            name
            description
            link
            posts {
                nodes {
                    title
                }
            }
            seo {
                title
                metaDesc
                canonical
                opengraphDescription
                opengraphUrl
                opengraphImage {
                    sourceUrl
                }
            }
        }
    }
`;
