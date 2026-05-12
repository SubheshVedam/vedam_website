import ProgramPage from "../ProgramPage";
import { gurugramConfig } from "../ProgramConfigs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const gurugramProgramSchema = {
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
            name: "CS(AI) Programme at Sushant University Gurugram",
            description:
                "4-year on-campus undergraduate programme in Computer Science with Artificial Intelligence specialisation, delivered by Vedam School of Technology at the Sushant University campus in Gurugram, Delhi NCR.",
            url: "https://www.vedam.org/program/vst-gurugram",
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
                    name: "Sushant University, Gurugram",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Gurugram",
                        addressRegion: "Haryana",
                        addressCountry: "IN",
                    },
                },
            },
        },
    ],
};

export const metadata = {
    title: "Program & Fees - VST Gurugram | Vedam School of Technology",
    description:
        "Explore the VST Gurugram Computer Science and AI program, fee structure, hostel details, scholarships, financing options, and campus information.",
    keywords: [
        "VST Gurugram program and fees",
        "Vedam Gurugram program fees",
        "VST Gurugram BTech fees",
        "Vedam Gurugram BTech Computer Science AI",
        "BTech Computer Science and AI Gurugram",
        "AI engineering college Gurugram fees",
        "Computer Science AI college Gurugram",
        "Sushant University BTech AI program",
        "Vedam Gurugram fee structure",
        "Vedam Gurugram hostel fees",
        "VST Gurugram scholarships",
        "VST Gurugram financing options",
        "BTech AI course fees Gurugram",
        "Vedam School of Technology Gurugram",
        "Sushant University Vedam",
        "CS AI college Delhi NCR",
        "AI engineering college Delhi NCR",
    ],
    openGraph: {
        title: "Program & Fees - VST Gurugram",
        description:
            "Review the VST Gurugram CS & AI program, fees, hostel details, scholarships, financing, and campus information.",
        url: "https://www.vedam.org/program/vst-gurugram",
        siteName: "Vedam School of Technology",
        type: "website",
        images: [
            {
                url: "/img/Vedam_Final_Logo_White.webp",
                width: 1200,
                height: 630,
                alt: "Program & Fees - VST Gurugram",
            },
        ],
    },
};

export default function GurugramProgramPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(gurugramProgramSchema) }}
            />
            <BreadcrumbSchema />
            <ProgramPage config={gurugramConfig} />
        </>
    );
}
