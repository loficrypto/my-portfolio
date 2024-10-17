import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "url": "https://yourportfolio.com",
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile",
      "https://github.com/yourusername",
      "https://twitter.com/yourprofile"
    ],
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Your Company"
    },
    "description": "A passionate developer creating dynamic web applications with JavaScript, React, and Next.js."
  };

  return (
    <html lang="en">
      <head>
        <title>Developer Portfolio</title>
        <meta name="description" content="A passionate developer creating dynamic web applications with JavaScript, React, and Next.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="developer, portfolio, JavaScript, React, Next.js" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Developer Portfolio" />
        <meta property="og:description" content="A passionate developer creating dynamic web applications." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
