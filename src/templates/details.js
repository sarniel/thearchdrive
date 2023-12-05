import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Post from "../components/post";
import { GatsbyImage } from "gatsby-plugin-image";
import Share from "../components/share";
import { LinkIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const DetailPage = ({ data }) => {
    const item = data.wpPost;
    const breadCrumbsArr = item.terms?.nodes.sort((a, b) => {
        return a.databaseId - b.databaseId;
    });
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
                    <div className="mb-14">
                        <ul className="flex overflow-hidden">
                            <li className="flex items-center">
                                <a href="/" className="p-2">
                                    Home
                                </a>
                            </li>
                            {breadCrumbsArr
                                ? breadCrumbsArr.map((terms, index) => (
                                      <li
                                          key={index}
                                          className="flex items-center last:opacity-50"
                                      >
                                          <ChevronRightIcon className="mx-2 w-5 flex-none" />
                                          <Link
                                              to={terms.uri}
                                              className="whitespace-pre"
                                          >
                                              {terms.name}
                                          </Link>
                                      </li>
                                  ))
                                : null}
                            <li className="flex items-center last:opacity-50">
                                <ChevronRightIcon className="mx-2 w-5 flex-none" />
                                <div className="line-clamp-1">{item.title}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10">
                        <h1 className="mb-2 text-4xl font-bold">
                            {item.title}
                        </h1>
                        <div className="mb-5 flex items-center">
                            <div className="opacity-70">
                                By Thearchdrive on {item.date}
                            </div>
                            <div className="ml-auto">
                                <Share title={item.title} postUrl={item.uri} />
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <GatsbyImage
                                image={item.featuredImage.node?.gatsbyImage}
                                alt="Featured Image"
                                className="h-full w-full"
                            />
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.acfSinglePost
                                    .featuredImageCourtesyName,
                            }}
                            className="mt-2 text-sm opacity-80"
                        />
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <div
                                className="layout"
                                dangerouslySetInnerHTML={{
                                    __html: item.content,
                                }}
                            />
                        </div>
                        <div className="w-[340px] flex-none">
                            {item.acfSinglePost.widgetRelatedPostLabel ? (
                                <div className="sidebar-featured-post">
                                    <h2 className="mb-5 text-3xl">
                                        {
                                            item.acfSinglePost
                                                .widgetRelatedPostLabel
                                        }
                                    </h2>
                                    <div className="grid grid-flow-row gap-5">
                                        {item.acfSinglePost.relatedPostWidget.map(
                                            (post, index) => (
                                                <Post
                                                    key={index}
                                                    title={post.title}
                                                    excerpt={post.excerpt}
                                                    date={post.date}
                                                    link={post.uri}
                                                    image={
                                                        post.featuredImage.node
                                                    }
                                                ></Post>
                                            )
                                        )}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {item.acfSinglePost.relatedPostLabel ? (
                        <div className="mt-10">
                            <h2 className="mb-5 text-3xl">
                                {item.acfSinglePost.relatedPostLabel}
                            </h2>
                            <div className="grid grid-cols-3 gap-5">
                                {item.acfSinglePost.releatedPost.map(
                                    (post, index) => (
                                        <Post
                                            key={index}
                                            title={post.title}
                                            excerpt={post.excerpt}
                                            date={post.date}
                                            link={post.uri}
                                            image={post.featuredImage.node}
                                        ></Post>
                                    )
                                )}
                            </div>
                        </div>
                    ) : null}
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
            date(formatString: "DD  MMMM, YYYY")
            terms {
                nodes {
                    name
                    databaseId
                    uri
                }
            }
            featuredImage {
                node {
                    gatsbyImage(width: 1600, height: 900, layout: CONSTRAINED)
                }
            }
            ...Seo
            acfSinglePost {
                featuredImageCourtesyName
                relatedPostLabel
                widgetRelatedPostLabel
                releatedPost {
                    ... on WpPost {
                        ...FeaturedPost
                    }
                }
                relatedPostWidget {
                    ... on WpPost {
                        ...FeaturedPost
                    }
                }
            }
        }
    }
`;
