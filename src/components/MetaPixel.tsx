"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
     fbq?: (...args: unknown[]) => void;
    _fbPixelInitialized?: boolean;
  }
}

const META_PIXEL_ID = "828791089987995";

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // ⛔ STOP jika pixel sudah pernah init
    if (window._fbPixelInitialized) return;

    window._fbPixelInitialized = true;
    console.log("✅ Meta Pixel initialized (single instance)");
  }, []);

  return (
    <>
      <Script
        id="meta-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
