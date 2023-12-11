import React from "react";
import { graphql } from "gatsby";
import Seo from "components/seo";
import Iframe from "react-iframe";
import Layout from "components/layout";

export default function ContactUs({ data }) {
    const item = data.wpPage;
    return (
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

            <div className="theme-container relative mt-10">
                <h1 className="mb-3 text-3xl font-bold">Contact Form</h1>
                <div className="mb-5">
                    Fill all your details, we will get in touch with you within
                    24hrs!
                </div>
                <Iframe
                    src="https://admin.thearchdrive.com/contact-us/"
                    width="100%"
                    height="800"
                    title="contact form"
                />
            </div>
        </Layout>
    );
}

export const query = graphql`
    {
        wpPage(slug: { eq: "contact-us" }) {
            uri
            ...SeoPage
        }
    }
`;
