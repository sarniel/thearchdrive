import React from "react";
import { graphql } from "gatsby";

const DetailPage = ({ data }) => {
    return <React.Fragment>{data.wpPost.title}</React.Fragment>;
};

export default DetailPage;

export const query = graphql`
    query ($uri: String!) {
        wpPost(uri: { eq: $uri }) {
            title
            uri
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
