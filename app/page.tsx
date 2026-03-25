import Script from "next/script";
import { Home } from "@/components/Home";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can we launch our school website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most schools can launch in 7 to 14 days with content and admissions setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can this website improve admissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It is built with admissions-focused CTA flow, trust-building sections, and lead capture touchpoints.",
      },
    },
    {
      "@type": "Question",
      name: "Is this school website SEO friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It includes indexable semantic structure, metadata, sitemap, robots, and conversion-oriented content sections.",
      },
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "e-School",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-95050-09699",
      email: "aideveloperindia@gmail.com",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Home />
    </>
  );
}
