// File: SwiperSlider.js
import React from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

SwiperCore.use([Autoplay, Navigation]); // Make sure to include both Autoplay and Navigation in SwiperCore.use

const SwiperSlider = (props) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {props.data.map((slide, index) => (
                <SwiperSlide key={index} className="bg-black">
                    <div className="relative">
                        <div>
                            {slide.featuredImage ? (
                                <GatsbyImage
                                    image={
                                        slide.featuredImage.node?.gatsbyImage
                                    }
                                    alt="Illustration"
                                    className="h-full w-full"
                                    height={300}
                                />
                            ) : null}
                        </div>

                        <div className="from-20% absolute top-0 left-0 flex h-full max-w-[50%] items-center bg-gradient-to-r from-black pl-20 text-white">
                            <div className="space-y-2">
                                <div className="text-sm opacity-50">
                                    {slide.date}
                                </div>
                                <h2 className="text-4xl font-semibold line-clamp-2">
                                    {slide.title}
                                </h2>
                                <div className="short-desc my-2 hidden text-sm sm:line-clamp-2">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: slide.excerpt,
                                        }}
                                    />
                                </div>
                                <div>
                                    <Link
                                        to={slide.uri}
                                        className="inline-block rounded-lg bg-white p-3 text-theme-secondary"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlider;
