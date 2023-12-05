import React from "react";
import NavigationMenu from "./navigation";

const HeaderComponent = ({ children }) => {
    return (
        <React.Fragment>
            <div className="shadow">
                <div className="theme-container mb-5 flex items-center">
                    <div>[]</div>
                    <div className="ml-auto">
                        <NavigationMenu />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeaderComponent;
