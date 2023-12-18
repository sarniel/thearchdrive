import React from "react";
import Post from "../components/post";
import { Link, graphql } from "gatsby";
import Layout from "components/layout";
import Seo from "components/seo";
import SwiperSlider from "components/slider";

const Homepage = ({ data }) => {
    const featuredPost = data.allWpPost.nodes;
    const category = data.allWpCategory.nodes;
    const page = data.wpPage.acfHomepage;
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
                <div className="theme-container grid grid-flow-row gap-14">
                    <div className="mt-5 lg:mt-10">
                        <h2 className="mb-3 text-2xl font-bold">
                            Featured Posts
                        </h2>
                        <div className="featured-layout grid gap-4 lg:grid-flow-col lg:grid-rows-3">
                            {featuredPost.map((post, index) => (
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
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
                        {category.map((cat, index) => (
                            <Link
                                to={cat.uri}
                                key={index}
                                className="w-full rounded-md py-4 px-5 shadow-lg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="27"
                                >
                                    <path
                                        d="M25.305 11.699a1.05 1.05 0 0 1 .352.732.99.99 0 0 1-.264.762 1.05 1.05 0 0 1-.732.352.99.99 0 0 1-.762-.264L13 2.793 2.102 13.281a.99.99 0 0 1-.762.264 1.05 1.05 0 0 1-.732-.352.99.99 0 0 1-.264-.762 1.05 1.05 0 0 1 .352-.732L11.594 1.211c.391-.352.859-.527 1.406-.527s1.016.176 1.406.527l10.898 10.488zm-2.9 3.896c.293 0 .542.103.747.308s.308.454.308.747v8.115c0 .586-.205 1.084-.615 1.494s-.908.615-1.494.615H4.65c-.586 0-1.084-.205-1.494-.615s-.615-.908-.615-1.494V16.65c0-.293.103-.542.308-.747s.454-.308.747-.308.542.103.747.308.308.454.308.747v8.115H8.84v-7.031c0-.586.205-1.084.615-1.494s.908-.615 1.494-.615h4.102c.586 0 1.084.205 1.494.615s.615.908.615 1.494v7.031h4.189V16.65c0-.293.103-.542.308-.747s.454-.308.747-.308zm-11.455 2.139v7.031h4.102v-7.031h-4.102z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <h2 className="text-md mt-3 md:text-lg">
                                    {cat.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <h2 className="mb-3 text-2xl font-bold">
                            {page.featuredHeadingTitle}
                        </h2>
                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                            {page.featuredPostItem.map((post, index) => (
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
                    <div className="relative overflow-hidden">
                        <SwiperSlider data={page.fullFeaturedPost} />
                    </div>
                    <div>
                        <h2 className="mb-3 text-2xl font-bold">
                            {page.featuredHeadingTitle}
                        </h2>
                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                            {page.featuredPostItem2.map((post, index) => (
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
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Homepage;

export const query = graphql`
    query {
        allWpPost(limit: 4) {
            nodes {
                ...FeaturedPost
            }
        }
        allWpCategory(filter: { count: { gt: 0 } }) {
            nodes {
                name
                uri
            }
        }
        wpPage(isFrontPage: { eq: true }) {
            id
            ...SeoPage
            acfHomepage {
                featuredHeadingTitle
                featuredHeadingTitle2
                featuredPostItem {
                    ... on WpPost {
                        ...FeaturedPost
                    }
                }
                featuredPostItem2 {
                    ... on WpPost {
                        ...FeaturedPost
                    }
                }
                fullFeaturedPost {
                    ... on WpPost {
                        ...SliderPost
                    }
                }
            }
        }
    }
`;
