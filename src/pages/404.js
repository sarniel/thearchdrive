import React from "react";
import Layout from "components/layout";

const NotFound = (props) => {
    return (
        <React.Fragment>
            <Layout>
                <div class="flex h-screen w-full flex-col items-center justify-center bg-white bg-cover bg-fixed bg-center bg-no-repeat">
                    <h1 class="text-7xl font-extrabold leading-none md:text-8xl">
                        Oops!
                    </h1>
                    <p class="text-medium mb-7 mt-6 px-4 text-center text-sm capitalize text-theme-secondary">
                        We can't seem to find the page you're looking for.
                    </p>
                    <a
                        class="mx-auto flex items-center rounded-[5px] bg-theme-secondary px-8 py-3 text-lg text-white transition duration-200 ease-linear"
                        href="/"
                    >
                        Back To Home
                    </a>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default NotFound;
