import React from "react";
import { graphql } from "gatsby";

const DetailPage = ({ data }) => {
    return (
        <React.Fragment>
            {data.wpPage.title}
            <div>
                <div
                    dangerouslySetInnerHTML={{ __html: data.wpPage.content }}
                />
            </div>
        </React.Fragment>
    );
};

export default DetailPage;

export const query = graphql`
    query ($slug: String!) {
        wpPage(slug: { eq: $slug }) {
            title
            slug
            content
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
