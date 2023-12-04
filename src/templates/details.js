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
                <div className="theme-container">
                    <div className="flex space-x-5">
                        <div>
                            <h1 className="text-4xl font-bold">{item.title}</h1>
                            <div
                                className="layout"
                                dangerouslySetInnerHTML={{
                                    __html: item.content,
                                }}
                            />
                        </div>
                        <div className="w-[340px] flex-none">[]</div>
                    </div>
                </div>
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
            content
            ...Seo
        }
    }
`;
