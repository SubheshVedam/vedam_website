'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) setVisible(true);
    }, []);

    function accept() {
        localStorage.setItem('cookie_consent', 'granted');
        window.gtag?.('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            functionality_storage: 'granted',
            personalization_storage: 'granted',
        });
        setVisible(false);
    }

    function decline() {
        localStorage.setItem('cookie_consent', 'denied');
        // tracking stays denied — no gtag update needed
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
            background: '#1a1a1a', color: '#fff', padding: '16px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '16px', flexWrap: 'wrap'
        }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
                We use cookies for analytics and advertising. See our{' '}
                <a href="/privacy-policy" style={{ color: '#60a5fa' }}>Privacy Policy</a>.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={decline} style={{
                    padding: '8px 16px', background: 'transparent',
                    border: '1px solid #555', color: '#fff', borderRadius: '4px', cursor: 'pointer'
                }}>
                    Decline
                </button>
                <button onClick={accept} style={{
                    padding: '8px 16px', background: '#2563eb',
                    border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer'
                }}>
                    Accept
                </button>
            </div>
        </div>
    );
}