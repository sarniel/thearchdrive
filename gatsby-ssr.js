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
        // Google Tag Manager (gtag.js)
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-V98T1X2VX0"
            key="gtag"
        />,
        <script
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V98T1X2VX0');
        `,
            }}
            key="gtag-config"
        />,
    ]);
};
