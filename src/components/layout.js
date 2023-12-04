import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div>
                <div>{children}</div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
