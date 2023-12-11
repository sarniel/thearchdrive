import { Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Post = (props) => {
    return (
        <React.Fragment>
            <div className="post-container overflow-hidden rounded-xl border border-theme-borderColor bg-white">
                <Link
                    to={props.link}
                    className="img-placeholder relative flex items-center items-center justify-center justify-center"
                >
                    {props.image ? (
                        <GatsbyImage
                            image={props.image?.gatsbyImage}
                            alt="Illustration"
                            className="h-full w-full"
                        />
                    ) : null}
                </Link>

                <div className="order-2 px-2 pt-2 pb-3 lg:px-4 lg:pb-4 lg:pt-3">
                    <Link to={props.link}>
                        <h3 className="text-sm font-semibold text-theme-secondary line-clamp-2 sm:text-lg md:!leading-[24px]">
                            {props.title}
                        </h3>
                    </Link>
                    <div className="short-desc my-2 hidden text-sm sm:line-clamp-2">
                        <div
                            dangerouslySetInnerHTML={{ __html: props.excerpt }}
                        />
                    </div>
                    <div className="text-sm opacity-50">{props.date}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Post;
