const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Admissions",
      item: "https://www.vedam.org/admission",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "VST Pune",
      item: "https://www.vedam.org/program/vst-adypu-pune",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "VST Gurugram",
      item: "https://www.vedam.org/program/vst-gurugram",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Placement",
      item: "https://www.vedam.org/placement",
    },
  ],
};

export default function BreadcrumbSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
