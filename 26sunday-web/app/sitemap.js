import { reportsList } from '@/content/reports';

/**
 * Dynamic sitemap.xml generation — matches the full route tree from 02_site_architecture.md
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const baseUrl = 'https://26sunday.com';
  const now = new Date().toISOString();

  const reportRoutes = reportsList.map((report) => ({
    url: `${baseUrl}/resources/reports/${report.slug}`,
    lastModified: report.date ? new Date(report.date).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const routes = [
    // Home & Onboarding
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/get-started`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },

    // Solutions
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/trust-center`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/questionnaire`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/status-page`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/readiness-assessment`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/knowledge-base`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Platform
    { url: `${baseUrl}/platform`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/platform/saas`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/platform/saas-plus`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // Resources
    { url: `${baseUrl}/resources/reports`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...reportRoutes,
    { url: `${baseUrl}/resources/documentation`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources/product-updates`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // Company
    { url: `${baseUrl}/company/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/company/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/company/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Legal
    { url: `${baseUrl}/legal/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/legal/terms-of-use`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/legal/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];

  return routes;
}
