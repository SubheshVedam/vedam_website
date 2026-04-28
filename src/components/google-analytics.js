// src/components/google-analytics.js
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    const utmParams = {};
    UTM_KEYS.forEach(key => {
      const val = searchParams?.get(key);
      if (val) utmParams[key] = val;
    });

    if (Object.keys(utmParams).length > 0) {
      sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
    }

    const activeUtm = Object.keys(utmParams).length > 0
      ? utmParams
      : JSON.parse(sessionStorage.getItem('utm_params') || '{}');

    const search = searchParams?.toString();
    window.gtag('event', 'page_view', {
      page_path: pathname + (search ? `?${search}` : ''),
      ...activeUtm,
    });
  }, [pathname, searchParams]);

  return null; // scripts removed — @next/third-parties handles gtag loading
}