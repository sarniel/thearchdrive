import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "components/seo";
import Layout from "components/layout";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Post from "../components/post";

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
                <div className="theme-container">
                    <div className="mb-5 lg:mb-14">
                        <ul className="flex overflow-hidden">
                            <li className="flex items-center">
                                <a href="/" className="p-2">
                                    Home
                                </a>
                            </li>
                            <li className="flex items-center last:opacity-50">
                                <ChevronRightIcon className="mx-2 w-5 flex-none" />
                                <div className="line-clamp-1">{item.name}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10">
                        <h1 className="mb-2 text-3xl font-bold lg:text-4xl">
                            {item.name}
                        </h1>
                        <div>{item.description}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                        {item.posts.nodes.map((post, index) => (
                            <Post
                                key={index}
                                title={post.title}
                                excerpt={post.excerpt}
                                date={post.date}
                                link={post.uri}
                                image={post.featuredImage.node}
                            ></Post>
                        ))}
                    </div>
                </div>
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
                    ...FeaturedPost
                }
            }
            ...SeoCategory
        }
    }
`;
