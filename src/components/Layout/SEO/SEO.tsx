import React from 'react';
import { Helmet } from 'react-helmet';
// import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          keyword
          description
          siteUrl
          author
        }
      }
    }
  `);

  return (
    <Helmet>
      <meta name="keywords" content={data.site.siteMetadata.keyword} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Suyeonme" />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      {/* <meta property="og:image" content={data.site.siteMetadata.image} /> */}
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}`} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;0,900;1,900&display=swap"
        rel="stylesheet"
      />
      <title>Suyeon | Web Developer</title>
      <script type="application/ld+json">
        {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "url": "http://www.suyeonme.com",
                "name": "Suyeonme"
              }
            `}
      </script>
    </Helmet>
  );
};

export default SEO;
