import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/HeeboLight.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="HeeboLight"
        />,
        <link
            rel="preload"
            href="/fonts/HeeboMedium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="HeeboMedium"
        />,
        <link
            rel="preload"
            href="/fonts/HeeboRegular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="HeeboRegular"
        />,
        // Google AdSense Auto Ads Script
        <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            crossOrigin="anonymous"
            key="adsense"
        />,
        <script
            dangerouslySetInnerHTML={{
                __html: `(adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-2452081808089907",
          enable_page_level_ads: true
        });`,
            }}
            key="adsense-config"
        />,
    ]);
};
