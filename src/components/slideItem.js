import { Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const SlideItem = (props) => {
    return (
        <React.Fragment>
            <div className="relative">
                <div>
                    {props.image ? (
                        <GatsbyImage
                            image={props.image?.gatsbyImage}
                            alt="Illustration"
                            className="h-full w-full"
                            height={300}
                        />
                    ) : null}
                </div>

                <div className="from-20% absolute top-0 left-0 flex h-full max-w-[50%] items-center bg-gradient-to-r from-black pl-20 text-white">
                    <div className="space-y-2">
                        <div className="text-sm opacity-50">{props.date}</div>
                        <h2 className="text-4xl font-semibold line-clamp-2">
                            {props.title}
                        </h2>
                        <div className="short-desc my-2 hidden text-sm sm:line-clamp-2">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: props.excerpt,
                                }}
                            />
                        </div>
                        <div>
                            <Link
                                to={props.link}
                                className="inline-block rounded-lg bg-white p-3 text-theme-secondary"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SlideItem;
