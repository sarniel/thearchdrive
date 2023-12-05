import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";

const DetailPage = ({ data }) => {
    const item = data.wpPage;
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
                <div className="theme-container flex items-center space-x-20 py-10">
                    {item.featuredImage ? (
                        <div className="flex-none">
                            <GatsbyImage
                                image={item.featuredImage.node?.gatsbyImage}
                                alt="Shay Michaela Tan"
                            />
                        </div>
                    ) : null}
                    <div>
                        <h1 className="mb-3 text-3xl font-semibold">
                            {item.title}
                        </h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.wpPage.content,
                            }}
                            className="layout"
                        />
                    </div>
                </div>
            </Layout>
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
            featuredImage {
                node {
                    gatsbyImage(width: 370, height: 451)
                }
            }
            ...SeoPage
        }
    }
`;
