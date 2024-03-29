import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
} from "react-share";

const Share = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `);
    const siteUrl = data.site.siteMetadata.siteUrl;
    return (
        <React.Fragment>
            <div className="flex items-center space-x-3">
                <div className="font-semiBold opacity-70">
                    Share this post on
                </div>
                <div className="flex items-center space-x-2">
                    <FacebookShareButton url={siteUrl + props.postUrl}>
                        <svg width="23" height="23" fill="none">
                            <g clipPath="url(#a)">
                                <path
                                    d="M23 11.5C23 5.149 17.851 0 11.5 0S0 5.149 0 11.5c0 5.74 4.205 10.498 9.703 11.36v-8.036h-2.92V11.5h2.92V8.966c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.428 0-1.874.886-1.874 1.797V11.5h3.19l-.51 3.324h-2.68v8.036C18.795 21.998 23 17.24 23 11.5z"
                                    fill="var(--secondary-color)"
                                />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h23v23H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </FacebookShareButton>
                    <TwitterShareButton url={siteUrl + props.postUrl}>
                        <svg width="23" height="23" fill="none">
                            <g clipPath="url(#a)" fill="var(--secondary-color)">
                                <path d="M14.7 14.727c.724.962 1.449 1.93 2.23 2.962H15.2c-.166 0-.208-.16-.285-.265-2.774-3.7-5.54-7.401-8.308-11.102-.146-.203-.3-.398-.502-.67h1.638c.21 0 .258.175.349.293 2.21 2.927 4.405 5.855 6.607 8.782z" />
                                <path d="M11.5 0C5.15 0 0 5.15 0 11.5S5.15 23 11.5 23 23 17.85 23 11.5 17.85 0 11.5 0zm7.29 18.811c-1.345 0-2.697 0-4.042.007-.216 0-.335-.084-.453-.244-1.213-1.659-2.44-3.31-3.645-4.976-.189-.258-.28-.237-.474-.021-1.394 1.512-2.802 3.01-4.196 4.523-.21.23-.418.356-.739.32-.286-.027-.571-.006-.857-.006-.042-.167.104-.223.181-.3 1.687-1.784 3.367-3.575 5.067-5.353.188-.195.181-.306.028-.522-1.756-2.37-3.506-4.754-5.255-7.13-.077-.105-.188-.195-.21-.384h1.081c.92 0 1.847.007 2.767-.007.25-.006.404.084.55.28 1.123 1.49 2.259 2.975 3.395 4.467.293.383.293.383.62.049a863.45 863.45 0 0 0 4.28-4.447c.23-.244.46-.383.801-.349.265.028.537.007.823.007-.05.182-.168.258-.258.356a1219.115 1219.115 0 0 1-5.04 5.43c-.195.208-.195.327-.02.55 1.86 2.425 3.707 4.85 5.554 7.283.098.126.196.258.286.377-.07.139-.167.09-.244.09z" />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h23v23H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </TwitterShareButton>
                    <EmailShareButton
                        url={siteUrl + props.postUrl}
                        subject={props.title}
                    >
                        <svg
                            width="23"
                            height="23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#a)">
                                <path
                                    d="M0 11.496C0 5.153 5.127 0 11.444 0 17.849 0 23 5.105 23 11.464 23 17.839 17.849 23 11.492 23 5.143 22.992 0 17.847 0 11.496zm16.828-3.409c.032-1.077-.273-1.318-1.037-1.117-.249.064-.49.137-.723.233-2.748 1.15-5.505 2.3-8.253 3.457-.7.297-1.399.603-2.082.932-.16.08-.361.314-.353.467.008.144.225.337.402.418.337.16.715.225 1.06.37 1.262.538 2.339.297 3.432-.523 1.286-.973 2.684-1.817 4.042-2.701.105-.072.281-.032.426-.048-.048.128-.064.281-.153.37a95.545 95.545 0 0 1-1.575 1.551c-.659.635-1.334 1.246-1.969 1.89-.417.417-.37.739.089 1.109.072.056.152.112.225.168 1.077.732 2.146 1.463 3.222 2.187 1.126.764 1.736.498 1.977-.836.241-1.326.483-2.661.7-3.995.209-1.4.401-2.814.57-3.932z"
                                    fill="var(--secondary-color)"
                                />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h23v23H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </EmailShareButton>
                    <LinkedinShareButton url={siteUrl + props.postUrl}>
                        <svg width="23" height="23" fill="none">
                            <g clipPath="url(#a)">
                                <path
                                    d="M11.5 0C5.15 0 0 5.15 0 11.5S5.15 23 11.5 23 23 17.85 23 11.5 17.85 0 11.5 0zM7.987 17.794c0 .118-.028.153-.146.153-.864-.007-1.729-.007-2.593 0-.132 0-.16-.042-.153-.16.007-1.499 0-2.99 0-4.489 0-1.498 0-3.004-.007-4.502 0-.14.035-.168.167-.168.857.007 1.722.007 2.579 0 .111 0 .153.014.153.147v9.019zM6.531 7.36a1.664 1.664 0 0 1-1.666-1.68 1.67 1.67 0 0 1 1.687-1.665c.926 0 1.68.76 1.672 1.68A1.68 1.68 0 0 1 6.531 7.36zm12.14 10.587c-.857-.007-1.707-.007-2.564 0-.132 0-.181-.028-.181-.174.007-1.603 0-3.206 0-4.81 0-.397-.042-.794-.181-1.17-.175-.467-.502-.746-.99-.823a2.027 2.027 0 0 0-1.039.09c-.515.196-.773.6-.906 1.11-.09.354-.118.724-.118 1.086v4.517c0 .132-.028.167-.168.167-.857-.007-1.721-.007-2.578 0-.112 0-.147-.02-.147-.14.007-3.01 0-6.028 0-9.04 0-.104.021-.138.133-.138.836.006 1.68.006 2.516 0 .104 0 .125.027.125.125-.007.328 0 .648 0 .976 0 .049-.014.104.028.174.188-.328.404-.592.683-.815.676-.544 1.457-.74 2.314-.697.509.027 1.01.104 1.478.313.78.349 1.226.976 1.463 1.77.23.76.272 1.54.272 2.321 0 1.66 0 3.318.007 4.977.014.153-.02.181-.146.181z"
                                    fill="var(--secondary-color)"
                                />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h23v23H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </LinkedinShareButton>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Share;
