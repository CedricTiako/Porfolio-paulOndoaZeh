import { useEffect } from 'react';

// Types pour Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    // Ne charger les analytics qu'en production et si un ID est fourni
    if (process.env.NODE_ENV !== 'production' || !trackingId) {
      return;
    }

    // Charger Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialiser gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      page_title: 'Portfolio Paul Ondoa Zeh',
      page_location: window.location.href,
    });

    // Nettoyer au démontage
    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  // Fonctions utilitaires pour le tracking
  useEffect(() => {
    // Tracker les clics sur les liens externes
    const trackExternalLinks = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.startsWith('http') && !target.href.includes(window.location.hostname)) {
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'external_link',
            event_label: target.href,
          });
        }
      }
    };

    // Tracker les téléchargements
    const trackDownloads = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.download) {
        if (window.gtag) {
          window.gtag('event', 'download', {
            event_category: 'file_download',
            event_label: target.href,
          });
        }
      }
    };

    // Tracker le temps passé sur la page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag && timeSpent > 10) { // Seulement si plus de 10 secondes
        window.gtag('event', 'timing_complete', {
          name: 'page_view_time',
          value: timeSpent,
        });
      }
    };

    document.addEventListener('click', trackExternalLinks);
    document.addEventListener('click', trackDownloads);
    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {
      document.removeEventListener('click', trackExternalLinks);
      document.removeEventListener('click', trackDownloads);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, []);

  return null; // Ce composant ne rend rien
};

// Fonctions utilitaires pour le tracking manuel
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (page_title: string, page_location: string) => {
  if (window.gtag) {
    window.gtag('config', 'GA_TRACKING_ID', {
      page_title,
      page_location,
    });
  }
};

export default Analytics;