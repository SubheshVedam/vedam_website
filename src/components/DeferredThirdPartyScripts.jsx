"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const DeferredVercelAnalytics = dynamic(
  () => import("@vercel/analytics/next").then((mod) => mod.Analytics),
  { ssr: false }
);

const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"];

const scheduleDeferredTask = (task, delay) => {
  let timeoutId;
  let idleId;
  let cancelled = false;

  const runTask = () => {
    timeoutId = window.setTimeout(() => {
      if (cancelled) {
        return;
      }

      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(
          () => {
            if (!cancelled) {
              task();
            }
          },
          { timeout: 2000 }
        );
        return;
      }

      task();
    }, delay);
  };

  if (document.readyState === "complete") {
    runTask();
  } else {
    window.addEventListener("load", runTask, { once: true });
  }

  return () => {
    cancelled = true;

    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }

    if (idleId && typeof window.cancelIdleCallback === "function") {
      window.cancelIdleCallback(idleId);
    }

    window.removeEventListener("load", runTask);
  };
};

export default function DeferredThirdPartyScripts() {
  const [loadGoogleAnalytics, setLoadGoogleAnalytics] = useState(false);
  const [loadTagManager, setLoadTagManager] = useState(false);
  const [loadClarity, setLoadClarity] = useState(false);
  const [loadNoPaperForms, setLoadNoPaperForms] = useState(false);
  const [loadVercelAnalytics, setLoadVercelAnalytics] = useState(false);

  useEffect(() => {
    const isMobileViewport = window.matchMedia("(max-width: 899.95px)").matches;
    const connection = navigator.connection;
    const isConstrainedConnection =
      Boolean(connection?.saveData) ||
      /(?:^|slow-)?(?:2g|3g)$/.test(connection?.effectiveType ?? "");
    const isSlowContext = isMobileViewport || isConstrainedConnection;

    const enableEssentialTracking = () => {
      setLoadGoogleAnalytics(true);
      setLoadTagManager(true);
      setLoadNoPaperForms(true);
      setLoadVercelAnalytics(true);
    };

    const handleFirstInteraction = () => {
      enableEssentialTracking();
      removeInteractionListeners();
    };

    const removeInteractionListeners = () => {
      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, handleFirstInteraction);
      });
    };

    INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, handleFirstInteraction, { passive: true });
    });

    const essentialCleanup = scheduleDeferredTask(
      enableEssentialTracking,
      isSlowContext ? 4500 : 1800
    );
    const clarityCleanup = scheduleDeferredTask(
      () => setLoadClarity(true),
      isSlowContext ? 12000 : 5000
    );

    return () => {
      removeInteractionListeners();
      essentialCleanup();
      clarityCleanup();
    };
  }, []);

  return (
    <>
      {loadTagManager && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K7ZDF4K4');
            `,
          }}
        />
      )}

      {loadClarity && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r428jp90kq");
            `,
          }}
        />
      )}

      {loadNoPaperForms && (
        <Script
          id="nopaperforms-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var npf_d='https://apply.vedam.org';
              var npf_c='6380';
              var npf_m='1';
              var s=document.createElement("script");
              s.type="text/javascript";
              s.async=true;
              s.src="https://track.nopaperforms.com/js/track.js";
              document.body.appendChild(s);
            `,
          }}
        />
      )}

      {loadVercelAnalytics && <DeferredVercelAnalytics />}
      {loadGoogleAnalytics && process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </>
  );
}
