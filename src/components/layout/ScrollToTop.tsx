import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures every newly opened route/page starts at the top of the viewport.
 * If an anchor hash is provided (e.g. #section), it scrolls smoothly to that element.
 * Otherwise, it instantly resets the window and document scroll position to top (0, 0).
 * Does NOT re-scroll when the user is simply scrolling within the same page.
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If navigating with an in-page anchor hash, scroll to that element
    if (hash) {
      const targetId = hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Disable browser's automatic popstate scroll restoration so new pages start reliably at the top
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Instantly scroll window to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Ensure root documentElement and body are also reset
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname, search, hash]);

  return null;
}
