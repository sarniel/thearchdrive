import React from "react";
import NavigationMenu from "./navigation";
import { StaticImage } from "gatsby-plugin-image";

const HeaderComponent = ({ children }) => {
    return (
        <React.Fragment>
            <div className="mb-3 py-3 shadow">
                <div className="theme-container flex items-center">
                    <div className="ml-10 lg:ml-0">
                        <a href="/" alt="home">
                            <StaticImage
                                src="../../static/images/thearchdrive-logo.png"
                                alt="Logo"
                                width={161}
                                quality={100}
                            />
                        </a>
                    </div>
                    <div className="ml-auto">
                        <NavigationMenu />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeaderComponent;
