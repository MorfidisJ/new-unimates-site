import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Seo({
  title = "UniMates — #1 Roommate & Flatmate Matching App for Students",
  description = "Swipe right for verified university flatmates, safe student accommodations, and thriving youth communities in Ioannina and across Greece. AI-powered roommate matching.",
  keywords = "UniMates, flatmate matching, roommate finder, university students, housing Ioannina, Greece student accommodation, roommate app",
  image = "https://unimates.net/assets/images/og-preview.png",
  url = "https://unimates.net/",
  type = "website",
  structuredData = null
}) {
  return (
    <Helmet>
      {/* Primary Page Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="UniMates" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Dynamic JSON-LD Structured Data Schema */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
