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
    title: "Program & Fees - VST ADYPU Pune | Vedam School of Technology",
    description:
        "Explore the VST ADYPU Pune Computer Science and AI program, fee structure, hostel fees, scholarships, financing options, and campus details.",
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
        title: "Program & Fees - VST ADYPU Pune",
        description:
            "Review the VST ADYPU Pune CS & AI program, fees, hostel options, scholarships, financing, and campus details.",
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
