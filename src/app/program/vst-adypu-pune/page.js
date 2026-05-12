import ProgramPage from "../ProgramPage";
import { puneConfig } from "../ProgramConfigs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const puneProgramSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollegeOrUniversity",
            "@id": "https://www.vedam.org/#organization",
            name: "Vedam School of Technology",
            alternateName: "Vedam School",
            url: "https://www.vedam.org/",
            logo: "https://www.vedam.org/_next/image?url=%2Fimg%2Fvedam_logo.webp&w=256&q=75",
            sameAs: [
                "https://www.instagram.com/vedamschooloftechnology",
                "https://www.youtube.com/@vedamschooloftechnology",
            ],
        },
        {
            "@type": "Course",
            name: "CS(AI) Programme at ADYPU Pune",
            description:
                "4-year on-campus undergraduate programme in Computer Science with Artificial Intelligence specialisation, delivered by Vedam School of Technology at the ADYPU Lohegaon campus in Pune.",
            url: "https://www.vedam.org/program/vst-adypu-pune",
            educationalCredentialAwarded: "Bachelor of Technology (BTech)",
            provider: {
                "@type": "CollegeOrUniversity",
                name: "Vedam School of Technology",
                url: "https://www.vedam.org/",
            },
            hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "On-campus",
                courseWorkload: "P4Y",
                location: {
                    "@type": "Place",
                    name: "Ajeenkya DY Patil University, Lohegaon, Pune",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Pune",
                        addressRegion: "Maharashtra",
                        addressCountry: "IN",
                    },
                },
            },
        },
    ],
};

export const metadata = {
    title: "BTech in CS & AI in Pune | New Age College | Vedam",
    description:
        "Apply for a 4-year BTech in Computer Science & AI in Pune. New age private CS college with industry curriculum, top placements, and startup culture. 2026 batch.",
    keywords: [
        "VST Pune program and fees",
        "Vedam ADYPU Pune program fees",
        "VST ADYPU Pune BTech fees",
        "Vedam Pune BTech Computer Science AI",
        "BTech Computer Science and AI Pune",
        "AI engineering college Pune fees",
        "Computer Science AI college Pune",
        "ADYPU Pune BTech AI program",
        "Vedam Pune fee structure",
        "Vedam Pune hostel fees",
        "VST Pune scholarships",
        "VST Pune financing options",
        "BTech AI course fees Pune",
        "Vedam School of Technology Pune",
        "Ajeenkya DY Patil University Vedam",
    ],
    openGraph: {
        title: "BTech in CS & AI in Pune | New Age College | Vedam",
        description:
            "Apply for a 4-year BTech in Computer Science & AI in Pune. New age private CS college with industry curriculum, top placements, and startup culture. 2026 batch.",
        url: "https://www.vedam.org/program/vst-adypu-pune",
        siteName: "Vedam School of Technology",
        type: "website",
        images: [
            {
                url: "/img/Vedam_Final_Logo_White.webp",
                width: 1200,
                height: 630,
                alt: "Program & Fees - VST ADYPU Pune",
            },
        ],
    },
};

export default function PuneProgramPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(puneProgramSchema) }}
            />
            <BreadcrumbSchema />
            <ProgramPage config={puneConfig} />
        </>
    );
}
