import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const DetailPage = ({ data }) => {
    const item = data.wpPost;
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
                {data.wpPost.title}
            </Layout>
        </React.Fragment>
    );
};

export default DetailPage;

export const query = graphql`
    query ($uri: String!) {
        wpPost(uri: { eq: $uri }) {
            title
            uri
            ...Seo
        }
    }
`;
