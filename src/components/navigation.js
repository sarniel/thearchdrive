import React, { useState } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/solid";

const NavigationMenu = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpMenuItem(
                filter: { parentId: { eq: null }, locations: { eq: PRIMARY } }
                sort: { order: ASC }
            ) {
                nodes {
                    label
                    uri
                    childItems {
                        nodes {
                            label
                            uri
                        }
                    }
                }
            }
        }
    `);
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavigationHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="lg:bg-white">
                {isOpen ? (
                    <div
                        className="fixed top-0 left-0 top-[65px] z-20 h-full w-full bg-black opacity-40 lg:hidden"
                        onClick={toggleNavigationHandler}
                        aria-hidden="true"
                    ></div>
                ) : null}

                <div>
                    <div
                        className={`fixed top-[65px] left-0 z-20 h-[calc(100vh-65px)] w-[70%] max-w-[300px] overflow-auto bg-[#f9f9f9] pb-5 shadow transition lg:relative lg:top-0 lg:flex lg:h-full lg:w-full lg:max-w-[100%] lg:translate-x-0 lg:items-center lg:overflow-visible lg:bg-transparent lg:pb-0 lg:shadow-none lg:transition-none ${
                            isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <ul className="border-b text-left lg:flex lg:border-0">
                            {data.allWpMenuItem.nodes.map((item, index) => (
                                <li
                                    key={index}
                                    className="group relative border-b border-theme-borderColor font-normal lg:border-none lg:py-3"
                                >
                                    <Link
                                        to={item.uri}
                                        activeClassName="bg-theme-secondary text-white active-menu"
                                        className="flex items-center space-x-2 py-3 px-5 lg:rounded-lg lg:py-2"
                                    >
                                        <div className="w-full font-semibold lg:w-auto lg:font-normal">
                                            {item.label}
                                        </div>
                                        {item.childItems.nodes.length ? (
                                            <ChevronDownIcon className="h-4 w-4 stroke-2 opacity-70" />
                                        ) : null}
                                    </Link>
                                    {item.childItems.nodes.length ? (
                                        <ul className="top-13 left-0 z-10 hidden w-full px-5 drop-shadow-sm group-hover:block lg:absolute lg:w-[200px] lg:w-auto lg:rounded-xl lg:bg-white lg:px-0 lg:py-3">
                                            {item.childItems.nodes.map(
                                                (subItem, index) =>
                                                    subItem.count !== null ? (
                                                        <li key={index}>
                                                            <Link
                                                                to={subItem.uri}
                                                                className="block w-full py-3 px-5"
                                                                activeClassName="bg-theme-secondary text-white"
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ) : null
                                            )}
                                        </ul>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button
                    className="absolute top-0 left-0 ml-auto flex h-[65px] items-center justify-center bg-theme-secondary px-2 lg:hidden"
                    onClick={toggleNavigationHandler}
                >
                    {isOpen ? (
                        <XMarkIcon className="stroke-3 h-8 w-8 text-white" />
                    ) : (
                        <Bars3Icon className="stroke-3 h-8 w-8 text-white" />
                    )}
                </button>
            </nav>
        </>
    );
};

export default NavigationMenu;
