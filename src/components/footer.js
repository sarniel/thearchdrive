import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, Link, graphql } from "gatsby";

const FooterComponent = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpMenuItem(
                filter: { parentId: { eq: null }, locations: { eq: FOOTER } }
            ) {
                nodes {
                    label
                    uri
                }
            }
        }
    `);

    return (
        <React.Fragment>
            <div className="mt-10 bg-theme-secondary">
                <div className="theme-container grid grid-cols-3 py-10">
                    <div className="space-y-10">
                        <div>
                            <StaticImage
                                src="../../static/images/thearchdrive-footer-logo.png"
                                alt="Logo"
                                width={161}
                                quality={100}
                            />
                        </div>
                        <div className="text-sm text-white">
                            The <strong>Architects Drive</strong> is a weblog of
                            various architectural and interior design concepts,
                            bringing new ideas and inspirations for designers
                            and professionals.
                        </div>
                    </div>
                </div>
                <div className="theme-container text-xs text-white">
                    <div className="grid grid-cols-2 border-t border-theme-borderColor/20 py-5">
                        <div className="flex items-center space-x-10 opacity-50">
                            <div>The Architects Drive, Copyright 2023.</div>
                            <ul className="flex items-center space-x-3">
                                {data.allWpMenuItem.nodes.map((menu, index) => (
                                    <li key={index}>
                                        <Link to={menu.uri}>{menu.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="ml-auto flex space-x-3">
                            <a
                                href="https://www.facebook.com/thearchdrive"
                                rel="nofollow"
                                target="_blank"
                            >
                                <svg width="23" height="23" fill="none">
                                    <g clipPath="url(#a)">
                                        <path
                                            d="M23 11.5C23 5.149 17.851 0 11.5 0S0 5.149 0 11.5c0 5.74 4.205 10.498 9.703 11.36v-8.036h-2.92V11.5h2.92V8.966c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.428 0-1.874.886-1.874 1.797V11.5h3.19l-.51 3.324h-2.68v8.036C18.795 21.998 23 17.24 23 11.5z"
                                            fill="#fff"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="a">
                                            <path
                                                fill="#fff"
                                                d="M0 0h23v23H0z"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/thearchdrive"
                                rel="nofollow"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    dataName="Layer 1"
                                    viewBox="0 0 128 128"
                                    id="instagram"
                                    fill="#fff"
                                    width="23"
                                    height="23"
                                >
                                    <path d="M84 36H44a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V44a8 8 0 0 0-8-8ZM64 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm18-29a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"></path>
                                    <circle cx="64" cy="64" r="8"></circle>
                                    <path d="M64 0a64 64 0 1 0 64 64A64 64 0 0 0 64 0Zm36 84a16 16 0 0 1-16 16H44a16 16 0 0 1-16-16V44a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FooterComponent;
