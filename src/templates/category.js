import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "components/seo";
import Layout from "components/layout";

const CategoryPage = ({ data }) => {
    const item = data.wpCategory;

    return (
        <React.Fragment>
            <Layout>
                <Seo
                    title={item.seo.title}
                    description={
                        item.seo.metaDesc
                            ? item.seo.metaDesc
                            : item.seo.opengraphDescription
                    }
                    image={item.seo.opengraphImage?.sourceUrl}
                    url={item.seo.opengraphUrl}
                    publishedTime={item.seo.opengraphPublishedTime}
                    publisher={item.seo.opengraphPublisher}
                    modifiedTime={item.seo.opengraphModifiedTime}
                    type={item.seo.opengraphType}
                />
                <h1>{item.name}</h1>
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
            ...SeoCategory
        }
    }
`;
